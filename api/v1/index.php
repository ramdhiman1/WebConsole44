<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

$method = $_SERVER['REQUEST_METHOD'];
$db_file = "data.json";

// --- SECURITY CHECK 1: Limit JSON Payload Size (Protects against DOS) ---
$content_length = (int)$_SERVER['CONTENT_LENGTH'] ?? 0;
if ($content_length > 1024 * 500) { // Max 500KB
    http_response_code(413);
    echo json_encode(["error" => "Payload too large. Use standard API JSON body."]);
    exit;
}

// --- SECURITY CHECK 2: Validate HTTP Method ---
if (!in_array($method, ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'])) {
    http_response_code(405);
    echo json_encode(["error" => "Method $method is not allowed."]);
    exit;
}

$users = json_decode(file_get_contents($db_file), true);

// --- GET Method ---
if ($method == 'GET') {
    echo json_encode($users);
}

// --- POST Method ---
elseif ($method == 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    if ($input) {
        $id = count($users) > 0 ? max(array_column($users, 'id')) + 1 : 1;
        $input['id'] = $id;
        $users[] = $input;
        file_put_contents($db_file, json_encode($users, JSON_PRETTY_PRINT));
        echo json_encode(["message" => "User Created (PHP Mock)", "user" => $input]);
    } else {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON body"]);
    }
}

// --- PUT Method ---
elseif ($method == 'PUT') {
    $input = json_decode(file_get_contents('php://input'), true);
    $path = explode('/', $_SERVER['REQUEST_URI']);
    $id = end($path); // Get ID from URL
    
    // Check if ID is in query string or path
    if (!is_numeric($id)) $id = $_GET['id'] ?? null;

    $found = false;
    foreach ($users as $key => $user) {
        if ($user['id'] == $id) {
            $users[$key] = array_merge($user, $input);
            $users[$key]['id'] = (int)$id;
            $found = true;
            break;
        }
    }
    
    if ($found) {
        file_put_contents($db_file, json_encode($users, JSON_PRETTY_PRINT));
        echo json_encode(["message" => "User Updated", "user" => $users[$key]]);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "User ID $id not found"]);
    }
}

// --- DELETE Method ---
elseif ($method == 'DELETE') {
    $path = explode('/', $_SERVER['REQUEST_URI']);
    $id = end($path);
    if (!is_numeric($id)) $id = $_GET['id'] ?? null;

    $found = false;
    foreach ($users as $key => $user) {
        if ($user['id'] == $id) {
            unset($users[$key]);
            $users = array_values($users);
            $found = true;
            break;
        }
    }

    if ($found) {
        file_put_contents($db_file, json_encode($users, JSON_PRETTY_PRINT));
        echo json_encode(["message" => "User Deleted Successfully"]);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "User ID $id not found"]);
    }
}
?>

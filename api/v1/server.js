const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so Postman can hit it
app.use(cors());
app.use(express.json());

// In-memory "Database" (No real DB needed!)
let users = [
    { id: 1, name: "Ram Sharma", role: "Lead QA", email: "ram@ramtechnicalhelp.com" },
    { id: 2, name: "Anita Singh", role: "Automation Engineer", email: "anita@ramtechnicalhelp.com" }
];

// --- GET All Users ---
app.get('/api/v1/users', (req, res) => {
    res.json(users);
});

// --- POST Create User ---
app.post('/api/v1/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
    users.push(newUser);
    res.status(201).json({ message: "User Created (In Memory)", user: newUser });
});

// --- PUT Update User ---
app.put('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body, id: id };
        res.json({ message: "User Updated", user: users[index] });
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// --- DELETE User ---
app.delete('/api/v1/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        const deleted = users.splice(index, 1);
        res.json({ message: "User Deleted", user: deleted[0] });
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

app.listen(PORT, () => {
    console.log(`Mock API Server running at http://localhost:${PORT}`);
});

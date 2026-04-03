const fs = require('fs');
const path = require('path');

console.log("Generating PWA Assets...");

// 1. PWA Manifest
const manifestPath = path.join(__dirname, 'manifest.json');
const manifestData = `{
    "name": "Ram Technical Help - QA Hub",
    "short_name": "QA Hub",
    "description": "Master QA, Automation, and APIs offline.",
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#0f172a",
    "theme_color": "#4f46e5",
    "icons": []
}`;
fs.writeFileSync(manifestPath, manifestData);

// 2. Service Worker for Offline Caching
const swPath = path.join(__dirname, 'sw.js');
const swData = `
const CACHE_NAME = 'qa-hub-v1';
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/', 
                '/index.html', 
                '/practice-lab.html',
                '/assets/css/styles.css', 
                '/assets/js/app.js', 
                '/assets/js/components.js'
            ]);
        })
    );
});
self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
`;
fs.writeFileSync(swPath, swData);

console.log("Modifying Styles for Widgets...");
// 3. Inject CSS rules for the Chat Widget and Progress Bar
const cssPath = path.join(__dirname, 'assets', 'css', 'styles.css');
if(fs.existsSync(cssPath)) {
    const addCSS = `\n
/* --- PWA, Progress & Chatbot Additions --- */
.reading-progress-bar {
    position: fixed;
    top: 0; left: 0; height: 5px; 
    background: linear-gradient(90deg, #4f46e5, #06b6d4); 
    z-index: 999999;
    width: 0%; transition: width 0.1s ease;
}
.qa-mentor-widget {
    position: fixed; bottom: 25px; right: 25px; z-index: 9999;
}
.qa-mentor-btn {
    width: 65px; height: 65px; border-radius: 50%; 
    background: linear-gradient(135deg, var(--brand-primary), var(--lab-primary));
    color: white; border: none; font-size: 1.6rem; cursor: pointer;
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.4); 
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.qa-mentor-btn:hover { 
    transform: scale(1.1) translateY(-5px); 
    box-shadow: 0 15px 30px rgba(79, 70, 229, 0.6); 
}
.qa-mentor-panel {
    position: absolute; bottom: 85px; right: 0; width: 340px; 
    background: var(--bg-surface);
    border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); 
    border: 1px solid var(--border-light);
    display: none; flex-direction: column; overflow: hidden;
    transform-origin: bottom right; animation: popUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
@keyframes popUp { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
.qa-mentor-header { 
    background: linear-gradient(90deg, var(--bg-surface), var(--bg-surface-alt)); 
    border-bottom: 2px solid var(--brand-primary);
    padding: 1.2rem; font-weight: 800; display:flex; justify-content:space-between;
    align-items: center; font-size: 1.1rem;
}
.qa-mentor-body { padding: 1.2rem; max-height: 350px; overflow-y: auto; font-size:0.95rem; }
.chat-msg { 
    background: var(--bg-surface-alt); padding: 1rem; border-radius: var(--radius-md); 
    margin-bottom:1rem; border-left: 3px solid var(--brand-primary); line-height: 1.5;
}
`;
    let cssData = fs.readFileSync(cssPath, 'utf8');
    if(!cssData.includes('reading-progress-bar')) {
        fs.appendFileSync(cssPath, addCSS);
    }
}

console.log("Injecting Logic into Components...");
// 4. Inject Logic into Components.init()
const compPath = path.join(__dirname, 'assets', 'js', 'components.js');
let compSource = fs.readFileSync(compPath, 'utf8');

const featureJS = `
        // -- Start Added Premium Features --
        
        // 1. Reading Progress Bar
        const prog = document.createElement('div');
        prog.className = 'reading-progress-bar';
        document.body.appendChild(prog);
        window.addEventListener('scroll', () => {
            const h = document.documentElement;
            const scroll = h.scrollTop || document.body.scrollTop;
            const height = h.scrollHeight - h.clientHeight;
            prog.style.width = (scroll / height) * 100 + "%";
        });

        // 2. Mock AI Mentor Widget
        if(!document.querySelector('.qa-mentor-widget')) {
            const mentor = document.createElement('div');
            mentor.className = 'qa-mentor-widget';
            mentor.innerHTML = \`
                <div class="qa-mentor-panel" id="mentorPanel">
                    <div class="qa-mentor-header">
                        <span><i class="fas fa-robot" style="color:var(--brand-primary)"></i> QA Mentor AI</span>
                        <i class="fas fa-times" style="cursor:pointer; color:var(--text-muted);" onclick="document.getElementById('mentorPanel').style.display='none'"></i>
                    </div>
                    <div class="qa-mentor-body">
                        <div class="chat-msg">Hi! Need help tracking a bug, finding XPath, or writing a test? Check out our interactive hands-on labs!</div>
                        <a href="practice-lab.html" class="btn btn-outline" style="display:block; text-align:center; width: 100%">Go to Practice Lab <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <button class="qa-mentor-btn" onclick="const p = document.getElementById('mentorPanel'); p.style.display = (p.style.display==='flex')?'none':'flex';">
                    <i class="fas fa-comment-dots"></i>
                </button>
            \`;
            document.body.appendChild(mentor);
        }

        // 3. PWA & Service Worker Logic
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed: ', err));
        }
        
        // Inject Manifest tag dynamically into HEAD to avoid touching all HTML files manually
        if(!document.querySelector('link[rel="manifest"]')){
            const manifestLink = document.createElement('link');
            manifestLink.rel = 'manifest';
            manifestLink.href = 'manifest.json';
            document.head.appendChild(manifestLink);
        }
        // -- End Added Premium Features --
`;

if(!compSource.includes('Mock AI Mentor')){
    compSource = compSource.replace("const yearEl = document.getElementById('year-comp');", 
    `const yearEl = document.getElementById('year-comp');\n${featureJS}`);
    fs.writeFileSync(compPath, compSource);
}

// 5. In-Browser "Code Runner" Injection in practice-lab.html
const practiceLabPath = path.join(__dirname, 'practice-lab.html');
if(fs.existsSync(practiceLabPath)) {
    let labSource = fs.readFileSync(practiceLabPath, 'utf8');
    
    // Check if the Code terminal already exists
    if(!labSource.includes('id="jsCodeSandbox"')) {
        const jsSandboxHTML = `
                <!-- JS Code Sandbox Module (Added premium feature) -->
                <div class="card auto-practice-card" id="jsCodeSandbox">
                    <div class="card-header" style="background: linear-gradient(90deg, #1e293b, #0f172a); color: #fff;">
                        <i class="fab fa-js-square" style="color:#f7df1e"></i> JS Test Script Runner
                    </div>
                    <div class="card-body" style="background:#0f172a;">
                        <div class="instruction-box" style="margin-top:0; border-color: #f7df1e; background: rgba(247,223,30,0.1); color:#fff">
                            Write your JS testing assertions here. Instantly parses and runs in the browser.
                        </div>
                        <textarea id="liveCodeEditor" style="width:100%; height:150px; background:#1e293b; color:#a5b4fc; border:1px solid #334155; padding:1rem; font-family:'JetBrains Mono', monospace; border-radius:8px; margin-bottom:1rem;" spellcheck="false">// Write a basic test
let val = 10;
if(val === 10) {
   console.log("✅ Test Passed: value is 10");
} else {
   console.log("❌ Test Failed");
}</textarea>
                        <button class="btn btn-primary" onclick="try { let output = ''; const coreLog = console.log; console.log = (...a) => output += a.join(' ') + '\\n'; eval(document.getElementById('liveCodeEditor').value); console.log = coreLog; document.getElementById('codeRunnerOutput').innerText = output || 'Executed. (No output)'; } catch(e) { document.getElementById('codeRunnerOutput').innerText = 'Error: ' + e.message; }" style="margin-bottom:1rem; background:#f7df1e; color:#000; border:none; width:100%; font-weight:800;">Run Script <i class="fas fa-play"></i></button>
                        <div id="codeRunnerOutput" style="background:#000; color:#4ade80; padding:1rem; font-family:'JetBrains Mono', monospace; border-radius:8px; min-height:60px; font-size:0.85rem; border:1px solid #334155;">Output console ready...</div>
                    </div>
                </div>
        `;
        // Inject right after API Practice Lab section ends (or before Automation Lab section)
        // Finding `<div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">` inside automationLab
        labSource = labSource.replace(/<div class="card auto-practice-card">/i, `${jsSandboxHTML}\n                        <div class="card auto-practice-card">`);
        fs.writeFileSync(practiceLabPath, labSource);
        console.log("Added JS Terminal to Practice Lab");
    }
}

console.log("Enhancements applied successfully.");

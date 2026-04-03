const fs = require('fs');
const data = JSON.parse(fs.readFileSync('d:/My Site/My Site/Website/extracted_qa.json', 'utf8'));

function formatCategory(catData, title) {
    let html = `<h2 class="section-title" id="${title.toLowerCase().replace(/\s+/g, '-')}">📌 ${title}</h2>\n`;
    catData.forEach((item, index) => {
        html += `
        <details>
            <summary>${index + 1}. ${item.q}</summary>
            <div class="answer">
                <span class="lang-badge">English:</span> ${item.en}<br>
                <span class="lang-badge hinglish">Hinglish:</span> ${item.hi}<br>
                ${item.ex ? `<small><strong>Example:</strong> ${item.ex}</small>` : ''}
            </div>
        </details>\n`;
    });
    return html;
}

const autoHtml = 
    formatCategory(data.automation.beginner, 'Automation Fundamentals') +
    formatCategory(data.automation.intermediate, 'Intermediate Automation') +
    formatCategory(data.automation.advanced, 'Advanced Automation');

fs.writeFileSync('/tmp/automation_qs.html', autoHtml);

const manualHtml = 
    formatCategory(data.manual.beginner, 'Manual Foundation') +
    formatCategory(data.manual.intermediate, 'Process & Strategy') +
    formatCategory(data.manual.advanced, 'Advanced Scenarios');

fs.writeFileSync('/tmp/manual_qs.html', manualHtml);

const apiHtml = 
    formatCategory(data.api.beginner, 'API Basics') +
    formatCategory(data.api.intermediate, 'HTTP & Postman') +
    formatCategory(data.api.advanced, 'Advanced API & Security');

fs.writeFileSync('/tmp/api_qs.html', apiHtml);

const sqlHtml = 
    formatCategory(data.sql.intermediate, 'SQL Intermediate') +
    formatCategory(data.sql.advanced, 'SQL Advanced');

fs.writeFileSync('/tmp/sql_qs.html', sqlHtml);

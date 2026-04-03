
const fs = require('fs');

function extract(content, cat, lvl) {
    const startMarker = `${cat}: {`;
    const subMarker = `${lvl}: [`;
    
    let catStart = content.indexOf(startMarker);
    if (catStart === -1) return [];
    
    let lvlStart = content.indexOf(subMarker, catStart);
    if (lvlStart === -1) return [];
    
    let bracketCount = 1;
    let endIdx = lvlStart + subMarker.length;
    while (bracketCount > 0 && endIdx < content.length) {
        if (content[endIdx] === '[') bracketCount++;
        else if (content[endIdx] === ']') bracketCount--;
        endIdx++;
    }
    
    const arrString = content.substring(lvlStart + subMarker.length - 1, endIdx);
    
    // Very naive object extraction to avoid complex parsing
    const results = [];
    const itemRegex = /{ q: "([\s\S]*?)", options: \[[\s\S]*?\], correct: \d+, en: "([\s\S]*?)", hi: "([\s\S]*?)"(?:, ex: "([\s\S]*?)")?\s*}/g;
    let m;
    while ((m = itemRegex.exec(arrString)) !== null) {
        results.push({ q: m[1], en: m[2], hi: m[3], ex: m[4] || "" });
    }
    return results;
}

const content = fs.readFileSync('practice-lab.html', 'utf8');
const cats = ['manual', 'automation', 'api', 'sql'];
const lvls = ['beginner', 'intermediate', 'advanced'];

const final = {};
cats.forEach(c => {
    final[c] = {};
    lvls.forEach(l => {
        final[c][l] = extract(content, c, l);
    });
});

fs.writeFileSync('extracted_qa.json', JSON.stringify(final, null, 2));
console.log("Done");

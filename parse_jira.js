const fs = require('fs');
const path = require('path');

const xmlFilePath = path.join(__dirname, '321.xml');
const jsonFilePath = path.join(__dirname, 'lib', 'jira-data.json');

const xmlData = fs.readFileSync(xmlFilePath, 'utf-8');

// A simple but effective regex string extraction for Jira RSS XML
const items = [];
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
let match;

while ((match = itemRegex.exec(xmlData)) !== null) {
    const itemStr = match[1];

    const keyMatch = itemStr.match(/<key[^>]*>(.*?)<\/key>/);
    const summaryMatch = itemStr.match(/<summary>(.*?)<\/summary>/);
    const linkMatch = itemStr.match(/<link>(.*?)<\/link>/);
    const resolvedMatch = itemStr.match(/<resolved>(.*?)<\/resolved>/);
    const typeMatch = itemStr.match(/<type[^>]*>(.*?)<\/type>/);

    if (keyMatch && summaryMatch) {
        items.push({
            id: keyMatch[1],
            title: summaryMatch[1]
                .replace(/&amp;/g, '&')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'"),
            link: linkMatch ? linkMatch[1] : `https://theawareai.atlassian.net/browse/${keyMatch[1]}`,
            date: resolvedMatch ? new Date(resolvedMatch[1]).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent',
            type: typeMatch ? typeMatch[1] : 'Task'
        });
    }
}

// Write the parsed items to a clean JSON file
fs.writeFileSync(jsonFilePath, JSON.stringify(items.slice(0, 10), null, 2), 'utf-8');
console.log(`Successfully parsed ${items.length} Jira tickets. Saved top 10 to lib/jira-data.json.`);

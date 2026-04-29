//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Sanitize request URL to prevent SSRF via protocol-relative and backslash URLs
// See: https://github.com/angular/angular/security/advisories/GHSA-x7j2-3qr7-5x3h
app.use((req, res, next) => {
    if (req.url.startsWith('//') || req.url.startsWith('/\\') || req.url.startsWith('\\')) {
        req.url = '/' + req.url.replace(/^[/\\]+/, '');
    }
    next();
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/nailuj-portfolio/browser'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/nailuj-portfolio/browser/index.html'));
});

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;
app.listen(port);
console.log(`App listening on http://localhost:${port}`);
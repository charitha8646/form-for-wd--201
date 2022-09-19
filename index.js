const http = require('http');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

let homePage;
let projectPage;
let registrationPage;
let registrationScript;

fs.readFile("home.html", (err, data) => {
    if (err) throw err;
    homePage = data.toString();
})

fs.readFile("project.html", (err, data) => {
    if (err) throw err;
    projectPage = data.toString();
})

fs.readFile("registration.html", (err, data) => {
    if (err) throw err;
    registrationPage = data.toString();
})

fs.readFile("registration.js", (err, data) => {
    if (err) throw err;
    registrationScript = data.toString();
})

http.createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, {'Content-Type': 'text/html'});
    switch (url) {
        case "/project":
            response.write(projectPage);
            response.end();
            break;
        case "/registration":
            response.write(registrationPage);
            response.end();
            break;
        case "/registration.js":
            response.write(registrationScript);
            response.end();
            break;
        default:
            response.write(homePage);
            response.end();
            break;
    }
}).listen(args.port);
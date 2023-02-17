const http = require("http");
const fs = require("fs");
const { parse } = require("path");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    let data;
    if (!fs.existsSync("message.txt")) {
        data = undefined;
    } else {
        data = fs.readFileSync("message.txt", "utf-8");
    }

    if (url === "/") {
        res.setHeader("content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>A new App</title></head>");
        res.write(
            `<body><h2>${data}</h2><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>`
        );
        res.write("</html>");
        return res.end();
    }

    if (url === "/message" && method == "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const messageBody = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", messageBody);
        });

        res.setHeader("Location", "/");
        res.statusCode = 302;

        res.end();
    }
});

server.listen(4000);

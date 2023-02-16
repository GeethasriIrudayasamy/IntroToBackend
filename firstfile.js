const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>A new App</title></head>");
        res.write("<body><h3>Welcome to my Node Js project</h3></body>");
        res.write("</html>");
        return res.end();
    }
    if (req.url === "/home") {
        res.setHeader("content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>A new App</title></head>");
        res.write("<body><h3>Welcome home</h3></body>");
        res.write("</html>");
        return res.end();
    }
    if (req.url === "/about") {
        res.setHeader("content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>A new App</title></head>");
        res.write("<body><h3>Welcome to About Us page</h3></body>");
        res.write("</html>");
        return res.end();
    }
    if (req.url === "/node") {
        res.setHeader("content-type", "text/html");
        res.write("<html>");
        res.write("<head><title>A new App</title></head>");
        res.write("<body><h3>Welcome to my Node Js project</h3></body>");
        res.write("</html>");
        return res.end();
    }
});

server.listen(4000);

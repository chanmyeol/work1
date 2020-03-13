var http = require('http');
var url = require('url')
var fs = require('fs')
var path = require('path')

var server = http.createServer(function(req, res) {
    res.setHeader("Content-Type","text/html;charset=UTF-8")
    var urlObj = url.parse(req.url);
    var urlPathname = urlObj.pathname;
    var filePathname = path.join(__dirname, "/static", urlPathname);
    
    fs.readFile(filePathname, (err, data) => {
        // 如果有问题返回 404
        if (err) {
            res.writeHead(404);
            res.write("404 - File is not found!");
            res.end();
        // 没问题返回文件内容
        } else {
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    })
});


server.listen(3000, function() {
   
    console.log("'Server running at http://127.0.0.1:3000/'")
})

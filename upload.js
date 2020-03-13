var express =require('express')
var multer = require('multer')
var fs = require('fs')
var app = express()
var upload = multer({dest:'./static'})
app.post('/static', upload.single('logo'), function(req, res, next){
    var file = req.file;

    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path);
    res.send("已成功上传");
});

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./static/form.html', {encoding: 'utf8'});
    res.send(form);
});

app.listen(8080);
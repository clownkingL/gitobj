var express = require('express');
var app = express();
var path = require('path')
var favicon = require('serve-favicon');
app.use(require('body-parser')());
app.set('port',process.env.PORT || 3006);


//静态资源设置
app.use(express.static(__dirname+'/public'));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));

//配置路由
//路由1
app.get('/',function(req,res){
    res.type('text/html');
    res.send('<span style="color:green">Welcome to My Site</span>');
});
//路由2
app.get('/test',function(req,res){
    if(req.query.t){
        res.write('Ajax:'+Date.now());
        res.end();
    }else{
        res.send('<p>clown</p>');
        res.end();
    };
});
//路由3
app.post('/register',function(req,res){
    res.write(' '+req.body.email+' '+req.body.nicname + ' '+req.body.password+' '+ req.body.password2);
    res.end();
});
app.post('/loadin',function(req,res){
    res.write(' '+req.body.nicname + ' '+req.body.password+' ');
    res.end();
});
//定制404页面
app.use(function(req,res){
    res.type('text/html');
    res.status(404);
    res.send('<span style="color:red">404 - Not Found </span>');
});

//定制500页面
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+app.get('port')+'press Ctrl-C to terminate.');
});

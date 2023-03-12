const express=require('express');
const app=express();
app.get('/', function(req,res){
    res.send('hello,world!\n');

});
app.listen(8080,function(){
    console.log('Example app listening on port 8080 ');
    console.log(app.get());
});
module.exports=app;
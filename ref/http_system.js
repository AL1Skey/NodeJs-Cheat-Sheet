const http = require('http');

//Create server Object
http
.createServer((req,res)=>{
    res.write("Hello World");
    res.end();
})
.listen(5400,()=>{console.log("Server running at port 5400")})
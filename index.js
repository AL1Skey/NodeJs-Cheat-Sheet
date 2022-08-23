// const Someone = require('./person');

// const person1 = new Someone("Adam",44);

// person1.greeting();

// const Log = require('./logger');

// const logger = new Log();

// logger.on('message', function(data){console.log(`Called data: `,data);} )

// logger.log("HELLO WORLD");

//Make Server
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    //Get the url request call
    // http://somte.com/ => req.url return (/)
    // http://somte.com/profile => req.url return (/profile)
    //console.log(req.url);

    // INSERT BASIC WEBPAGE(HTML) TO ROOT PAGE
    // switch(req.url){
    //     //Print index.html page on root page
    //     case "/":
    //         fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
                
    //             if(err) throw err;

    //             res.writeHead(200,{"Content-Type":'text/html'})//ITS COMMONLY DEFINE THE RESPONSE Content TYPE
    //             res.end(content);
    //         })
    //         break;

    //     //Print Users json data
    //     case "/api/users":
    //         const users = [
    //             {name:"BOB DOE",age:40},
    //             {name:"Jon Sith",age:20},
    //             {name:"Greg Band",age:30}
    //         ];
    //         res.writeHead(200,{"Content-Type":'application/json'});
    //         res.end(JSON.stringify(users));
    //         break;
    // }


    //BUILD Dynamic FILE PATH
    let filePath = path.join(
        __dirname,
        "public", 
        (req.url==='/' ? 'index.html':req.url) 
        );

    //Get extension name and build contentType
    let extname = path.extname(filePath);
    let contentType = {"Content-Type":"text/html"};

    

    //Set contentType according to extension
    switch(extname){
        case ".js":
            contentType = {"Content-Type":"text/javascript"};
            break;
        case ".css":
            contentType = {"Content-Type":"text/css"};
            break;
        case ".json":
            contentType = {"Content-Type":"application/json"};
            break;
        case ".png":
            contentType = {"Content-Type":"image/png"};
            break;
        case ".jpg":
            contentType = {"Content-Type":"image/jpg"};
            break;
    }

    //Read file page
    fs.readFile(filePath,(err,content)=>{
        //If error Show error in page
        if(err){
            if(err.code){
                res.writeHead(500);
                res.end(`<h1>${err}</h1>`);
            }
        }

        //Else insert file page
        else{
            //Set Content type
            res.writeHead(200,contentType);
            //Set respond page with fetched file
            res.end(content,'utf-8');
        }

    })

    

});

//Get port from environment variable otherwise 500
const PORT = process.env.PORT || 500;

//Listen server 
server.listen(PORT,()=>console.log("Server running at",PORT));

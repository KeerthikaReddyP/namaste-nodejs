const http=require("node:http");

const server=http.createServer(function(req,res){
    if(req.url ==="/getSecretData") res.end("There's no secret dataa...Hehe");
    
    res.end("Hellooo worldd!!!!!!");
});

server.listen(7777);

// Server is created and ready to listen to incoming requests
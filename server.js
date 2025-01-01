const http=require("node:http");

const server=http.createServer(function(req,res){
    res.end("Hellooo worldd!!!!!!");
});

server.listen(7777);

// Server is created and ready to listen to incoming requests
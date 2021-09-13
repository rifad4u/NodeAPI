var http = require("http");
var server = http.createServer((req,res)=>{
    res.write("Hai");
    res.end();
    
})
server.listen(process.env.PORT||3000);

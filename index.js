var server = http.createServer((req,res)=>{
    res.write("Hai");
    res.end();
    
})
server.listen(3000);

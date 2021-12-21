const http = require('http')
const server = http.createServer((req, res) => {
    const url = req.url;

    if (url ==='/' || url === '/index'){
        res.writeHead(200,{'Content-Type' : 'text/html; charset=UTF-8'});
        res.write("<h2>Anasayaya hoşgeldiniz<h>")
    }else if (url ==='/hakkimda'){
        res.writeHead(200,{'Content-Type' : 'text/html; charset=UTF-8'});
        res.write("<h2>Hakkimda sayfasına hoşgeldiniz<h>")
    }else if (url ==='/iletisim'){
        res.writeHead(200,{'Content-Type' : 'text/html; charset=UTF-8'});
        res.write("<h2>iletisim sayfasına hoşgeldiniz<h>")
    }else{
        res.writeHead(200,{'Content-Type' : 'text/html; charset=UTF-8'});
        res.write("<h1>404 page not found<h1>")
    }
    console.log(url)
    res.end();
});
const port = 5000
server.listen(port, () => {
    console.log(`localhost:${port}`)
})
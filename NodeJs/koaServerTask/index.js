const koa = require('koa'),
router = require('koa-router')();
var app = new koa();

router.get('/index', (ctx, next)=> {
 ctx.body = "<h1>index sayfasına hoşgeldiniz</h1>"
});

router.get('/about', (ctx, next)=> {
   ctx.body = "<h1>Hakkımda sayfasına hoşgeldiniz</h1>"
  });

router.get('/contact', (ctx, next)=> {
   ctx.body = "<h1>İletişim sayfasına hoşgeldiniz</h1>"
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("Listening on port 3000");
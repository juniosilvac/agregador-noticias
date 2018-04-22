var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaIncluirNoticias = require('./app/routes/incluirNoticia')(app);

app.listen(3000, function() {
  console.log('Servidor Express Executando na porta: 3000')
});

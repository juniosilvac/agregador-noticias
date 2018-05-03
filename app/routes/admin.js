module.exports = function(application) {
  application.get('/incluirNoticia', function(req, res){
    res.render("admin/incluiNoticia");
  });

  application.post('/noticias/salvar', function(req, res){
    var noticia = req.body;  

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    
    noticiasModel.salvarNoticia(noticia, function(error, result){
      res.redirect("/noticias");    
    });  
  });
}
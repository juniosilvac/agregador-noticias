module.exports = function(application) {
  application.get('/incluirNoticia', function(req, res){
    res.render("admin/incluiNoticia");
  });

  application.post('/noticias/salvar', function(req, res){
    var noticia = req.body;  

    var connection = application.config.dbConnection();
    var noticiasModel = application.app.models.noticiasModel;
    
    noticiasModel.salvarNoticia(noticia, connection, function(error, result){
      res.redirect("/noticias");    
    });  
  });
}
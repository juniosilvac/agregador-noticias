module.exports = function(app) {
  app.get('/incluirNoticia', function(req, res){
    res.render("admin/incluiNoticia");
  });
}
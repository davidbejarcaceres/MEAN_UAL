/* GET home page */
module.exports.homelist = function(req, res){
  //Renderiza index.pug y manda las variables
  res.render('index',
      {
        title: 'Express', //variable título
        nombre: "David" // Variable nombre
      });
};

module.exports.locationInfo = function(req, res){
  //Renderiza index.pug y manda las variables
  res.render('locations-list',
      {
        title: 'locationinfo', //variable título
        nombre: "David" // Variable nombre
      });
};

module.exports.addReview = function(req, res){
  //Renderiza index.pug y manda las variables
  res.render('index',
      {
        title: 'addReview', //variable título
        nombre: "David" // Variable nombre
      });
};

module.exports.about = function(req, res){
  //Renderiza index.pug y manda las variables
  res.render('index',
      {
        title: 'About', //variable título
        nombre: "David" // Variable nombre
      });
};

module.exports.api = function(req, res){
  //Renderiza index.pug y manda las variables
  res.setHeader('Content-Type', 'application/json');
  res.json((
    {nombre: "David",
     edad: "24",
     pais: "Ecuador"}));
};

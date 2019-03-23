/* GET home page */
module.exports.index = function(req, res){
  //Renderiza index.pug y manda las variables
  res.render('index',
      {
        title: 'Express', //variable título
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

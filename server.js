var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();
app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name',mainCtrl.getData);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupations);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family:gender',mainCtrl.getFamilyByGender);
app.get('restaurants', mainCtrl.getRestaurants);
app.get('/skillz', mainCtrl.getSkillz);

app.put('/name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);

app.post('/hobbies', mainCtrl.createHobby);
app.post('/occupations', mainCtrl.createOccupation);
app.post('/family', mainCtrl.createFamily);
app.post('/restaurants', mainCtrl.createRestaurant);
app.post('/skillz', middleware.generateId, mainCtrl.createSkillz);




















app.listen(3000, function(){
  console.log("listening");
});

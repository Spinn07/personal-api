var data = require('../models/user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {
  getData: function(req, res, next){
    res.status(200).json({name: data.name});
  },
  getLocation: function(req, res, next){
    res.status(200).json({location: data.location});
  },
  getOccupations: function(req, res, next){
    if (req.query.order){
      if (req.query.order === "desc"){
        res.json({occupations: user.occupations.sort()});
      } if (req.query.order === "asc"){
        res.json({occupations: user.occupations.sort().reverse()});
      } else {
        res.json({occupations: user.occupations});

      }

    }
    res.status(200).json(data.occupations);
  },
  getLatestOccupations: function(req, res, next){
    res.status(200).json({latest :data.occupations});
  },
  index4: function(req, res, next){
    var lastest = user.slice(2,3);
    res.status(200).json(latest);
  },
  getHobbies: function(req, res, next){
    res.status(200).json({hobbies :data.hobbies});
  },
  getHobbiesType: function(req, res, next){
    var type = req.params.type;
    var result = data.hobbies.filter(function(elem){
      return elem.type === type;
          });
      res.json({hobby_by_type: result});



  },
  getFamily: function(req, res, next){
    res.status(200).json(data.family);

  },
  getFamilyByGender: function(req, res, next){
    var gender = req.params.gender;
    var results = data.family.filter(function(elem){
      return elem.gender === gender;
    });
    res.json({family_by_gender: results});

  },
  getRestaurants: function(req, res, next){
    res.status(200).json(user.restaurants);
  },
  getRestaurantsByName: function(req, res, next){
    var name = req.params.name;
    var result = data.restaurants.filter(function(elem){
      return elem.name === name;
    });
    res.json({restaurant_by_name: result});
  },
  //Step 5
  updateName: function(req, res, next){
    user.name = req.body.name;
		res.send();
  },
  updateLocation: function(req, res, next){
		user.location = req.body.location;
		res.send();
  },
  createHobby: function(req, res, next){
		var propNames = Object.getOwnPropertyNames(req.body);
		if (propNames.length === 2 && propNames[0] === 'name' && propNames[1] === 'type'){
			user.hobbies.push(req.body);
		}
		res.send(user.hobbies);
  },
  createOccupation: function(req, res, next){
		user.occupations.push(req.body.occupation);
		res.send(user.occupations);
  },
  createFamily: function(req, res, next){
		var propNames = Object.getOwnPropertyNames(req.body);
		if (propNames.length === 3 && propNames[0] === 'name' && propNames[1] === 'relation' && propNames[2] === 'gender'){
			user.family.push(req.body);
		}
		res.send(user.family);
  },
  createRestaurant: function(req, res, next){
		var propNames = Object.getOwnPropertyNames(req.body);
		if (propNames.length === 3 && propNames[0] === 'name' && propNames[1] === 'type' && propNames[2] === 'rating'){
			user.restaurants.push(req.body);
		}
		res.send(user.restaurants);
  },
  getSkillz: function(req, res, next){
		if (req.query.experience){
			var result = skillz.filter(function(elem){
				return elem.experience === req.query.experience;
			});
			res.json(result);
		} else {
			res.json(skillz);
		}
},
createSkillz: function(req, res, next){
		var propNames = Object.getOwnPropertyNames(req.body);
		if (propNames.length === 3 && propNames[0] === 'name' && propNames[1] === 'experience' && propNames[2] === 'id'){
			skillz.push(req.body);
		}
		res.json(skillz);
	},

};

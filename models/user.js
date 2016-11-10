var user = {
  name: "Spinn",
  location: "Provo",
  occupations: ["fireman","policeman","teacher"],
  hobbies: [
    {
      name: "baseball",
      type: "sport"
    },
    {
      name: "basketball",
      type: "sport"
    },
    {
      name: "football",
      type: "sport"
    }
  ],
  family: [
    {
      name: "Jane",
      relation: "sister",
      gender: "female"
    },
    {
      name: "John",
      relation: "brother",
      gender: "male"
    },{
      name: "James",
      relation: "cousin",
      gender: "male"
    }
  ],
  restaurants: [
    {
      name: "McDonalds",
      type: "fastfood",
      rating: 5
    },
    {
      name: "BurgerKing",
      type: "fastfood",
      rating: 5
    },
    {
      name: "Culvers",
      type: "fastfood",
      rating: 8
    }
  ]
};
module.exports = user;

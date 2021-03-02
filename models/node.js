// Name: Simit Sanjay Yadav
// Student ID: 151009198
// Section: NCC

const mealKit = [
  {
    title: "Grilled Hash Browns",
    ingreidents: "with extra spicy fry and three sauces.",
    desc: "Hash Browns made with moms love and natural spices.",
    category: "",
    price: 18.99,
    cookTime: 12,
    serves: 2,
    cals: 520,
    imageUrl: "/IMAGES/Meal1.jpg",
    isTop: true,
  },
  {
    title: "Berry Omlelette with cherry.",
    ingreidents: "with chochalate spread on the top.",
    desc:
      "Omlette with some different combination and sweet taste which you never had before.",
    category: "",
    price: 15.99,
    cookTime: 10,
    serves: 1,
    cals: 410,
    imageUrl: "/IMAGES/Meal2.jpg",
    isTop: true,
  },
  {
    title: "EggRoll with traditional serve.",
    ingreidents: "with deep fry and chrispy as told.",
    desc:
      "Made with the traditional style to remember our tradition and love our anciesters gave us.",
    category: "",
    price: 22.55,
    cookTime: 20,
    serves: 3,
    cals: 700,
    imageUrl: "/IMAGES/Meal3.jpg",
    isTop: true,
  },
  {
    title: "Oven Baked Full Chicken",
    ingreidents:
      "A full chicken with crispyness, fully dry and prefectly cooked with the top cheafs in the city. In addition a bowl of salad to eat with it.",
    desc:
      "A perfect combination of priciousness and timings. Well crisipsed and baked.",
    category: "Classic",
    price: 9.99,
    cookTime: 30,
    serves: 4,
    cals: 620,
    imageUrl: "/IMAGES/menu1.jpg",
    isTop: false,
  },
  {
    title: "Beaf with fried Tomatoes.",
    ingreidents:
      "natural servings with deep fried or shallow fry as you say and finely baked beef with ketchup as you wish.",
    desc:
      "The food teaches us how important it is to remembe our nature who servers food to billions of people.",
    category: "Classic",
    price: 15.99,
    cookTime: 20,
    serves: "1",
    cals: 300,
    imageUrl: "/IMAGES/menu2.jpg",
    isTop: false,
  },
  {
    title: "Deep fried thick browns.",
    ingreidents: "Corriander above with yolk and thick fried potatoes.",
    desc: "Well served and preciously cooked.",
    category: "Classic",
    price: 30.31,
    cookTime: 15,
    serves: 2,
    cals: 220,
    imageUrl: "/IMAGES/menu3.jpg",
    isTop: false,
  },
  {
    title: "Thin slice of pork with lemons.",
    ingreidents: "No oil, no preservatives pure natural ingredients.",
    desc: "Well served and preciously cooked.",
    category: "Classic",
    price: 20.55,
    cookTime: 20,
    serves: 2,
    cals: 410,
    imageUrl: "/IMAGES/menu4.jpg",
    isTop: false,
  },
  {
    title: "Thin noodles with vegetables.",
    ingreidents: "No oil, no preservatives pure natural ingredients.",
    desc: "Well served and preciously cooked.",
    category: "Popular",
    price: 20.55,
    cookTime: 20,
    serves: 2,
    cals: 410,
    imageUrl: "/IMAGES/menu5.jpg",
    isTop: false,
  },
  {
    title: "Cookies with herbs and nutrition",
    ingreidents: "No oil, no preservatives pure natural ingredients.",
    desc: "Well served and preciously cooked.",
    category: "Popular",
    price: 20.55,
    cookTime: 20,
    serves: 2,
    cals: 410,
    imageUrl: "/IMAGES/menu6.jpg",
    isTop: false,
  },
];

module.exports.getOnTheMenu = function (category) {
  var onTheMenu = [];
  for (var i = 0; i < mealKit.length; i++) {
    if (mealKit[i].category == category) {
      onTheMenu.push(mealKit[i]);
    }
  }
  return onTheMenu;
};

module.exports.getTopMeals = function () {
  var topMeals = [];

  for (var i = 0; i < mealKit.length; i++) {
    if (mealKit[i].isTop) {
      topMeals.push(mealKit[i]);
    }
  }
  return topMeals;
};

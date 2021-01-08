const mockResponse = {
  pairedWines: ["sangiovese", "barbera wine", "shiraz"],
  pairingText:
    "Sangiovese, Barbera Wine, and Shiraz are my top picks for Pizza. The best wine for pizza depends on the toppings! Red sauce pizza will call for a red wine with some acidity, such as a barberan or sangiovese. Add pepperoni or sausage and you can go bolder with a syrah. One wine you could try is Fonterutoli Chianti Classico. It has 4.3 out of 5 stars and a bottle costs about 8 dollars.",
  productMatches: [
    {
      id: 440954,
      title: "Fonterutoli Chianti Classico",
      description:
        "Color: Deep purplish-red but bright and exceptionally concentrated.Bouquet: Extremely intense and complex with scents of cherries and raspberries accompanied by light toasty and spicy shadings.Flavor: The impact in the mouth is incisive but soft due to a substantial structure of tannins in which those that are soft and well rounded stand out. Acidity is fused with the wine's body and aids the transmission of pleasant sensations of warmth and strength. The wine features a long finish that is unusual for a regular Chianti Classico.Conclusions: Those who argue that Chianti Classico is a prickly and rough wine will change their minds after tasting this 1999, which is ready to drink now but will improve for at least five years more.Alcohol: 13.5% by volume",
      price: "$7.99",
      imageUrl: "https://spoonacular.com/productImages/440954-312x231.jpg",
      averageRating: 0.86,
      ratingCount: 6,
      score: 0.8073684210526315,
      link:
        "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ffonterutoli-chianti-classico-1998%2F12434",
    },
  ],
}

const mockResponse1 = {
  wineDescription:
    "Merlot is a dry red wine which is smooth and medium bodied.",
}

const mockResponse2 = {
  recommendedWines: [
    {
      id: 428396,
      title: "Rolling Stones 50th Anniversary Forty Licks Merlot Wine",
      description:
        "The 2012 Merlot captures the attitude of Mendocino County's style. Aromas of black cherry, leather, and tobacco are followed by rich flavors of cinnamon over vanilla. This dry red wine is a fine match for herb-roasted chicken, grilled beef or smoky chili.",
      price: "$16.99",
      imageUrl: "https://spoonacular.com/productImages/428396-312x231.jpg",
      averageRating: 0.96,
      ratingCount: 7.0,
      score: 0.9145454545454546,
      link:
        "https://www.amazon.com/Rolling-Stones-Anniversary-Merlot-Mendocino/dp/B01NCT6E9V?tag=spoonacular-20",
    },
  ],
  totalFound: 31,
}

const mockResponse3 = {
  id: 9266,
  original: "pineapples",
  originalName: "pineapples",
  name: "pineapples",
  amount: 1.0,
  unit: "",
  unitShort: "",
  unitLong: "",
  possibleUnits: ["piece", "slice", "fruit", "g", "oz", "cup", "serving"],
  estimatedCost: {
    value: 299.0,
    unit: "US Cents",
  },
  consistency: "solid",
  shoppingListUnits: ["pieces"],
  aisle: "Produce",
  image: "pineapple.jpg",
  meta: [],
  nutrition: {
    nutrients: [
      {
        title: "Calories",
        amount: 452.5,
        unit: "kcal",
        percentOfDailyNeeds: 22.63,
      },
      {
        title: "Fat",
        amount: 1.09,
        unit: "g",
        percentOfDailyNeeds: 1.67,
      },
      {
        title: "Saturated Fat",
        amount: 0.08,
        unit: "g",
        percentOfDailyNeeds: 0.51,
      },
      {
        title: "Carbohydrates",
        amount: 118.74,
        unit: "g",
        percentOfDailyNeeds: 39.58,
      },
      {
        title: "Net Carbohydrates",
        amount: 106.07,
        unit: "g",
        percentOfDailyNeeds: 38.57,
      },
      {
        title: "Sugar",
        amount: 89.14,
        unit: "g",
        percentOfDailyNeeds: 99.05,
      },
      {
        title: "Cholesterol",
        amount: 0.0,
        unit: "mg",
        percentOfDailyNeeds: 0.0,
      },
      {
        title: "Sodium",
        amount: 9.05,
        unit: "mg",
        percentOfDailyNeeds: 0.39,
      },
      {
        title: "Protein",
        amount: 4.89,
        unit: "g",
        percentOfDailyNeeds: 9.77,
      },
      {
        title: "Vitamin C",
        amount: 432.59,
        unit: "mg",
        percentOfDailyNeeds: 524.35,
      },
      {
        title: "Manganese",
        amount: 8.39,
        unit: "mg",
        percentOfDailyNeeds: 419.47,
      },
      {
        title: "Vitamin B6",
        amount: 1.01,
        unit: "mg",
        percentOfDailyNeeds: 50.68,
      },
      {
        title: "Fiber",
        amount: 12.67,
        unit: "g",
        percentOfDailyNeeds: 50.68,
      },
      {
        title: "Copper",
        amount: 1.0,
        unit: "mg",
        percentOfDailyNeeds: 49.78,
      },
      {
        title: "Vitamin B1",
        amount: 0.72,
        unit: "mg",
        percentOfDailyNeeds: 47.66,
      },
      {
        title: "Folate",
        amount: 162.9,
        unit: "µg",
        percentOfDailyNeeds: 40.73,
      },
      {
        title: "Potassium",
        amount: 986.45,
        unit: "mg",
        percentOfDailyNeeds: 28.18,
      },
      {
        title: "Magnesium",
        amount: 108.6,
        unit: "mg",
        percentOfDailyNeeds: 27.15,
      },
      {
        title: "Vitamin B3",
        amount: 4.53,
        unit: "mg",
        percentOfDailyNeeds: 22.63,
      },
      {
        title: "Vitamin B5",
        amount: 1.93,
        unit: "mg",
        percentOfDailyNeeds: 19.28,
      },
      {
        title: "Vitamin B2",
        amount: 0.29,
        unit: "mg",
        percentOfDailyNeeds: 17.04,
      },
      {
        title: "Iron",
        amount: 2.62,
        unit: "mg",
        percentOfDailyNeeds: 14.58,
      },
      {
        title: "Calcium",
        amount: 117.65,
        unit: "mg",
        percentOfDailyNeeds: 11.77,
      },
      {
        title: "Vitamin A",
        amount: 524.9,
        unit: "IU",
        percentOfDailyNeeds: 10.5,
      },
      {
        title: "Zinc",
        amount: 1.09,
        unit: "mg",
        percentOfDailyNeeds: 7.24,
      },
      {
        title: "Phosphorus",
        amount: 72.4,
        unit: "mg",
        percentOfDailyNeeds: 7.24,
      },
      {
        title: "Vitamin K",
        amount: 6.34,
        unit: "µg",
        percentOfDailyNeeds: 6.03,
      },
      {
        title: "Selenium",
        amount: 0.91,
        unit: "µg",
        percentOfDailyNeeds: 1.29,
      },
      {
        title: "Vitamin E",
        amount: 0.18,
        unit: "mg",
        percentOfDailyNeeds: 1.21,
      },
    ],
    properties: [
      {
        title: "Glycemic Index",
        amount: 58.67,
        unit: "",
      },
      {
        title: "Glycemic Load",
        amount: 62.23,
        unit: "",
      },
    ],
    flavanoids: [
      {
        title: "Cyanidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Petunidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Delphinidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Malvidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Pelargonidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Peonidin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Catechin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Epigallocatechin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Epicatechin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Epicatechin 3-gallate",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Epigallocatechin 3-gallate",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Theaflavin",
        amount: 0.0,
        unit: "",
      },
      {
        title: "Thearubigins",
        amount: 0.0,
        unit: "",
      },
      {
        title: "Eriodictyol",
        amount: 0.0,
        unit: "",
      },
      {
        title: "Hesperetin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Naringenin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Apigenin",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Luteolin",
        amount: 0.09,
        unit: "mg",
      },
      {
        title: "Isorhamnetin",
        amount: 0.0,
        unit: "",
      },
      {
        title: "Kaempferol",
        amount: 0.0,
        unit: "mg",
      },
      {
        title: "Myricetin",
        amount: 0.09,
        unit: "mg",
      },
      {
        title: "Quercetin",
        amount: 1.27,
        unit: "mg",
      },
      {
        title: "Theaflavin-3,3'-digallate",
        amount: 0.0,
        unit: "",
      },
      {
        title: "Theaflavin-3'-gallate",
        amount: 0.0,
        unit: "",
      },
      {
        title: "Theaflavin-3-gallate",
        amount: 0.0,
        unit: "",
      },
      {
        title: "Gallocatechin",
        amount: 0.0,
        unit: "mg",
      },
    ],
    caloricBreakdown: {
      percentProtein: 3.88,
      percentFat: 1.94,
      percentCarbs: 94.18,
    },
    weightPerServing: {
      amount: 905,
      unit: "g",
    },
  },
  categoryPath: ["tropical fruit", "fruit"],
}

const mockResponse4 = [
  {
    id: 647531,
    title: "Hot Spiced Cran-Apple Cider",
    image: "https://spoonacular.com/recipeImages/647531-312x231.jpg",
    imageType: "jpg",
    calories: 119,
    protein: "0g",
    fat: "0g",
    carbs: "30g",
  },
]

module.exports = {
  mockResponse,
  mockResponse1,
  mockResponse2,
  mockResponse3,
  mockResponse4,
}

const cars = [
  {
    id: 1,
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/10926/1690544712715/front-left-side-47.jpg?impolicy=resize&imwidth=420",
    name: "Toyota Camry",
    year: 2020,
    capacity: "5 people",
    specifics: "Sedan, 4 cylinders, 2.5L engine, Automatic transmission",
    fuel: "Hybrid",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$620",
  },
  {
    id: 2,
    imageUrl:
      "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/27074/civic-exterior-left-front-three-quarter.jpeg?q=80",
    name: "Honda Civic",
    year: 2021,
    capacity: "5 people",
    fuel: "Hybrid",
    time: "7.6Km / 1-litre",
    type: "Automatic",
    price: "$720",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 3,
    imageUrl:
      "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150lightning/2023/collections/dm/22_FRD_F15_LIGHTNING_56860.tif?croppathe=1_3x2&wid=720&fit=crop&hei=480",
    name: "Ford F-150",
    year: 2018,
    capacity: "6 people",
    fuel: "Gasoline",
    time: "5.1Km / 1-litre",
    type: "Automatic",
    price: "$530 ",
    specifics: "Pickup truck, 6 cylinders, 3.5L engine, Automatic transmission",
  },
  {
    id: 4,
    imageUrl:
      "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/37138/model-3-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    name: "Tesla Model 3",
    year: 2020,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$420",
    specifics: "Electric car, Automatic transmission",
  },
  {
    id: 5,
    imageUrl:
      "https://www.chevrolet.ca/content/dam/chevrolet/global/us/english/index/cars/2023-malibu/01-images/mov/01-images/colorizer/2023-malibu-1sp-gb8-colorizer.jpg?imwidth=1000",
    name: "Chevrolet Malibu",
    year: 2022,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1.5-litre",
    type: "Automatic",
    price: "$720",
    specifics: "Sedan, 4 cylinders, 1.5L engine, Automatic transmission",
  },
  {
    id: 6,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/bmw-x3-running-shot-1545122050.jpg",
    name: "Mahindra Alturas G4",
    year: 2023,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "4.1Km / 1-litre",
    type: "Automatic",
    price: "$620",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 7,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-ground-clearance-1545122105.jpg",
    name: "BMW X3",
    year: 2020,
    capacity: "5 people",
    fuel: "Gasoline",
    type: "Automatic",
    time: "6.1Km / 1-litre",
    price: "$620",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 8,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/jeep-wrangler-unlimited-1545122036.jpg",
    name: "BMW 6 Series GT",
    year: 2020,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$320",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 9,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/new-maruti-ertiga-2018-front-style-1545122089.jpg",
    name: "Jeep Wrangler Unlimited",
    year: 2016,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$620",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 10,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/ford-free-style-colour-1545122081.jpg",
    name: "Maruthi Ertiga",
    year: 2020,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$620",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 11,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/hyundai-santro-front-view-1545122073.jpg",
    name: "Ford Freestyle",
    year: 2016,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$820",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 13,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/mahindra-marazzo-front-design-1545122057.jpg",
    name: "Toyota Yaris",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 14,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/new-honda-amaze-key-features-revealed-1545122043.jpg",
    name: "Mahindra Marazzo",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 15,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/hyundai-santro-front-view-1545122073.jpg",
    name: "Tata-Hexa",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 16,
    imageUrl:
      "https://www.drivespark.com/images/2023-08/alfa-romeo-33-stradale_169346676790.jpg",
    name: "ALFA ROMEO 33 STRADALE",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 17,
    imageUrl:
      "https://www.drivespark.com/images/2023-09/ford-mustang-mach-e-rally_1694150516100.jpg",
    name: "ORD MUSTANG MACH-E RALLY",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 18,
    imageUrl:
      "https://www.drivespark.com/images/2023-09/mercedes-benz-concept-cla-class_169380387120.jpg",
    name: "MERCEDES-BENZ CONCEPT CLA CLASS",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 19,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 20,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 21,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 22,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 23,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 24,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 25,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 26,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 27,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 28,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 29,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 30,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 31,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 32,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 33,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 34,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 35,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 36,
    imageUrl:
      "https://www.chevrolet.ca/content/dam/chevrolet/global/us/english/index/cars/2023-malibu/01-images/mov/01-images/colorizer/2023-malibu-1sp-gb8-colorizer.jpg?imwidth=1000",
    name: "Chevrolet Malibu",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 37,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 38,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 39,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 40,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 41,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/new-maruti-ertiga-2018-front-style-1545122089.jpg",
    name: "Jeep Wrangler Unlimited",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 42,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-ground-clearance-1545122105.jpg",
    name: "BMW X3",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 43,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 44,
    imageUrl:
      "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150lightning/2023/collections/dm/22_FRD_F15_LIGHTNING_56860.tif?croppathe=1_3x2&wid=720&fit=crop&hei=480",
    name: "Ford F-150",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 45,
    imageUrl:
      "https://www.chevrolet.ca/content/dam/chevrolet/global/us/english/index/cars/2023-malibu/01-images/mov/01-images/colorizer/2023-malibu-1sp-gb8-colorizer.jpg?imwidth=1000",
    name: "Chevrolet Malibu",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 46,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 47,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 48,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 49,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-ground-clearance-1545122105.jpg",
    name: "BMW X3",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 50,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 51,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/new-maruti-ertiga-2018-front-style-1545122089.jpg",
    name: "Jeep Wrangler Unlimited",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 52,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 53,
    imageUrl:
      "https://www.drivespark.com/images/2023-09/ford-mustang-mach-e-rally_1694150516100.jpg",
    name: "ORD MUSTANG MACH-E RALLY",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 54,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-ground-clearance-1545122105.jpg",
    name: "BMW X3",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 55,
    imageUrl:
      "https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150lightning/2023/collections/dm/22_FRD_F15_LIGHTNING_56860.tif?croppathe=1_3x2&wid=720&fit=crop&hei=480",
    name: "Ford F-150",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 56,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 57,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 58,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/new-maruti-ertiga-2018-front-style-1545122089.jpg",
    name: "Jeep Wrangler Unlimited",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 59,
    imageUrl:
      "https://www.drivespark.com/img/2018/12/toyota-yaris-accessories-1545122065.jpg",
    name: "Hyundai Sandro",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 60,
    imageUrl:
      "https://www.chevrolet.ca/content/dam/chevrolet/global/us/english/index/cars/2023-malibu/01-images/mov/01-images/colorizer/2023-malibu-1sp-gb8-colorizer.jpg?imwidth=1000",
    name: "Chevrolet Malibu",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
  {
    id: 61,
    imageUrl:
      "https://www.drivespark.com/images/2023-09/ford-mustang-mach-e-rally_1694150516100.jpg",
    name: "ORD MUSTANG MACH-E RALLY",
    year: 2017,
    capacity: "5 people",
    fuel: "Gasoline",
    time: "6.1Km / 1-litre",
    type: "Automatic",
    price: "$220",
    specifics: "Sedan, 4 cylinders, 2.0L engine, Automatic transmission",
  },
];

export default cars;

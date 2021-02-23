const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true } );

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
},{ useNewUrlParser: true });

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name:"Apple",
  rating:34,
  review:"pretty solid"
});

fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Nob",
  age:22
});

//person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "the best fruit"
// });
//
// const orange = new Fruit({
//   name: "orange",
//   score: 4,
//   review: "the sour fruit"
// });
//
// const banana = new Fruit({
//   name: "banana",
//   score: 3,
//   review: "the long fruit"
// });

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("successfully saved all the fruits");
//   }
// });

Fruit.find(function (err, fruits) {
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

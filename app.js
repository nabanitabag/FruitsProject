const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true } );

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required : [true, "specify name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
},{ useNewUrlParser: true });

const Fruit = mongoose.model("Fruit", fruitSchema);
//create
const fruit = new Fruit({
  name:"Apple",
  rating:34,
  review:"pretty solid"
});

fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "pineapple",
  score: 9,
  review:"good"
});

// pineapple.save();

const mango = new Fruit({
  name: "mango",
  score: 10,
  review:"good mango"
});

mango.save();

const person = new Person({
  name: "Amy",
  age:22,
  favFruit: pineapple
});

// person.save();

Person.updateOne({name:"Amy"},{favFruit: mango}, function (err) {
  console.log(err);
})
// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "the best fruit"
// });
// const orange = new Fruit({
//   name: "orange",
//   score: 4,
//   review: "the sour fruit"
// });
// const banana = new Fruit({
//   name: "banana",
//   score: 3,
//   review: "the long fruit"
// });
//create
// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("successfully saved all the fruits");
//   }
// });

//read
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

//update
Fruit.updateOne(
  { _id:"6035175b82c8ca0600be4dcf"},{name: "Peach"}, function (err) {
    if(err){
      console.log(err);
    } else {
      console.log("successful");
    }
  });

  //delete
  Fruit.deleteOne(
    {name: "Peach"}, function (err) {
      if(err)
      console.log(err);
    }
  );

  // Person.deleteMany(
  //   {name: "Nob"}, function (err) {
  //     if(err) console.log(err);
  //     else {
  //       console.log("deleted nob");
  //     }
  //   }
  // );

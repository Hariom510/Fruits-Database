const mongoose = require('mongoose');
// FruitsDB is the name of our database.
mongoose.connect('mongodb://localhost:27017/FruitsDB');
// schema or structure for our database.
const fruitSchema = new mongoose.Schema({
  name: {type: String, required: true},
  rating: Number,
  review: String
});
// creating Fruit model in which Fruit is a collecton in singular that gets convertd to plural by mongoose.
const Fruit = mongoose.model("Fruit", fruitSchema);
// creating fruit document by using Fruit model.
const fruit = new Fruit({
  name: "Hariom",
  rating: 8,
  review: "good boy"
});

fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  score: Number,
  review: String,
  favouriteFood: fruitSchema
});

const Person = mongoose.model("Person", personSchema);
// establishing relationship bw documents.
  const mango = new Fruit({
    name: "mango",
    rating: 10,
    review: "Soo good mango."
  });

mango.save();

Person.updateOne({name:"HariSingh"}, {favouriteFood: mango}, function (err) {
  if(err)
  console.log(err);
  else
  console.log("Successfully Updated the document.");
});


// const person = new Person({
//   name: "HariBHAI",
//   score: 7,
//   review: "nice person",
//   favouriteFood: pineapple
// });
//
// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 8,
//   review: "good Kiwi"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 10,
//   review: "good Orange"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 6,
//   review: "goodie banana"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err)
//   console.log(err);
//   else console.log("Successfully saved all the fruits to Fruits.");
// })

// Reading data from your database
Fruit.find(function(err, fruits) {
  if(err)
  console.log(err);
  else{

     // mongoose.connection.close();

   fruits.forEach(function(element){
     console.log(element.name);
   })
 }
});

// update a document
// Fruit.updateOne({_id: "616a2808c9b9ba3d3f6ed3cf"}, {name: "Pich"}, function(err) {
//   if(err)
//   console.log(err);
//   else
//   console.log("Successfully Updated");
// });

//delete a document
// Fruit.deleteOne({name:"Pich"}, function(err) {
//   if(err)
//   console.log(err);
//   else
//   console.log("Successfully deleted");
// });

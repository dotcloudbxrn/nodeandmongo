// const MongoClient = require('mongodb').MongoClient;

// // Object Destructuring - ES6 feature
// var user = {name: 'Apostol', age: 24};
// var {name} = user;
// console.log(user);
// console.log(name);

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// takes two args - first is the url to the db 
// an amazon services url or heroku url (or local)
// second one is a callback function
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    // return, so you can stop the function execution here
    return console.log('Unable to connect to the db server!')
  }
  console.log('Connected to MongoDB Server!');



  // db.collection('Todos').insertOne({
  //   name : 'Apostol',
  //   gender: 'M'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Could not insert Todo', err);
  //   }
  //   // ops = stores all THE DOCS that were used
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  db.collection('Todos').insertOne({
    text: 'Have fun',
    completed: true
  }, (err, result) => {
    if(err) {
      return console.log(err);
    }
  });

  // closes the connection to the mongodb server
  db.close();
});
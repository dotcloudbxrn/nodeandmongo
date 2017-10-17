
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    // return, so you can stop the function execution here
    return console.log('Unable to connect to the db server!')
  }
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59e5e33a8ebe4f26fd5e5544')
  // },{
  //   // this is an update operator for MongoDB
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   // third arg also an object
  //   returnOriginal: false
  // }).then((result)=> {
  //   console.log(result);
  // }).then(() => {
  //   console.log('Operation in MongoDB server was SUCCESSFUL!');
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59e5e8222f7f0c388a7124de')
  }, {
    $set: {
      username: 'Apostol'
    },
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((userChanged)=> {
    console.log(userChanged);
  }, (error) => {
    console.log(error);
  }).then(() => {
    console.log('Username successfully changed!');
  });
  db.close();
});
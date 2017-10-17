
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    // return, so you can stop the function execution here
    return console.log('Unable to connect to the db server!')
  }
  console.log('Connected to MongoDB Server!');
  console.log('Running DELETE function on specified query...')
  // // delete many
  // db.collection('Todos').deleteMany({
  //   text: 'Have fun'
  // }).then((success) => {
  //   console.log(success);
  // }, (end) => {
  //   console.log('ERROR: ', end);
  // });

  // // delete one
  // db.collection('Todos').deleteOne({
  //   text: 'Have coffee'
  // }).then((msg) => {
  //   console.log('Success:');
  //   console.log(msg);
  // }, (err) => {
  //   console.log('Error!');
  //   console.log(err);
  // });

  // // find one and delete
  // db.collection('Todos').findOneAndDelete({
  //   // target the first one you find that is completed
  //   completed: true
  // }).then((result) => {
  //   // also fetches the value of the deleted document and returns it to you
  //   console.log(result);
  // })


  //look for duplicates
  // delete many
  // find one and delete by ID

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59e5d99830fe6a2b11b70616')
  }).then((success) => {
    console.log(success);

  }, (error) => {
    console.log(error);
  });
  db.collection('Users').deleteMany({username: 'Gregg'}).then((nice)=> {
    console.log(nice);
  },(fail) => {
    console.log(fail);
  });
  console.log('************* Delete complete! *************');
  
  db.close();
});
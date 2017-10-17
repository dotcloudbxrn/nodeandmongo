
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    // return, so you can stop the function execution here
    return console.log('Unable to connect to the db server!')
  }
  console.log('Connected to MongoDB Server!');
  
  // //find returns a document cursor - a pointer to these documents.
  // // the cursor has methods -> toArray is one of those
  // // to array returns a promise
  // db.collection('Todos').find({
  //   _id: new ObjectID('59e5e33a8ebe4f26fd5e5544')
  // }).toArray().then((docs) => {
  //   console.log('Todos: ');
  //   console.log(docs, undefined, 2);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err)
  // })
  // // closes the connection to the mongodb server
  // //db.close();

  db.collection('Users').find({
    username: 'Jack'
  }).toArray().then((result)=>{
    console.log(`User: ${result[0].username}`);
    console.log(result);
  }, (err)=> {
    console.log('ERROR: ', err);
  });
  db.close();
});
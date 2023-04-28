const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://dbuser:dbuser@cluster0.mongodb.net/cse341?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db('<database>').collection('<collection>');
  
  const data = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@mail.com",
        favoriteColor: "Blue",
        birthday: "01/01/1990"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@mail.com",
        favoriteColor: "Pink",
        birthday: "05/05/1995"
    },
    {
        firstName: "Bob",
        lastName: "Smith",
        email: "bsmith@mail.com",
        favoriteColor: "Red",
        birthday: "11/11/1985"
    }
  ];
  
  collection.insertMany(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${result.insertedCount} document(s) inserted.`);
    }
    client.close();
  });
});

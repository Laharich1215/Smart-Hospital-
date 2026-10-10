// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('HMS');

// Create a new document in the collection.
db.getCollection('admin').insertOne({
 email: "ajay@gmail.com",
  password: "ajay123"
});

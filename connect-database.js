const mongoose = require("mongoose");
function connectToDb() {
  //get db from config module, depending on the node environment
  const db = process.env.DATABASE_URL;

  //connect to the database
  return mongoose
    .connect(db, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log(`connected to database`);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}

module.exports = connectToDb;

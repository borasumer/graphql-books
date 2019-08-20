const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();


// Connecting to MongoDB cluster with Mongoose
mongoose
  .connect(process.env.DB_URI, {
    auth: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    useNewUrlParser: true
  })
  .then(console.log("Connected to the MondoDB"))
  .catch(err => console.error(`ERROR: ${err}`));

//!These two code have to be together
const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));



app.listen(process.env.PORT || 4000, () => {
  console.log("Listening for requests on port 4000");
});

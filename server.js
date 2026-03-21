const express = require("express");
const app = express();
const mongodb = require("./data/database");
const port = process.env.PORT || 3000;
app.use(express.json());


app.use("/", require("./routes"));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, X-Requested-With, Content-Type, Accept, Z-Key");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});
app.use('/users', require('./routes/users'))

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.error("Failed to connect to MongoDB", err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});

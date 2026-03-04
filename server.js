const express = require("express");
const app = express();
const mongodb = require("./data/database");
const port = process.env.PORT || 3000;


app.use("/", require("./routes"));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.error("Failed to connect to MongoDB", err);
  } else {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});

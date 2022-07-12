const express = require("express");
var cors = require("cors");
const {
  getAllCountries,
  getOneCountry,
} = require("../database/index");
const app = express();
app.use(cors());
express.json();
const port = 8000;

app.get("/allCountryData", async (req, res) => {
  try {
    const response = await getAllCountries();
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
});

app.get("/country/:id", async (req, res) => {
  try {
    const country = req.params.id;
    const response = await getOneCountry(country);
    res.status(200).send(response)
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

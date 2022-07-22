const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/avvinue")
  .then(() => {
    console.log("successfully connected to DB");
  })
  .catch((err) => {
    console.log("unable to connect to db", "err: ", err);
  });

const countrySchema = mongoose.Schema({
  Country: String,
  "Country Code": String,
  Flag_image_url: String,
  "Quarantine (days)": Number,
  "Pet Microchip": String,
  "Microchip Requirement": String || null,
  "Tattoo Accepted as form of ID (after 2011)": String || null,
  "Dog Vaccinations": [String] || null,
  "Rabies (min days)": Number,
  "Rabies (max months)": Number,
  "Cat Vaccinations": [String] || null,
  "Rabies Titer Test": String,
  "Ticks and Tapeworm Treatment": String,
  "Health Certificate": String,
  "Import Permit": String,
  "USDA Certificate (Generic Form)": String,
  "USDA URL (US to Foreign Country)": String,
  "USDA Accredited Veterinarian Signature": String,
  "USDA APHIS Veterinary Medical Officer Signature": String,
});
const userSchema = mongoose.Schema({});

const countryModel = mongoose.model("country_requirements", countrySchema);
const userModel = mongoose.model("user", userSchema);

function getAllCountries() {
  return countryModel.find({});
}

function getOneCountry(cid) {
  return countryModel.find({"Country": cid});
}


module.exports = {
  getAllCountries,
  getOneCountry
};

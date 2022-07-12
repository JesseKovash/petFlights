<template>
  <div>
    <header>
      <img
        src="https://app.avvinue.com/img/logo-colored.78826422.svg"
        alt="Avvinue Header"
      />
    </header>
    <div class="country-container">
      <base-card
        v-for="country in countries"
        :countryName="country.Country"
        :img="country.Flag_image_url"
        :key="country._id"
        @click="showCountryUpload(country.Country)"
      ></base-card>
    </div>
    <form-upload
      :docs="requiredDocs"
      :countryName="this.currentCountry"
    ></form-upload>
  </div>
</template>

<script>
import axios from "axios";
import BaseCard from "./assets/components/BaseCard.vue";
import FormUpload from "./assets/components/FormUpload.vue";
export default {
  data() {
    return {
      countries: [],
      currentCountry: null,
      currentCountryData: null,
      requiredDocs: null,
    };
  },
  components: { BaseCard, FormUpload },
  methods: {
    showCountryUpload(cid) {
      this.currentCountry = cid;
      this.getCountryRequirements();
    },
    findRequiredDocs() {
      const country = this.currentCountryData;
      let docs = [];
      if (country["Dog Vaccinations"][0] !== "") {
        const vacc = country["Dog Vaccinations"][0].split(",");
        docs = [...docs, ...vacc];
      }
      if (country["Rabies Titer Test"] === "Yes") {
        docs.push("Rabies Titer Test");
      }
      if (country["Ticks and Tapeworm Treatment"] === "Yes") {
        docs.push("Ticks and Tapeworm Treatment");
      }
      if (
        country["Health Certificate"] !== "" ||
        country["Health Certificate"].includes("No")
      ) {
        docs.push(
          `Health Certificate ${country["Health Certificate"].substring(3)}`
        );
      }
      if (country["Import Permit"] === "Yes") {
        docs.push("Import Permit");
      }
      this.requiredDocs = docs;
      console.log(this.requiredDocs);
    },
    async getCountryRequirements() {
      try {
        const response = await axios.get(
          `http://localhost:8000/country/${this.currentCountry}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log(response.data[0]);
        this.currentCountryData = response.data[0];
        this.findRequiredDocs();
      } catch (error) {
        console.log(error);
      }
    },
    async getAllCountryData() {
      const response = await fetch("http://localhost:8000/allCountryData");
      const data = await response.json();
      this.countries = data;
    },
  },
  async beforeMount() {
    this.getAllCountryData();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 20px;
}

header {
  font-size: 36px;
}

.country-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}
</style>


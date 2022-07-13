<template>
  <div>
    <header>
      <img
        src="https://app.avvinue.com/img/logo-colored.78826422.svg"
        alt="Avvinue Header"
      />
    </header>
    <div class="country-container" v-if="!currentCountryData">
      <base-card
        v-for="(country, index) in countries"
        :countryName="country.Country"
        :img="country.Flag_image_url"
        :key="country._id"
        :num="index"
        @click="showCountryUpload(country.Country)"
      ></base-card>
    </div>
    <form-upload
      :docs="requiredDocs"
      :countryData="this.currentCountryData"
      :cancelUpload="cancelUpload"
      v-if="currentCountryData"
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
    cancelUpload() {
      this.currentCountryData = null;
      const params = new URLSearchParams(window.location.search);
      params.delete("cid");
      history.pushState(
        {},
        "choseCountry",
        `http://localhost:3000/${
          params.keys().length ? "?" + params.toString() : ""
        }`
      );
    },
    showCountryUpload(cid) {
      this.currentCountry = cid;
      history.pushState(
        {},
        "choseCountry",
        `http://localhost:3000/?cid=${cid}`
      );
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
    const params = new URLSearchParams(window.location.search);
    const urlCountry = params.get("cid");
    if (urlCountry) {
      this.showCountryUpload(urlCountry);
    }
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
  font-family: sans-serif;
  color: #002150;
}

header {
  font-size: 36px;
  border-bottom: 1px solid rgb(176, 177, 177);
}

.country-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  margin-top: 30px;
}
</style>


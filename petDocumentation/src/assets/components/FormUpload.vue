<template>
  <div class="file-upload-container">
    <h1>
      Upload required documents for pet travel to
       <!-- {{ countryData.Country }}({{
        countryData["Country Code"]
      }}) -->
    </h1>
    <base-form-input
      v-for="title in docs"
      :key="title"
      :docName="title"
    ></base-form-input>
  </div>
</template>

<script>
import BaseFormInput from "./BaseFormInput.vue";
export default {
  props: ["docs", "countryData"],
  components: { BaseFormInput },
};
</script>

<style scoped>
.file-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
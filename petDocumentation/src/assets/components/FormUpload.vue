<template>
  <div class="file-upload-container">
    <h1>
      Upload required documents for pet travel to
      {{ countryData?.Country }}({{ countryData["Country Code"] }})
    </h1>
    <base-form-input
      v-for="title in docs"
      :key="title"
      :docName="title"
    ></base-form-input>
    <div class="form-btn-container">
      <button class="form-btn-cancel" type="button" @click="cancelUpload">
        Cancel
      </button>
      <button class="form-btn-upload" type="button">Upload</button>
    </div>
  </div>
</template>

<script>
import BaseFormInput from "./BaseFormInput.vue";
export default {
  props: ["docs", "countryData", "cancelUpload"],
  components: { BaseFormInput },
};
</script>

<style scoped>
.file-upload-container {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  color: #002150;

}

.form-btn-container {
  display: flex;
  margin-left: auto;
}

button {
  width: 70px;
  height: 35px;
  margin: 1px;
  font-size: 0.7rem;
  font-weight: 600;
}

.form-btn-cancel {
  color: #d157f2;
  border: 1px solid #d157f2;
  background-color: white;
  border-radius: 4px;
}

.form-btn-upload {
  background: linear-gradient(90deg, #ff6cff, #a200ff);
  color: white;
  border: 1px solid #d157f2;
  border-radius: 4px;
}

.form-btn-cancel:hover,
.form-btn-upload:hover {
  cursor: pointer;
}
</style>
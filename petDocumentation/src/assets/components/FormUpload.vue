<template>
  <form>
    <h1>{{ countryName }}</h1>
    <base-form-input
      v-for="title in docs"
      :key="title"
      :docName="title"
    ></base-form-input>
  </form>
</template>

<script>
import BaseFormInput from "./BaseFormInput.vue";
export default {
  props: ["docs", "countryName"],
  components: { BaseFormInput },
};
</script>
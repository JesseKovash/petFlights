<template>
  <div class="single-card">
    <img :src="img" alt="">
    <h1>{{ countryName }}</h1>
  </div>
</template>

<script>
export default {
  props: ["countryName", "img"],
};
</script>;

<style scoped>
.single-card {
  text-align: center;
  border: 1px solid black;
  margin: 5px;
  border-radius: 10px;
  padding: 5px;
}

.single-card:hover {
  outline: 3px solid black;
}

img {
  height: 50px;
  width: 50px;
}
</style>
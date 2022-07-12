<template>
  <div class="single-card">
    <div class="top-container">
      <img :src="backgroundImages[0]" alt="" class="top-img"/>
    </div>
    <div class="bottom-container">
      <img :src="img" alt="" class="flag-img" />
      <h5>{{ countryName }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["countryName", "img"],
  data() {
    return {
      backgroundImages: ["https://www.trip.me/old-wp-content/2014/09/Southeast-Asia-tours.jpg"]
    }
  }
};
</script>;

<style scoped>
.flag-img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 0 10px;
}

.top-img {
  height: 100%;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: left top;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.single-card {
  text-align: center;
  border: 1px solid rgb(228, 229, 229);
  margin: 5px;
  border-radius: 10px;
  height: 120px;
}

.single-card:hover {
  box-shadow: 1px 1px 5px 1px rgb(176, 177, 177);
}

.top-container {
  height: 60%;
}

.bottom-container {
  display: flex;
  align-items: center;
  height: 40%;
}
</style>
<template>
  <div class="single-card">
    <div class="top-container">
      <img :src="backgroundImages[num]" alt="" class="top-img" />
    </div>
    <div class="bottom-container">
      <div class="flag-container">
        <img :src="img" alt="" class="flag-img" />
      </div>
      <h5>{{ countryName }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["countryName", "img", "num"],
  data() {
    return {
      backgroundImages: [
        "https://www.trip.me/old-wp-content/2014/09/Southeast-Asia-tours.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_H_p2TFs9wiV7d8oyRhD5hnX5SKNAvs3zAg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtUOKAW4L-Vnoyvn0VGKveNN9U3ZPzsvdfIOfTfGFXA8c2bgbiEkeHWFbc-CV-s1Tm74&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_I5GBMOgbbfoJDZG9R2N3GrfSDVwI6gsPw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVftF3IC432J2yx_xBsInQX4DNfN3veyS1A&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFK2qI3_PetDqfDSfpahUhKpgDmYJpeJ-eVw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkMVHsZp9ctB0wKwPEuH3xQtt46DLOLLY1TRyPdx6q8L_esW3wYcaVqauOXPRSwdDkcw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRo969S3wGkwz6_VpeOdQGJaITBcaGWM_eg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18LqzrinlbD-AC6_FsvVosjCa6ttdyd4tjbtcpt_2xlGy3Ho74twhSLiJTrEqu_UBxsY&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRvLLVHGvwV892PZQywVr8C3LNM8s_uWA9A&usqp=CAU",
      ],
    };
  },
};
</script>;

<style scoped>
.flag-container {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 0 10px;
}
.flag-img {
  max-width: 100%;
  width: 100%;
  border-radius: 50%;
  display: block;
  height: 100%;
  margin: 0;
  object-fit: cover;
}

.top-img {
  height: 100%;
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.single-card {
  text-align: center;
  border: 1px solid rgb(228, 229, 229);
  margin: 5px;
  border-radius: 10px;
  height: 120px;
  cursor: pointer;
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
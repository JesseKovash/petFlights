<template>
  <div>
    <h2>{{ docName }}</h2>
    <input type="file" />
  </div>
</template>

<script>
export default {
  props: ["docName"],
};
</script>

<style scoped>
input {
  outline: 1px solid red;
  width: 100px;
  height: 50px;
}
</style>
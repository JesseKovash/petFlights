<template>
  <div class="one-form-container">
    <p>{{ docName }}</p>
    <button type="button" class="upload-btn">
      <label class="custom-file-upload">
        <input type="file" />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 upload"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="block">Upload files upto 15 MB</span>
        </div>
      </label>
    </button>
  </div>
</template>

<script>
export default {
  props: ["docName"],
};
</script>

<style scoped>
.block {
  display: block;
}

input[type="file"] {
  display: none;
}
.custom-file-upload {
  padding: 6px 12px;
  cursor: pointer;
  color: rgb(176, 177, 177);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.one-form-container {
  display: flex;
  padding-bottom: 20px;
  align-items: center;
  width: 90%;
}

.one-form-container p {
  width: 15vw;
  font-size: 1.2rem;
  font-weight: 600;
}

.upload {
  width: 40px;
  stroke: rgb(176, 177, 177);
  fill: rgb(176, 177, 177);
}

.upload-btn {
  border: 2px dashed rgb(176, 177, 177);
  background: transparent;
  border-radius: 10px;
  min-width: 200px;
  max-width: 600px;
  width: 50vw;
  height: 100px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-left: 20px;
}
</style>
<template>
  <div class="one-form-container">
    <div class="form-top-container">
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
    <div class="uploaded-file">
      <div class="uploaded-icon-name">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          fill="#7882de"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path
            d="M213.7,82.3l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8.1,8.1,0,0,0,213.7,82.3ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z"
          ></path>
        </svg>
        <div class="file-info-container">
          <p class="file-name">Really Really Long Test File Name</p>
  <p class="file-name size">32mb</p>
        </div>
      </div>
      <button type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          fill="rgb(13, 192, 247)"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <line
            x1="200"
            y1="56"
            x2="56"
            y2="200"
            stroke="rgb(13, 192, 247)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
          <line
            x1="200"
            y1="200"
            x2="56"
            y2="56"
            stroke="rgb(13, 192, 247)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></line>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["docName"],
};
</script>

<style scoped>
p {
  margin: 0;
}

svg {
  height: 24px;
  width: 24px;
}

svg line {
  stroke-width: 18;
}

svg:hover {
  box-shadow: 1px 1px 5px 1px rgb(229 232 232);
  cursor: pointer;
}

input[type="file"] {
  display: none;
}
.block {
  display: block;
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
  flex-direction: column;
  padding-bottom: 20px;
  width: 90%;
}

.form-top-container > p {
  width: 20%;
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

.form-top-container {
  display: flex;
  align-items: center;
}

.uploaded-file {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 38%;
  height: 50px;
  box-shadow: 1px 1px 5px 1px rgb(229 232 232);
  margin-left: calc(20% + 20px);
  margin-top: 15px;
  border-radius: 5px;
}

.uploaded-file button {
  background: transparent;
  border: none;
}
.uploaded-icon-name {
  display: flex;
  align-items: center;
  width: 80%;
}

.uploaded-icon-name svg {
  height: 20px;
  width: 20px;
  margin: 0 12px;
}

.file-name {
  white-space: nowrap;
  color: rgb(135, 135, 135);
  font-size: 0.85rem;
  font-weight: 800;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.file-info-container {
  width: 78%;
}

.size {
  font-weight: 500;
  color: rgb(176, 177, 177);
}
</style>
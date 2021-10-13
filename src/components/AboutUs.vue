<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="header-text ">
          <h2>Tentang Kita</h2>
          <hr />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6"></div>
        <div class="col-md-6">
          <p>
            {{ about.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header-text {
  max-width: fit-content;
}
.header-text h3 {
  margin: 0;
}
.header-text hr {
  border: 1px solid #534a40;
  width: 50%;
  margin-top: 0.5rem;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      about: [],
    };
  },
  mounted() {
    axios
      .get("https://admingraha.jaggs.id/api/about", {
        headers: { accept: "application/json" },
      })
      .then((res) => (this.about = res.data.data[0]));
  },
};
</script>

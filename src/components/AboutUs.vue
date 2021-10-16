<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="header-text text-center">
          <h2>Tentang Kita</h2>
          <hr />
        </div>
      </div>
      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="row mt-3" v-else>
        <div class="col-md-6">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              :src="about.link"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-right">
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
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("https://admingraha.jaggs.id/api/about", {
        headers: { accept: "application/json" },
      })
      .then((res) => {
        this.loading = false;
        this.about = res.data.data[0];
      });
  },
};
</script>

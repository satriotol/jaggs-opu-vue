<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="header-text ">
          <h2>Fasilitas</h2>
          <hr />
        </div>
      </div>
      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="row mt-3" v-else>
        <div
          class="col-md-4"
          data-aos="fade-down"
          v-for="(facility, index) in facilities"
          :key="index"
        >
          <div class="text-center">
            <div class="benefit">
              <img
                :src="facility.image"
                style="height: 200px;"
                class="img-fluid"
                alt=""
              />
              <div class="mt-4">
                <h5>{{ facility.title }}</h5>
              </div>
            </div>
          </div>
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
      facilities: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios.get("https://admingraha.jaggs.id/api/facility").then((res) => {
      this.loading = false;
      this.facilities = res.data.data;
    });
  },
};
</script>

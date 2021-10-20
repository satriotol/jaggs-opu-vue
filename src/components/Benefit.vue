<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="header-text text-center">
          <h2>Kenapa Harus Memilih Graha Ananda Regency</h2>
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
          class="col-6 col-lg-4"
          v-for="(benefit, index) in benefits"
          :key="index"
          data-aos="fade-down"
        >
          <div class="text-center">
            <div class="benefit">
              <img
                :src="benefit.image"
                style="height: 100px;"
                class="img-fluid"
                alt=""
              />
              <div class="mt-4">
                <h5>{{ benefit.title }}</h5>
                <p>
                  {{ benefit.description }}
                </p>
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
      benefits: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("https://admin.grahaanandaregency.com/api/benefit")
      .then((res) => {
        this.loading = false;
        this.benefits = res.data.data;
      });
  },
};
</script>

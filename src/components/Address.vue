<template>
  <div>
    <div class="container-fluid brown margin-alamat-hp" v-if="!loading">
      <div class="row align-items-center h-100">
        <div class="col-md-6 h-100" data-aos="fade-right">
          <div class="text-right">
            <h2>Alamat</h2>
            <h5>{{ location.address }}</h5>
          </div>
        </div>
        <div class="col-md-6 pr-0">
          <img :src="location.image" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.brown {
  background-color: var(--brown);
  color: white;
}
.white {
  background-color: white;
}
@media (max-width: 767.98px) {
  .margin-alamat-hp {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      location: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("https://admin.grahaanandaregency.com/api/location")
      .then((res) => {
        this.loading = false;
        this.location = res.data.data[0];
      });
  },
};
</script>
<style scoped>
@media (max-width: 767.98px) {
  .col-md-6.pr-0 {
    padding-left: 0;
  }
  .text-right {
    margin-top: 1rem;
    padding-bottom: 1rem;
    text-align: center !important;
  }
}
</style>

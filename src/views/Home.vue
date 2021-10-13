<template>
  <div>
    <div class="container-fluid header h-100">
      <div class="row align-items-center h-100">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <h1>Graha Ananda</h1>
          <h2>Regency</h2>
          <p>
            Segera Wujudkan Keluarga Mandiri Sejahtera Hanya Di Perumahan Graha
            Ananda Regency.
          </p>
        </div>
        <div class="col-md-6 p-0">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="sliders.image" class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <about-us class="header mt-5"></about-us>
  </div>
</template>
<script>
import aboutUs from "@/components/AboutUs.vue";
import axios from "axios";

export default {
  components: { aboutUs },
  name: "Home",
  data() {
    return {
      sliders: [],
    };
  },
  created() {
    this.getJumbotron();
  },
  methods: {
    getJumbotron() {
      axios
        .get("https://admingraha.jaggs.id/api/slider", {
          headers: { accept: "application/json" },
        })
        .then((res) => (this.sliders = res.data.data[0]));
    },
  },
};
</script>
<style>
.header {
  color: var(--brown);
}
hr {
  border: 1px solid #534a40;
}
</style>

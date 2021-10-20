<template>
  <div>
    <div class="container-fluid header h-100" id="home">
      <div class="row align-items-center h-100 flex-column-reverse flex-md-row">
        <div class="col-md-1"></div>
        <div class="header-text col-md-5 p-0">
          <h1>Graha Ananda Regency</h1>
          <p>
            "SEGERA WUJUDKAN KELUARGA MANDIRI SEJAHTERA HANYA DI PERUMAHAN GRAHA
            ANANDA REGENCY. BELI RUMAHNYA GRATIS KULIAHNYA!"
          </p>
        </div>
        <div class="col-md-6 p-0 order-1">
          <slider animation="fade" class="slider-style">
            <slider-item v-for="(slider, index) in sliders" :key="index">
              <img
                :src="slider.image"
                class="d-block w-100 h-100"
                style="object-fit: cover;"
              />
            </slider-item>
          </slider>
        </div>
      </div>
    </div>
    <about-us class="header my-3 py-4"></about-us>
    <benefit class="header my-6 py-4"></benefit>
    <Address class="my-6" id="address"></Address>
    <facility class="header my-6 py-4" id="facility"></facility>
    <Product class="header my-6 py-4" id="product"></Product>
    <site-plan class="header my-6 py-4" id="siteplan"></site-plan>
    <the-footer class="mt-5 pt-4"></the-footer>
    <div class="position-fixed">
      <a :href="wa.link" target="_blank">
        <img
          src="../../public/Whatapps Logo 1.png"
          class="img-fluid wa"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
<script>
import aboutUs from "@/components/AboutUs.vue";
import benefit from "@/components/Benefit.vue";
import Address from "@/components/Address.vue";
import Facility from "../components/Facility.vue";
import axios from "axios";
import Product from "../components/Product.vue";
import SitePlan from "../components/SitePlan.vue";
import TheFooter from "../components/TheFooter.vue";
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  components: {
    aboutUs,
    benefit,
    Address,
    Facility,
    Product,
    SitePlan,
    TheFooter,
    Slider,
    SliderItem,
  },
  name: "Home",
  data() {
    return {
      sliders: [],
      wa: [],
    };
  },
  created() {
    axios
      .get("https://admin.grahaanandaregency.com/api/whatsapp", {
        headers: { accept: "application/json" },
      })
      .then((res) => (this.wa = res.data.data[0]));
    this.getJumbotron();
  },
  methods: {
    hello($event) {
      console.log(`hello index: ${$event}`);
    },
    getJumbotron() {
      axios
        .get("https://admin.grahaanandaregency.com/api/slider", {
          headers: { accept: "application/json" },
        })
        .then((res) => (this.sliders = res.data.data));
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
  background-color: #534a40;
}
.my-6 {
  margin-bottom: 4rem;
  margin-top: 4rem;
}
@media (max-width: 768px) {
  .my-6 {
    margin-bottom: 0rem;
    margin-top: 0rem;
  }
}
</style>
<style scoped>
@media (max-width: 768px) {
  .header-text {
    text-align: center !important;
    margin-top: 2rem;
  }
  .slider-style {
    height: 250px;
  }
}
button.btn.btn-primary.brown {
  background-color: var(--brown);
  border-color: var(--brown);
  border-radius: 50px;
  font-size: 1.1rem;
  padding: 1rem;
}
.slider-style {
  height: 500px !important;
}
.wa {
  position: fixed;
  height: 60px;
  bottom: 40px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
  right: 15px;
}
</style>

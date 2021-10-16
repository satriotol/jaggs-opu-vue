<template>
  <div>
    <div class="position-fixed">
      <a :href="wa.link" target="_blank">
        <img
          src="../../public/Whatapps Logo 1.png"
          class="img-fluid wa"
          alt=""
        />
      </a>
    </div>
    <div class="container-fluid header h-100">
      <div class="row align-items-center h-100 flex-column-reverse flex-md-row">
        <div class="col-md-2"></div>
        <div class="col-md-4 p-0">
          <h1>Graha Ananda</h1>
          <h2>Regency</h2>
          <p>
            Segera Wujudkan Keluarga Mandiri Sejahtera Hanya Di Perumahan Graha
            Ananda Regency.
          </p>
          <button class="btn btn-primary brown">
            Download Pricce List
          </button>
        </div>
        <div class="col-md-6 p-0 order-1">
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
    <about-us class="header my-3 py-4"></about-us>
    <benefit class="header my-6 py-4"></benefit>
    <Address class="my-6" id="address"></Address>
    <facility class="header my-6 py-4"></facility>
    <Product class="header my-6 py-4"></Product>
    <site-plan class="header my-6 py-4"></site-plan>
    <the-footer class="mt-5 pt-4"></the-footer>
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
export default {
  components: {
    aboutUs,
    benefit,
    Address,
    Facility,
    Product,
    SitePlan,
    TheFooter,
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
      .get("https://admingraha.jaggs.id/api/whatsapp", {
        headers: { accept: "application/json" },
      })
      .then((res) => (this.wa = res.data.data[0]));
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
  .col-md-4.p-0 {
    text-align: center !important;
    margin-top: 1rem;
  }
}
button.btn.btn-primary.brown {
  background-color: var(--brown);
  border-color: var(--brown);
  border-radius: 50px;
  font-size: 1.1rem;
  padding: 1rem;
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

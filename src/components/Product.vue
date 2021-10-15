<template>
  <div>
    <div style="height: 150px; overflow: hidden;">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%;"
      >
        <path
          d="M0.00,49.98 C130.07,173.19 286.96,-65.63 500.00,49.98 L519.47,215.63 L0.00,150.00 Z"
          style="stroke: none; fill: #534a40;"
        ></path>
      </svg>
    </div>
    <div class="white">
      <div class="container py-5">
        <div class="d-flex justify-content-center">
          <div class="header-text">
            <h2>Produk</h2>
          </div>
          <br />
        </div>
        <div class="form-group mt-3">
          <select name="" class="form-control" id="">
            <option value="">Pilih Product</option>
            <option
              :value="product.id"
              v-for="(product, index) in products"
              :key="index"
              >{{ product.title }}</option
            >
          </select>
        </div>
        <div v-if="loading" class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="row mt-5" v-else>
          <div class="col-md-6">
            <img src="../../public/Rumah T 4.png" class="img-fluid" />
            <div class="row mt-4">
              <div class="col col-md-4">
                <img src="../../public/Rumah T 4.png" class="img-fluid" />
              </div>
              <div class="col col-md-4">
                <img src="../../public/Rumah T 4.png" class="img-fluid" />
              </div>
              <div class="col col-md-4">
                <img src="../../public/Rumah T 4.png" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <h3>Nama Produk</h3>
            <p class="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dolorem voluptatum, expedita laboriosam delectus
              id magni architecto consequuntur voluptas ut commodi voluptatibus.
              Voluptates similique aut tenetur nobis consequuntur illo ab!
            </p>
          </div>
        </div>
        <div class="text-center mt-4">
          <h2>HARGA</h2>
        </div>
      </div>
    </div>
    <div style="height: 150px; overflow: hidden;">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%;"
      >
        <path
          d="M0.00,49.98 C335.50,251.14 420.71,9.38 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none; fill: #534a40;"
        ></path>
      </svg>
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
.white {
  background-color: var(--brown);
  color: white;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      facilities: [],
      loading: false,
      products: [],
    };
  },
  mounted() {
    this.loading = true;
    axios.get("https://admingraha.jaggs.id/api/product_name").then((res) => {
      this.loading = false;
      this.products = res.data.data;
    });
  },
  methods: {
    getProduct() {},
  },
};
</script>

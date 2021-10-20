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
          <v-select
            :options="products"
            style="background-color:white;"
            :reduce="(products) => products.id"
            v-model="product_id"
            placeholder="Pilih Tipe Produk"
            @input="getProduct"
            label="title"
          />

          <!-- </select> -->
        </div>
        <div v-if="loading" class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-else>
          <div class="row mt-5">
            <div class="col-md-6">
              <img :src="gambar_default" class="img-fluid main" />
              <div class="mt-4">
                <carousel
                  :minSwipeDistance="0"
                  :perPage="3"
                  :paginationEnabled="false"
                  class="text-center"
                >
                  <slide v-for="(image, index) in product.image" :key="index">
                    <img
                      class="img-carousel"
                      :src="image.image"
                      @click="changeImage(image.image)"
                    />
                  </slide>
                </carousel>
              </div>
            </div>
            <div class="col-md-6 product-text">
              <div class="text-center">
                <h3>{{ product.title }}</h3>
              </div>
              <div class="text-justify" v-html="product.description"></div>
              <h1 class="price">{{ product.price }}</h1>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <a href="/RumahT4.png" download>
            <button class="btn btn-light rounded-pill kpr">
              Download Simulasi KPR
            </button>
          </a>
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
.kpr {
  color: var(--brown);
}
.main {
  height: 400px;
  object-fit: cover;
  width: 100%;
}
.img-carousel {
  height: 100px;
  object-fit: cover;
  width: 160px;
}
@media (max-width: 768px) {
  .img-carousel {
    height: 100px;
    object-fit: cover;
    width: 100px;
  }
  .price {
    text-align: center;
  }
  .product-text {
    margin-top: 1rem;
  }
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      product: [],
      loading: false,
      products: [],
      product_id: null,
      gambar_default: "",
    };
  },
  mounted() {
    this.loading = true;
    axios.get("https://admingraha.jaggs.id/api/product_name").then((res) => {
      this.loading = false;
      this.products = res.data.data;
    });
    this.getProduct();
  },
  methods: {
    changeImage(urlImage) {
      this.gambar_default = urlImage;
    },
    setDataPicture(data) {
      this.product = data;
      this.gambar_default = data.image[0].image;
    },
    getProduct() {
      this.loading = true;
      axios
        .get("https://admingraha.jaggs.id/api/product", {
          params: {
            id: this.product_id,
          },
        })
        .then((res) => {
          this.loading = false;
          if (this.product_id != null) {
            this.setDataPicture(res.data.data[0]);
            this.product = res.data.data[0];
          } else {
            this.setDataPicture(res.data.data);
            this.product = res.data.data;
          }
        });
    },
  },
};
</script>

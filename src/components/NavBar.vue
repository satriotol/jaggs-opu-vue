<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"
        ><img
          src="../../public/LOGO.png"
          class="img-fluid"
          style="height:40px"
          alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li
            class="nav-item"
            :class="{ active: targetId == 'home' }"
            @click="select('home')"
          >
            <a class="nav-link" href="#home">Tentang</a>
          </li>
          <li
            class="nav-item"
            :class="{ active: targetId == 'address' }"
            @click="select('address')"
          >
            <a class="nav-link" href="#address">Lokasi</a>
          </li>
          <li
            class="nav-item"
            :class="{ active: targetId == 'facility' }"
            @click="select('facility')"
          >
            <a class="nav-link" href="#facility">Fasilitas</a>
          </li>
          <li
            class="nav-item"
            :class="{ active: targetId == 'product' }"
            @click="select('product')"
          >
            <a class="nav-link" href="#product">Produk</a>
          </li>
          <li
            class="nav-item"
            :class="{ active: targetId == 'siteplan' }"
            @click="select('siteplan')"
          >
            <a class="nav-link" href="#siteplan">Siteplan</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      targetId: "home",
    };
  },
  methods: {
    select(event) {
      this.targetId = event;
      console.log(event);
    },
  },
};
</script>
<style scoped>
@media (max-width: 768px) {
  .nav-item {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }
  a.nav-link {
    text-align: center;
  }
  li.nav-item.active {
    border-radius: 5px;
  }
}
@media (min-width: 768px) {
  .navbar {
    padding: 0rem 5rem;
  }
  .nav-item {
    padding: 1rem 0rem;
    margin: 0rem 0.5rem;
  }
}

.active {
  background-color: var(--brown);
}
.active a {
  color: white !important;
}
</style>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
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
          <li class="nav-item active">
            <a class="nav-link" href="#">Tentang</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Lokasi</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Fasilitas</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Produk</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Siteplan</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.nav-item {
  padding: 1rem 0rem;
  margin: 0rem 0.5rem;
}
.active {
  background-color: var(--brown);
}
.active a {
  color: white !important;
}
</style>

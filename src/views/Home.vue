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
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Fluid jumbotron</h1>
              <p class="lead">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <about-us class="header"></about-us>
  </div>
</template>
<script>
import aboutUs from "@/components/AboutUs.vue";

export default {
  components: { aboutUs },
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

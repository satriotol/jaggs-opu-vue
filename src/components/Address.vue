<template>
  <div>
    <div class="container-fluid brown">
      <div class="row align-items-center h-100">
        <div class="col-md-6 py-5 h-100">
          <div class="text-right">
            <h2>Alamat</h2>
            <div v-if="loading" class="text-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <p v-else>{{ location.address }}</p>
          </div>
        </div>
        <div class="col-md-6 white py-5">
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
    axios.get("https://admingraha.jaggs.id/api/location").then((res) => {
      this.loading = false;
      this.location = res.data.data[0];
    });
  },
};
</script>

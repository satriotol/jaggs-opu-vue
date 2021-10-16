<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>
<script>
import navbar from "@/components/NavBar.vue";
export default {
  components: { navbar },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
.margin-navbar {
  margin-top: 70px;
}
:root {
  --brown: #534a40;
  --white: #ffffff;
}
</style>

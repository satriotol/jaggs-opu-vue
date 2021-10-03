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
:root {
  --brown: #534a40;
  --white: #ffffff;
}
.navbar {
  padding: 0rem 5rem;
}
</style>

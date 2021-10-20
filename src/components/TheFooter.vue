<template>
  <div>
    <div class="container-fluid pt-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h4>Kantor Pusat</h4>
            <div class="mt-3">
              <p>
                Sentul International Convention Center SICC Tower 3rd Floor
                Jalan Jendral Sudirman No.1 Sentul City, Bogor
              </p>
              <p>grahaanandaregency@gmail.com</p>
              <p>(021) 8795 3448 / 8795 3550 / 8795 3551</p>
            </div>
          </div>
          <div class="col-md-5">
            <h4>Sosial Media</h4>
            <div class="row">
              <div class="col col-md-2">
                <div
                  class="social-icon "
                  v-for="(social_media, index) in social_medias"
                  :key="index"
                >
                  <a :href="social_media.link" target="_blank">
                    <img
                      :src="social_media.image"
                      class="rounded-circle"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <p class="m-0 py-3">
          <span class="font-weight-bold">@Copyright Graha Ananda Regency.</span>
          All Rights Reserved
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-fluid {
  background-color: var(--brown);
  color: white;
}
.social-icon img {
  height: 50px;
  width: 50px;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      social_medias: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("https://admin.grahaanandaregency.com/api/social_media")
      .then((res) => {
        this.loading = false;
        this.social_medias = res.data.data;
      });
  },
};
</script>

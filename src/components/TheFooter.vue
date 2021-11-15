<template>
  <div>
    <div class="container-fluid pt-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h4>Kantor Pusat</h4>
            <div class="mt-3">
              <p>
                {{ contact.address }}
              </p>
              <p>{{ contact.email }}</p>
              <span v-for="(phone, index) in phones" :key="index">
                {{ phone.phone_number }}
                <span v-if="phones.length != index + 1">/</span>
              </span>
            </div>
          </div>
          <div class="col-md-5">
            <h4>Sosial Media</h4>
            <div class="row">
              <div
                class="col-md-2 col-3 mx-auto"
                v-for="(social_media, index) in social_medias"
                :key="index"
              >
                <div class="social-icon ">
                  <a :href="social_media.link" target="_blank">
                    <img
                      :src="social_media.image"
                      class="rounded-circle"
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
  object-fit: cover;
  object-position: center;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      social_medias: [],
      phones: [],
      contact: "",
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("https://admin.grahaanandaregency.com/api/social_media")
      .then((res) => {
        axios
          .get("https://admin.grahaanandaregency.com/api/phone")
          .then((res) => {
            axios
              .get("https://admin.grahaanandaregency.com/api/contact")
              .then((res) => {
                this.loading = false;
                this.contact = res.data.data[0];
              });
            this.phones = res.data.data;
          });
        this.social_medias = res.data.data;
      });
  },
};
</script>

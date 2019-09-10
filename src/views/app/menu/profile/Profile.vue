<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 100%;min-width: 50%;">
      <b-row no-gutters>
        <b-col md="4">
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image" class="mt-2 mb-2"></b-img>
        </b-col>
        <b-col md="8">
          <b-card-body align="left">
            <b-card-title>Full Name</b-card-title>
            <b-card-sub-title class="mb-2">Admin</b-card-sub-title>
            <b-card-text>Description about profile</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <br />
    <div>
      <b-tabs content-class="mt-3" align="center">
        <b-tab title="About" active>
          <b-card title="Basic Information" sub-title="Card subtitle" align="left">
            <b-card-text>
              <ul>
                <li>First Name:</li>
                <li>Last Name:</li>
                <li>Midle Name:</li>
                <li>Phone:</li>
                <li>Email:</li>
                <li>Brithday:</li>
                <li>Gender:</li>
              </ul>
            </b-card-text>

            <b-card-text>A second paragraph of text in the card.</b-card-text>

            <a href="#" class="card-link">Card link</a>
            <b-link href="#" class="card-link">Another link</b-link>
          </b-card>
        </b-tab>
        <b-tab title="Document">
          <h1>Detail Document</h1>
          <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
          </section>

          <section v-else>
            <div v-if="loading">Loading...</div>

            <div v-else v-for="data in info" :key="data">
              <b-card>
                {{ data.title.bahasa_indonesia }}:
                <p v-html="data.imagevideo"></p>
                {{ data.description.bahasa_indonesia }}
              </b-card>
              <br />
            </div>
          </section>
        </b-tab>
        <b-tab title="Something" disabled>
          <p>I'm a disabled tab!</p>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      mainProps: {
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTmgnKfIgYci_yoW5_OHoPXjNi7gHzPb2gPkX-LOCdLKiGPwu",
        width: "150%",
        height: "150%",
        class: "m1"
      },
      info: null,
      loading: true,
      errored: false
    };
  },
  methods: {
    log: function(e) {
      console.log(e.currentTarget);
      console.log(e);
    }
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    axios
      .get("http://private-6c4f4a-cmsrevamp.apiary-mock.com/px/benefits")
      .then(response => {
        this.info = response.data.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style>
</style>

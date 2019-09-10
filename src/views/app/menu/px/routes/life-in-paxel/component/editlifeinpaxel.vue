<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 mb-4 text-primary">
        <b>Life in Paxel</b>
      </h5>
    </div>
    <b-card class="text-left">
      <b>Edit Story</b>
      <b-row class="mt-4">
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Title (Bahasa)" label-for="input-1">
            <b-form-input v-model="items.title.id" placeholder="Title In Bahasa"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Title (English)" label-for="input-1">
            <b-form-input v-model="items.title.eng" placeholder="Title In English"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Content (Bahasa)" label-for="input-1">
            <textarea
              id="textarea"
              v-model="items.contentdes.id"
              placeholder="Description In Bahasa Indonesia"
              name="contentdes_id"
              class="form-control"
            ></textarea>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Content (English)" label-for="input-1">
            <textarea
              id="textarea"
              v-model="items.contentdes.eng"
              placeholder="Description In English"
              name="contentdes_eng"
              class="form-control"
            ></textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" class="pr-0">
          <b-form-group id="fieldset-1" label="Media" label-for="input-1">
            <b-form-radio-group
              v-model="items.imagevideo.status"
              :options="options"
              name="radio-media"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row
        class="mb-3"
        v-show="items.imagevideo.status == false || items.imagevideo.status == true"
      >
        <b-col md="6">
          <b-form-group
            id="fieldset-1"
            label="URL"
            v-show="items.imagevideo.status == false"
            label-for="input-1"
          >
            <input
              placeholder="Link"
              v-model="link"
              v-validate="'required|min:5|max:30'"
              name="link"
              class="form-control"
            />
          </b-form-group>
          <b-form-group
            id="fieldset-1"
            label="Media File"
            label-for="input-1"
            v-show="items.imagevideo.status == true"
          >
            <b-card body-class="py-2 px-2">
              <card-body>
                <b-row>
                  <b-col class="text-primary mt-2">
                    <i class="fas fa-paperclip"></i>
                    &nbsp;
                    Photo {{items.imagevideo.link}}
                    <sup
                      class="text-secondary pl-3 mr-5 pr-5"
                    >(2 Mb)</sup>
                  </b-col>
                  <b-col class="text-right" align="right">
                    <b-button variant="primary" class="ml-5">Preview</b-button>
                  </b-col>
                </b-row>
              </card-body>
            </b-card>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Status" label-for="input-1">
            <b-form-radio-group v-model="items.status" :options="options2" name="radio-status"></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="text-right">
        <b-col>
          <b-button variant="primary" size="lg" class="mr-3">Save</b-button>
          <router-link :to="{name: 'pxLifeInPaxel'}">
            <b-button size="lg" variant="outline-secondary">Cancel</b-button>
          </router-link>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import dataService from "../dataService";
export default {
  data() {
    return {
      text1: "",
      text2: "",
      items: [],
      selected1: null,
      selected2: null,
      options: [
        { text: "Upload", value: true },
        { text: "Embed", value: false }
      ],
      options2: [
        { text: "Active", value: true },
        { text: "Inactive", value: false }
      ]
    };
  },
  beforeCreate() {
    // this.$store.dispatch("getDonatur");
    this.$store.dispatch(
      "lifeInPaxelModule/getLifeInPaxel",
      this.$route.params.id
    );
  },
  created() {
    this.$store.watch(
      state => state.lifeInPaxelModule.lifeinpaxel_id,
      (newValue, oldValue) => {
        this.items = newValue;
        // Do whatever makes sense now
        if (this.items.length === 0) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      }
    );
  }
};
</script>

<style>
</style>

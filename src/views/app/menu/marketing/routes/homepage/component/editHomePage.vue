<template>
  <div>
    <div align="left">
      <h5 class="h5 mb-1 text-gray-800 font-weight-bold">Homepage Banner</h5>
      <p class="mb-4">Paxel | Homepage | Banner</p>
    </div>
    <b-card class="text-left">
      <h5 class="font-weight-bold">Edit Banner</h5>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">Name</b-col>
        <b-col>
          <b-form-input :value="items.name" placeholder="Name"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5 mt-2">Banner Image (Desktop)</b-col>
        <b-col md="6">
          <b-card body-class="py-2 px-2">
            <card-body>
              <b-row>
                <b-col md="8" class="text-primary mt-2">
                  <i class="fas fa-paperclip"></i>&nbsp;
                  <b>Banner Image (Desktop) {{items.imagedesktop}}</b>
                  <sup class="text-secondary pl-3 mr-5 pr-5">(2 Mb)</sup>
                </b-col>
                <b-col class="text-right" align="right">
                  <b-button variant="primary" class="ml-5">Preview</b-button>
                </b-col>
              </b-row>
            </card-body>
          </b-card>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5 mt-2">Banner Image (Mobile)</b-col>
        <b-col md="6">
          <b-card body-class="py-2 px-2">
            <card-body>
              <b-row>
                <b-col md="8" class="text-primary mt-2">
                  <i class="fas fa-paperclip"></i>&nbsp;
                  <b>Banner Image (Mobile) {{items.imagemobile}}</b>
                  <sup class="text-secondary pl-3 mr-5 pr-5">(2 Mb)</sup>
                </b-col>
                <b-col class="text-right" align="right">
                  <b-button variant="primary" class="ml-5">Preview</b-button>
                </b-col>
              </b-row>
            </card-body>
          </b-card>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right mt-2 pr-5 pt-4">Banner Title</b-col>
        <b-col md="4">
          <b-form-group
            id="fieldset-1"
            label="Bahasa Indonesia"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <b-form-input :value="items.title.id" placeholder="Title In Bahasa"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col></b-col>
        <b-col md="4">
          <b-form-group
            id="fieldset-1"
            label="English"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <b-form-input :value="items.title.eng" placeholder="Title In English"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col md="2" class="text-right pr-5">Sub Title</b-col>
        <b-col md="4">
          <b-form-textarea
            id="textarea"
            v-model="text1"
            placeholder="Sub Title in Bahasa Indonesia..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
        <b-col></b-col>
        <b-col md="4">
          <b-form-textarea
            id="textarea"
            v-model="text2"
            placeholder="Sub Title in English..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">With Button</b-col>
        <b-col md="2">
          <b-form-radio-group
            id="radio-group-10"
            v-model="with_button"
            :options="options"
            name="radio-button"
          ></b-form-radio-group>
        </b-col>
        <b-col>
          <b-form-input :value="items.button.id" disabled placeholder="Button Text in Bahasa"></b-form-input>
        </b-col>
        <b-col>
          <b-form-input :value="items.button.eng" disabled placeholder="Button Text in English"></b-form-input>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">Button URL</b-col>
        <b-col md="1">
          <b-form-radio v-model="button_url" name="some-button-url" value="Article">Article</b-form-radio>
        </b-col>
        <b-col>
          <b-form-select v-model="selected" :options="options" class="mb-3">
            <template slot="first">
              <option :value="null" disabled>-- Please select an option --</option>
            </template>
          </b-form-select>
        </b-col>
        <b-col md="1">
          <b-form-radio v-model="button_url" name="some-button-url" value="Other">Other</b-form-radio>
        </b-col>
        <b-col>
          <b-form-input disabled placeholder="URL"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="2" class="text-right pr-5">Status</b-col>
        <b-col>
          <b-form-radio-group
            id="radio-group-1"
            v-model="status"
            :options="options2"
            name="radio-options"
          ></b-form-radio-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">Period</b-col>
        <b-col md="1">Star Date</b-col>
        <b-col md="2">
          <b-form-input type="date"></b-form-input>
        </b-col>
        <b-col md="1">End Date</b-col>
        <b-col md="2">
          <b-form-input type="date"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5"></b-col>
        <b-col>
          <b-form-checkbox
            id="checkbox-1"
            v-model="always_active"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >Always Active</b-form-checkbox>
        </b-col>
      </b-row>
      <b-button variant="primary" class="mr-3">Save</b-button>
      <router-link :to="{name: 'homePage'}">
        <b-button variant="outline-secondary">Cancel</b-button>
      </router-link>
    </b-card>
  </div>
</template>

<script>
import dataService from "../dataService";
export default {
  data() {
    return {
      items: [],
      text1: "",
      text2: "",
      with_button: "",
      button_url: "",
      status: "",
      always_active: "",
      selected: null,
      options: [{ text: "No", value: "No" }, { text: "Yes", value: "Yes" }],
      options2: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" }
      ]
    };
  },
  mounted() {
    dataService
      .getHomePage()
      .then(response => {
        this.items = response.data.data;
        this.text1 = response.data.data.sub_title.id;
        this.text2 = response.data.data.sub_title.eng;
        this.with_button = response.data.data.button.is_active;
        this.button_url = response.data.data.button.is_article;
        this.status = response.data.data.status;
        this.always_active = response.data.data.always_active;
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

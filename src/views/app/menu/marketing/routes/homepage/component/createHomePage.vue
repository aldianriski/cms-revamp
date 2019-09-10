<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 mb-1 text-primary font-weight-bold">Homepage Banners</h5>
      <br />
    </div>
    <b-card class="text-left">
      <b>Create New Banner</b>
      <b-row class="mt-4">
        <b-col md="6">
          <b-form-group id="input-group-1" label="Name:" label-for="input-1">
            <b-form-input placeholder="Name"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="input-group-1" label="Banner Image (Desktop):" label-for="input-1"></b-form-group>
          <b-card body-class="py-2 px-2">
            <card-body>
              <b-row>
                <b-col class="text-primary mt-2">
                  <i class="fas fa-paperclip"></i>&nbsp;
                  <b>Banner Image (Desktop)</b>
                  <sup class="text-secondary pl-3 mr-5 pr-5">(2 Mb)</sup>
                </b-col>
                <b-col class="text-right" align="right">
                  <b-button variant="primary" class="ml-5">Select File</b-button>
                </b-col>
              </b-row>
            </card-body>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-form-group id="input-group-1" label="Banner Image (Mobile):" label-for="input-1"></b-form-group>
          <b-card body-class="py-2 px-2">
            <card-body>
              <b-row>
                <b-col class="text-primary mt-2">
                  <i class="fas fa-paperclip"></i>&nbsp;
                  <b>Banner Image (Desktop)</b>
                  <sup class="text-secondary pl-3 mr-5 pr-5">(2 Mb)</sup>
                </b-col>
                <b-col class="text-right" align="right">
                  <b-button variant="primary" class="ml-5">Select File</b-button>
                </b-col>
              </b-row>
            </card-body>
          </b-card>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Heading (Bahasa)" label-for="input-1">
            <b-form-input placeholder="Heading in Bahasa"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Heading (English)" label-for="input-1">
            <b-form-input placeholder="Heading in English"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Sub Heading (Bahasa)" label-for="input-1">
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Sub Heading in Bahasa..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Sub Heading (English)" label-for="input-1">
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Sub Heading in English..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="With Button" label-for="input-1">
            <b-form-radio-group
              id="radio-group-1"
              v-model="with_button"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Button Text (Bahasa)" label-for="input-1">
            <b-form-input :disabled="with_button == false" placeholder="Button Text in Bahasa"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Button Text (English)" label-for="input-1">
            <b-form-input :disabled="with_button == false" placeholder="Button Text in English"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Button Url" label-for="input-1">
            <b-form-radio-group
              id="radio-group-url"
              v-model="button_url"
              :options="options3"
              name="radio-url"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group
            id="fieldset-1"
            label="Article"
            label-for="input-1"
            v-show="button_url == false"
          >
            <b-form-select v-model="selected" :options="options" class="mb-3">
              <template slot="first">
                <option :value="null" disabled>-- Please select an option --</option>
              </template>
            </b-form-select>
          </b-form-group>
          <b-form-group
            id="fieldset-1"
            label="Other URL"
            label-for="input-1"
            v-show="button_url == true"
          >
            <b-form-input placeholder="URL"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Status" label-for="input-1">
            <b-form-radio-group
              id="radio-group-1"
              v-model="selected"
              :options="options2"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Period" label-for="input-1">
            <b-form-input type="date"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <p class="mb-2">&nbsp;</p>
          <b-form-input type="date"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >Always Active</b-form-checkbox>
        </b-col>
      </b-row>
      <br />
      <b-button variant="primary" class="mr-3">Save</b-button>
      <router-link :to="{name: 'homePage'}">
        <b-button variant="outline-secondary">Cancel</b-button>
      </router-link>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      with_button: false,
      button_url: false,
      options: [{ text: "No", value: false }, { text: "Yes", value: true }],
      options3: [
        { text: "Article", value: false },
        { text: "Other URL", value: true }
      ],
      options2: [
        { text: "Active", value: "first" },
        { text: "Inactive", value: "second" }
      ]
    };
  }
};
</script>

<style>
</style>

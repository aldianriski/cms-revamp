<template>
  <div>
    <div align="left">
      <h5 class="h5 mb-1 text-gray-800 font-weight-bold">Article</h5>
      <p class="mb-4">Paxel | Customer Exellence | Article</p>
    </div>
    <br />
    <b-card class="text-left">
      <h5 class="font-weight-bold">Edit Article</h5>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">Name</b-col>
        <b-col>
          <b-form-input :value="items.name" placeholder="name"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">Category</b-col>
        <b-col>
          <b-form-radio-group
            id="radio-group-1"
            v-model="category"
            :options="options"
            name="radio-category"
          ></b-form-radio-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">Show in Highlight</b-col>
        <b-col md="6">
          <b-form-radio-group
            id="radio-group-2"
            v-model="highlight"
            :options="options2"
            name="radio-highlight"
          >
            <i class="text-secondary">
              <sup>*</sup>#antarkankebaikan only
            </i>
          </b-form-radio-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5 mt-3">Image</b-col>
        <b-col md="6">
          <b-card body-class="py-2 px-2">
            <card-body>
              <b-row>
                <b-col class="text-primary mt-2">
                  <i class="fas fa-paperclip"></i>
                  &nbsp;
                  Photo {{items.image}}
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
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right mt-2 pr-5 pt-4">Title</b-col>
        <b-col md="5">
          <b-form-group
            id="fieldset-1"
            label="Bahasa Indonesia"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <b-form-input :value="items.title.id" placeholder="Title In Bahasa"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="5">
          <b-form-group
            id="fieldset-1"
            label="English"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <b-form-input :value="items.title.eng" placeholder="Title In English"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="2" class="text-right pr-5">Headline</b-col>
        <b-col>
          <b-form-textarea
            id="textarea"
            v-model="headline1"
            placeholder="Headline in Bahasa Indonesia..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
        <b-col>
          <b-form-textarea
            id="textarea"
            v-model="headline2"
            placeholder="Headline in Bahasa Indonesia..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">Content</b-col>
        <b-col>
          <b-form-textarea
            id="textarea"
            v-model="content1"
            placeholder="Content in Bahasa Indonesia..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
        <b-col>
          <b-form-textarea
            id="textarea"
            v-model="content2"
            placeholder="Content in Bahasa Indonesia..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">With Button</b-col>
        <b-col md="2">
          <b-form-radio-group
            id="radio-group-3"
            v-model="with_button"
            :options="button"
            name="radio-button"
          ></b-form-radio-group>
        </b-col>
        <b-col>
          <b-form-input
            disabled
            :value="items.button.button_id"
            placeholder="Button Text in Bahasa"
          ></b-form-input>
        </b-col>
        <b-col>
          <b-form-input
            disabled
            :value="items.button.button_eng"
            placeholder="Button Text in English"
          ></b-form-input>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">URL</b-col>
        <b-col>
          <b-form-input :value="items.button_url" disabled placeholder="URL"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="2" class="text-right pr-5">Status</b-col>
        <b-col>
          <b-form-radio-group
            id="radio-group-4"
            v-model="status_select"
            :options="status"
            name="radio-status"
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
            v-model="check"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >Always Active</b-form-checkbox>
        </b-col>
      </b-row>
      <b-button variant="primary" class="mr-5">Save</b-button>
      <router-link :to="{name: 'Headline'}">
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
      selected: "first",
      category: "",
      highlight: "",
      headline1: "",
      headline2: "",
      content1: "",
      content2: "",
      with_button: "",
      status_select: "",
      check: "",
      items: [],
      status: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" }
      ],
      button: [{ text: "No", value: "no" }, { text: "Yes", value: "yes" }],
      options: [
        { text: "Promo", value: "promo" },
        { text: "News", value: "news" },
        { text: "#antarkankebaikan", value: "antarkankebaikan" }
      ],
      options2: [{ text: "Yes", value: "no" }, { text: "No", value: "yes" }]
    };
  },
  mounted() {
    dataService
      .getArticle()
      .then(response => {
        this.items = response.data.data;
        this.category = response.data.data.category;
        this.highlight = response.data.data.highlight;
        this.headline1 = response.data.data.headline.id;
        this.headline2 = response.data.data.headline.eng;
        this.content1 = response.data.data.content.id;
        this.content2 = response.data.data.content.eng;
        this.with_button = response.data.data.button.is_active;
        this.status_select = response.data.data.status;
        this.check = response.data.data.is_active;
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

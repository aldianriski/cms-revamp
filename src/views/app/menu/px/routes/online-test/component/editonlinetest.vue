<template>
  <div>
    <div align="left">
      <h5 class="h5 mb-1 text-gray-800">
        <b>Online Test</b>
      </h5>
      <p class="mb-4">Paxel | Proccess Excellence | Online Test</p>
    </div>
    <b-card class="text-left">
      <h5>
        <b>Edit Test</b>
      </h5>
      <br />
      <b-row>
        <b-col md="3" class="text-right mt-2 pr-5">Title</b-col>
        <b-col>
          <b-form-input :value="items.title" placeholder="Title"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right mt-2 pr-5">Duration (m)</b-col>
        <b-col>
          <b-form-input :value="items.duration" placeholder="In minutes"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right mt-2 pr-5 pt-4">Test Name</b-col>
        <b-col md="4">
          <b-form-group
            id="fieldset-1"
            label="Bahasa Indonesia"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              :value="items.testname.id"
              placeholder="Test Name In Bahasa Indonesia"
            ></b-form-input>
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
            <b-form-input :value="items.testname.eng" placeholder="Test Name In English"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col></b-col>
      </b-row>
      <div v-for="question in items.question" :key="question.id">
        <hr />
        <b-row>
          <b-col md="3" class="mt-2 pr-5">
            <b-row>
              <b-col class="text-left" md="4">
                <i class="fas fa-bars"></i>
                {{question.id}}
              </b-col>
              <b-col class="text-right">Question Name</b-col>
            </b-row>
          </b-col>
          <b-col md="4">
            <b-form-textarea
              id="textarea"
              v-model="question.name_id"
              placeholder="Question In Bahasa Indonesia"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-col>
          <b-col></b-col>
          <b-col md="4">
            <b-form-textarea
              id="textarea"
              v-model="question.name_eng"
              placeholder="Question In Bahasa English"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-col>
          <b-col></b-col>
        </b-row>
        <br />
        <b-row>
          <b-col md="3" class="text-right pr-5 mt-3">Image</b-col>
          <b-col md="6">
            <b-card body-class="py-2 px-2">
              <card-body>
                <b-row>
                  <b-col class="text-primary mt-2">
                    <i class="fas fa-paperclip"></i>
                    &nbsp;
                    Image {{question.image_url}}
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
          <b-col md="3" class="text-right pr-5">Answer Type</b-col>
          <b-col>
            <b-form-select v-model="question.answer_type" :options="options" class="mb-3">
              <template slot="first">
                <option :value="null" disabled>-- Select Answer Type --</option>
              </template>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3" class="text-right pr-5">Answer</b-col>
          <b-col md="4">
            <b-form-input :value="question.answer_id"></b-form-input>
          </b-col>
          <b-col></b-col>
          <b-col md="4">
            <b-form-input :value="question.answer_eng"></b-form-input>
          </b-col>
          <b-col>
            <i class="fas fa-times text-danger mt-2"></i>
          </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col md="3"></b-col>
          <b-col>
            <b-button variant="outline-primary">
              <i class="fas fa-plus"></i> Add more choice
            </b-button>
          </b-col>
        </b-row>
        <b-row>
          <b-col></b-col>
          <b-col md="3" class="text-right">
            <b-button block variant="danger">Remove Question</b-button>
          </b-col>
        </b-row>
      </div>
      <hr />
      <b-row>
        <b-col md="3"></b-col>
        <b-col>
          <b-button block variant="warning">Add More Question</b-button>
        </b-col>
      </b-row>
      <b-button variant="primary" class="mr-3">Save</b-button>
      <router-link :to="{name: 'pxOnlineTest'}">
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
      selected: null,
      options: [
        { value: "A", text: "Short Answer" },
        { value: "B", text: "Long Answer / Essay" },
        { value: "C", text: "Multi Multiple Choice" }
      ]
    };
  },
  mounted() {
    dataService
      .getOnlineTest()
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

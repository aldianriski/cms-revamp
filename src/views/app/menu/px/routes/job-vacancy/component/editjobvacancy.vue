<template>
  <div>
    <div align="left">
      <h5 class="h5 mb-1 text-gray-800">
        <b>Job Vacancy</b>
      </h5>
      <p class="mb-4">Paxel | Proccess Excellence | Job Vacancy</p>
    </div>
    <b-card class="text-left">
      <h5>
        <b>Edit Vacancy</b>
      </h5>
      <br />
      <b-row>
        <b-col md="3" class="text-right mt-1 pr-5">Job Title</b-col>
        <b-col>
          <b-form-input placeholder="Job Title" :value="items.job_title"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right mt-1 pr-5">Department</b-col>
        <b-col>
          <b-form-input placeholder="Department" :value="items.department"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right mt-1 pr-5">Location</b-col>
        <b-col>
          <b-form-input placeholder="Location" :value="items.location"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right mt-1 pr-5">Experience</b-col>
        <b-col>
          <b-form-input placeholder="Experience" :value="items.experience"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right mt-2 pr-5 pt-4">Description</b-col>
        <b-col md="4">
          <b-form-group
            id="fieldset-1"
            label="Bahasa Indonesia"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <b-form-textarea
              id="textarea"
              v-model="description1"
              placeholder="Question In Bahasa Indonesia"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
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
            <b-form-textarea
              id="textarea"
              v-model="description2"
              placeholder="Question In English"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col></b-col>
      </b-row>
      <b-row>
        <b-col md="3" class="text-right pr-5">Requirement</b-col>
        <b-col md="4">
          <b-form-textarea
            id="textarea"
            v-model="requirement1"
            placeholder="Question In Bahasa Indonesia"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
        <b-col></b-col>
        <b-col md="4">
          <b-form-textarea
            id="textarea"
            v-model="requirement2"
            placeholder="Question In English"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right pr-5">Skills</b-col>
        <b-col md="4">
          <b-form-input :value="items.skills.id"></b-form-input>
        </b-col>
        <b-col></b-col>
        <b-col md="4">
          <b-form-input :value="items.skills.eng"></b-form-input>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right pr-5">Stage 1 Test</b-col>
        <b-col md="2" class="pr-0">
          <b-form-group>
            <b-form-radio-group v-model="stage1" :options="options" name="radio-stage"></b-form-radio-group>
          </b-form-group>
        </b-col>
        <b-col md="2" class="pl-0">
          <b-form-input disabled placeholder="Minimum Score"></b-form-input>
        </b-col>
        <b-col></b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right pr-5">Stage 2 Test</b-col>
        <b-col md="4">
          <b-form-select v-model="stage2" :options="options3" class="mb-3">
            <template slot="first">
              <option :value="null" disabled>-- Select Stage 2 Test --</option>
            </template>
          </b-form-select>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right pr-5">Status</b-col>
        <b-col md="2" class="pr-0">
          <b-form-group>
            <b-form-radio-group v-model="status1" :options="options2" name="radio-status"></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3" class="text-right pr-5">Period</b-col>
        <b-col md="2">
          <b-form-input type="date"></b-form-input>
        </b-col>
        <b-col md="2">
          <b-form-input type="date"></b-form-input>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3"></b-col>
        <b-col md="3">
          <b-form-checkbox
            id="checkbox-1"
            v-model="status2"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >Always Active</b-form-checkbox>
        </b-col>
      </b-row>
      <b-button variant="primary" class="mr-3">Save</b-button>
      <router-link :to="{name: 'pxJobVacancy'}">
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
      description1: "",
      description2: "",
      requirement1: "",
      requirement2: "",
      stage1: null,
      stage2: null,
      status1: null,
      status2: null,
      options: [{ text: "No", value: "No" }, { text: "Yes", value: "Yes" }],
      options3: [{ text: "No", value: "No" }, { text: "Yes", value: "Yes" }],
      options2: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" }
      ]
    };
  },
  mounted() {
    dataService
      .getJobVacancy()
      .then(response => {
        this.items = response.data.data;
        this.description1 = response.data.data.description.id;
        this.description2 = response.data.data.description.eng;
        this.requirement1 = response.data.data.requirement.id;
        this.requirement2 = response.data.data.requirement.eng;
        this.stage1 = response.data.data.stage_1.status;
        this.stage2 = response.data.data.stage_2;
        this.status1 = response.data.data.status;
        this.status2 = response.data.data.always_active;
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

<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 mb-1 text-primary">
        <b>Job Vacancy</b>
      </h5>
    </div>
    <br />
    <b-card class="text-left">
      <h5>
        <b>Create Job Vacancy</b>
      </h5>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Job Type" label-for="input-1">
            <b-form-select v-model="selected" :options="options" class="mb-3">
              <template slot="first">
                <option :value="null" disabled>Select Job Type</option>
              </template>
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Job Name" label-for="input-1">
            <b-form-input placeholder="Job Name"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Department" label-for="input-1">
            <b-form-input placeholder="Department"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Location" label-for="input-1">
            <b-form-input placeholder="Location"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Experience" label-for="input-1">
            <b-form-select v-model="selected" :options="options" class="mb-3">
              <template slot="first">
                <option :value="null" disabled>Select Experience</option>
              </template>
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Description (Bahasa)" label-for="input-1">
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Description In Bahasa"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Description (English)" label-for="input-1">
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Description In English"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Requirements (Bahasa)" label-for="input-1">
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Requirements In Bahasa"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Requirements (English)" label-for="input-1">
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Requirements In English"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Skills (Bahasa)" label-for="input-1">
            <b-form-input></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Skills (English)" label-for="input-1">
            <b-form-input></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <div class="form-group" v-for="(input , k) in test" :key="k">
        <b-row>
          <b-col md="3">
            <b-form-group id="fieldset-1" label-class="mb-0" label-for="input-1">Stage Test {{k+1}}</b-form-group>
          </b-col>
          <b-col md="3" class="text-right">
            <b-link
              style="text-decoration: none;"
              class="text-danger"
              @click="remove(k)"
              v-show="k || ( !k && test.length > 1)"
            >Remove</b-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-select v-model="input.name_test" :options="options" class="mb-3">
              <template slot="first">
                <option :value="null" disabled>Select Test</option>
              </template>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <b-button block variant="outline-primary" @click="add(k)" v-show="k == test.length-1">
              <i class="fas fa-plus"></i> Add More
            </b-button>
          </b-col>
        </b-row>
      </div>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Status" label-for="input-1">
            <b-form-radio-group v-model="selected" :options="options2" name="radio-inline"></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3">
          <b-form-group id="fieldset-1" label="Star Date" label-for="input-1">
            <b-form-input type="date"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group id="fieldset-1" label="End Date" label-for="input-1">
            <b-form-input type="date"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="3">
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >Always Active</b-form-checkbox>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-right">
          <b-button variant="primary" size="lg" class="mr-3">Save</b-button>
          <router-link :to="{name: 'pxJobVacancy'}">
            <b-button size="lg" variant="outline-secondary">Cancel</b-button>
          </router-link>
        </b-col>
      </b-row>
      <br />
    </b-card>
    {{test}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [{ text: "No", value: "no" }, { text: "Yes", value: "second" }],
      options2: [
        { text: "Active", value: "active" },
        { text: "Inactive", value: "inactive" }
      ],
      test: [
        {
          name_test: null
        }
      ]
    };
  },
  methods: {
    add(index) {
      this.test.push({ name_test: null });
    },
    remove(index) {
      this.test.splice(index, 1);
    }
  }
};
</script>

<style>
</style>

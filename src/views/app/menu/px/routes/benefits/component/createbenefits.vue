<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 mb-1 text-primary">
        <b>Benefits</b>
      </h5>
      <br />
    </div>
    <b-card class="text-left">
      <b class="h6 font-weight-bold">Create New Benefits</b>
      <b-row class="mt-4">
        <b-col>
          <b-form-group id="fieldset-1" label="Title (Bahasa)" label-for="input-1">
            <input
              placeholder="Title In Bahasa"
              v-model="title_id"
              v-validate="'required|min:5|max:30'"
              name="title_id"
              class="form-control"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Title (English)" label-for="input-1">
            <input
              placeholder="Title In English"
              v-model="title_eng"
              v-validate="'required|min:5|max:30'"
              name="title_eng"
              class="form-control"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Description (Bahasa)" label-for="input-1">
            <textarea
              id="textarea"
              v-model="description_id"
              v-validate="'required|min:5|max:30'"
              name="description_id"
              class="form-control"
              placeholder="Description In Bahasa Indonesia"
              rows="3"
              max-rows="6"
            ></textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Description (English)" label-for="input-1">
            <textarea
              id="textarea"
              v-model="description_eng"
              v-validate="'required|min:5|max:30'"
              name="description_eng"
              class="form-control"
              placeholder="Description In English"
              rows="3"
              max-rows="6"
            ></textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Image" label-for="input-1"></b-form-group>
          <b-card body-class="py-2 px-2">
            <card-body>
              <b-row>
                <b-col class="text-primary mt-2">
                  <i class="fas fa-paperclip"></i>
                  &nbsp;
                  {{!this.file ? 'Photo':this.file.name}}
                  <sup
                    class="text-secondary pl-3 mr-5 pr-5"
                  >(2 Mb)</sup>
                </b-col>
                <b-col class="text-right" align="right">
                  <input
                    type="file"
                    ref="file"
                    style="display: none"
                    v-on:change="onChangeFileUpload()"
                  />
                  <b-button @click="$refs.file.click()" variant="primary" class="ml-5">Select File</b-button>
                </b-col>
              </b-row>
            </card-body>
          </b-card>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col class="pr-0">
          <b-form-group id="fieldset-1" label="Status" label-for="input-1">
            <b-form-radio-group
              id="radio-group-1"
              v-model="selected"
              :options="options"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="text-right">
        <b-col>
          <b-button
            variant="primary"
            :disabled="veeErrors.any() || !isCompleted || loading"
            @click="post()"
            class="mr-3"
            size="lg"
          >Save</b-button>
          <router-link :to="{name: 'pxBenefits'}">
            <b-button size="lg" variant="outline-secondary">Cancel</b-button>
          </router-link>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      loading: false,
      title_id: "",
      title_eng: "",
      description_id: "",
      description_eng: "",
      options: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" }
      ],
      file: ""
    };
  },
  methods: {
    post() {
      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("title_id", this.title_id);
      formData.append("title_eng", this.title_eng);
      formData.append("description_id", this.description_id);
      formData.append("description_eng", this.description_eng);
      formData.append("status", this.selected);

      this.loading = true;
      this.$store
        .dispatch("benefitsModule/postBenefit", formData)
        .then(response => {
          this.loading = false;
          this.$router.push({ name: "pxBenefits" });
          this.$swal({
            type: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          console.log(response);
        })
        .catch(error => {
          this.loading = false;
          this.serverError = error.response.data;
          console.log(error);
        });
    },
    onChangeFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  },
  computed: {
    isCompleted() {
      return (
        this.selected &&
        this.file &&
        this.title_id &&
        this.title_eng &&
        this.description_id &&
        this.description_eng
      );
    }
  }
};
</script>

<style>
</style>

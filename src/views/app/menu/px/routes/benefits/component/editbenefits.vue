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
      <b class="h6 font-weight-bold">Edit Benefits</b>
      <b-row class="mt-4">
        <b-col>
          <b-form-group id="fieldset-1" label="Title (Bahasa)" label-for="input-1">
            <input
              placeholder="Title In Bahasa"
              v-model="items.title.id"
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
              v-model="items.title.eng"
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
              v-model="items.description.id"
              v-validate="'required|min:5|max:30'"
              name="description_id"
              class="form-control"
              placeholder="Description In Bahasa Indonesia"
            ></textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Description (English)" label-for="input-1">
            <textarea
              id="textarea"
              v-model="items.description.eng"
              v-validate="'required|min:5|max:30'"
              name="description_eng"
              class="form-control"
              placeholder="Description In English"
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
                  {{!this.items.imageVideo ? 'Photo':this.items.imageVideo}}
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
              v-model="items.status"
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
            @click="put()"
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
import dataService from "../dataService";

export default {
  data() {
    return {
      items: [],
      file: "",
      loading: false,
      selected: "",
      options: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" }
      ]
    };
  },
  beforeCreate() {
    // this.$store.dispatch("getDonatur");
    this.$store.dispatch("benefitsModule/getBenefit", this.$route.params.id);
  },
  created() {
    this.$store.watch(
      state => state.benefitsModule.benefits_id,
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
  },
  methods: {
    put() {
      this.loading = true;
      let formData = new FormData();
      formData.append("image", this.file);
      formData.append("title_id", this.items.title.id);
      formData.append("title_eng", this.items.title.eng);
      formData.append("description_id", this.items.description.id);
      formData.append("description_eng", this.items.description.eng);
      formData.append("status", this.items.status);
      this.$store
        .dispatch("benefitsModule/putBenefit", {
          id: this.$route.params.id,
          formData
        })
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
        this.items.status &&
        // this.items.imageVideo &&
        this.items.title.id &&
        this.items.title.eng &&
        this.items.description.id &&
        this.items.description.eng
      );
    }
  }
};
</script>

<style>
</style>

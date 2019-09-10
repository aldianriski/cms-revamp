<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 text-primary font-weight-bold">Testimonials</h5>
      <br />
    </div>
    <b-card class="text-left">
      <h6 class="font-weight-bold">Edit Testimonial</h6>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Paxelian Name" label-for="input-1">
            <input
              v-model="items.name"
              placeholder="Name"
              v-validate="'required|min:5|max:30'"
              name="name"
              class="form-control"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Job Title" label-for="input-1">
            <input
              v-model="items.job_title"
              placeholder="Job Title"
              v-validate="'required|min:5|max:30'"
              name="job_title"
              class="form-control"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Testimonial (Bahasa)" label-for="input-1">
            <textarea
              id="textarea"
              v-model="items.testimonial.id"
              placeholder="Testimonial In Bahasa Indonesia"
              v-validate="'required|min:5|max:30'"
              name="testimonial_id"
              class="form-control"
            ></textarea>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Testimonial (English)" label-for="input-1">
            <b-form-textarea
              id="textarea"
              v-model="items.testimonial.eng"
              placeholder="Testimonial In English"
              v-validate="'required|min:5|max:30'"
              name="testimonial_eng"
              class="form-control"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Photo" label-for="input-1"></b-form-group>
          <b-card body-class="py-2 px-2">
            <card-body>
              <b-row>
                <b-col class="text-primary mt-2">
                  <i class="fas fa-paperclip"></i>
                  &nbsp;
                  {{!this.items.photo ? 'Photo':this.items.photo}}
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
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Status" label-for="input-1">
            <b-form-radio-group v-model="items.status" :options="options2" name="radio-inline"></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="text-right">
        <b-col>
          <b-button
            variant="primary"
            class="mr-3"
            :disabled="veeErrors.any() || !isCompleted || loading"
            @click="put()"
            size="lg"
          >Save</b-button>
          <router-link :to="{name: 'pxTestimonial'}">
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
      text1: "",
      text2: "",
      selected: null,
      options: [{ text: "No", value: "no" }, { text: "Yes", value: "second" }],
      options2: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" }
      ]
    };
  },
  beforeCreate() {
    // this.$store.dispatch("getDonatur");
    this.$store.dispatch(
      "testimonialModule/getTestimonial",
      this.$route.params.id
    );
  },
  created() {
    this.$store.watch(
      state => state.testimonialModule.testimonial_id,
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
      formData.append("photo", this.items.photo);
      formData.append("name", this.items.name);
      formData.append("job_title", this.items.job_title);
      formData.append("testimonial_id", this.items.testimonial.id);
      formData.append("testimonial_eng", this.items.testimonial.eng);
      formData.append("status", this.items.status);
      this.$store
        .dispatch("testimonialModule/putTestimonial", {
          id: this.$route.params.id,
          formData
        })
        .then(response => {
          this.loading = false;
          this.$router.push({ name: "pxTestimonial" });
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
        this.items.name &&
        this.items.photo &&
        this.items.job_title &&
        this.items.status &&
        this.items.testimonial.id &&
        this.items.testimonial.eng
      );
    }
  }
};
</script>

<style>
</style>

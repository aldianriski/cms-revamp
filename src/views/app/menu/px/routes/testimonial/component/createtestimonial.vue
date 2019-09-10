<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 text-primary font-weight-bold">Testimonials</h5>
      <br />
    </div>
    <b-card class="text-left">
      <h6 class="font-weight-bold">Create New Testimonial</h6>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Paxelian Name" label-for="input-1">
            <input
              placeholder="Paxelian Name"
              v-model="name"
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
              placeholder="Job Title"
              v-model="job_title"
              v-validate="'required|min:5|max:30'"
              name="job_title"
              class="form-control"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Testimonial (Bahasa)" label-for="input-1">
            <textarea
              id="textarea"
              v-model="testimonial_id"
              v-validate="'required|min:5|max:30'"
              name="testimonial_id"
              class="form-control"
              placeholder="Testimonial In Bahasa Indonesia"
            ></textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Testimonial (English)" label-for="input-1">
            <textarea
              id="textarea"
              v-model="testimonial_eng"
              v-validate="'required|min:5|max:30'"
              name="testimonial_eng"
              class="form-control"
              placeholder="Testimonial In English"
            ></textarea>
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
            <b-form-radio-group v-model="selected" :options="options2" name="radio-inline"></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="text-right">
        <b-col>
          <b-button
            variant="primary"
            class="mr-3"
            :disabled="veeErrors.any() || !isCompleted || loading"
            @click="post()"
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
export default {
  data() {
    return {
      selected: null,
      options2: [
        { text: "Active", value: "Active" },
        { text: "Inactive", value: "Inactive" }
      ],
      name: "",
      job_title: "",
      testimonial_id: "",
      testimonial_eng: "",
      file: ""
    };
  },
  methods: {
    post() {
      let formData = new FormData();
      formData.append("photo", this.file);
      formData.append("name", this.name);
      formData.append("job_title", this.job_title);
      formData.append("testimonial_id", this.testimonial_id);
      formData.append("testimonial_eng", this.testimonial_eng);
      formData.append("status", this.selected);

      this.loading = true;
      this.$store
        .dispatch("testimonialModule/postTestimonial", formData)
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
        this.job_title &&
        this.testimonial_id &&
        this.testimonial_eng &&
        this.name
      );
    }
  }
};
</script>

<style>
</style>

<template>
  <div>
    <div align="left">
      <h5 class="h5 mb-4 text-primary">
        <br />
        <b>Life in Paxel</b>
      </h5>
    </div>
    <b-card class="text-left">
      <b>Create New Story</b>
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
          <b-form-group id="fieldset-1" label="Content (Bahasa)" label-for="input-1">
            <textarea
              id="textarea"
              placeholder="Content In Bahasa"
              v-model="contentdes_id"
              v-validate="'required|min:5|max:30'"
              name="contentdes_id"
              class="form-control"
            ></textarea>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Content (English)" label-for="input-1">
            <textarea
              id="textarea"
              placeholder="Content In English"
              v-model="contentdes_eng"
              v-validate="'required|min:5|max:30'"
              name="contentdes_eng"
              class="form-control"
            ></textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Media" label-for="input-1">
            <b-form-radio-group v-model="selected" :options="options" name="radio-inline1"></b-form-radio-group>
          </b-form-group>
        </b-col>
        <b-col md="4"></b-col>
      </b-row>
      <b-row class="mb-3" v-show="selected == 'false' || selected == 'true'">
        <b-col md="6">
          <b-form-group
            id="fieldset-1"
            label="URL"
            v-show="selected == 'false'"
            label-for="input-1"
          >
            <input
              placeholder="Link"
              v-model="link"
              v-validate="'required|min:5|max:30'"
              name="link"
              class="form-control"
            />
          </b-form-group>
          <b-form-group
            id="fieldset-1"
            label="Media File"
            label-for="input-1"
            v-show="selected == 'true'"
          >
            <b-card body-class="py-2 px-2">
              <card-body>
                <b-row>
                  <b-col class="text-primary mt-2">
                    <i class="fas fa-paperclip"></i>&nbsp;
                    Photo
                    <sup class="text-secondary pl-3 mr-5 pr-5">(2 Mb)</sup>
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
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="2" class="pr-0">
          <b-form-group id="fieldset-1" label="Status" label-for="input-1">
            <b-form-radio-group v-model="selected2" :options="options2" name="radio-inline2"></b-form-radio-group>
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
          <router-link :to="{name: 'pxLifeInPaxel'}">
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
      loading: false,
      selected: null,
      selected2: null,
      title_id: "",
      title_eng: "",
      contentdes_id: "",
      contentdes_eng: "",
      link: "",
      options: [
        { text: "Upload", value: "true" },
        { text: "Embeded", value: "false" }
      ],
      options2: [
        { text: "Active", value: "true" },
        { text: "Inactive", value: "false" }
      ]
    };
  },
  methods: {
    post() {
      let formData = new FormData();
      formData.append("imagevideo_link", this.file);
      formData.append("imagevideo_status", this.file);
      formData.append("title_id", this.title_id);
      formData.append("title_eng", this.title_eng);
      formData.append("contentdes_id", this.contentdes_id);
      formData.append("contentdes_eng", this.contentdes_eng);
      formData.append("status", this.selected);

      this.loading = true;
      this.$store
        .dispatch("lifeInPaxelModule/postLifeInPaxel", formData)
        .then(response => {
          this.loading = false;
          this.$router.push({ name: "pxLifeInPaxel" });
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
      this.link = this.$refs.file.files[0];
    }
  },
  computed: {
    isCompleted() {
      return (
        this.selected &&
        this.selected2 &&
        this.link &&
        this.title_id &&
        this.title_eng &&
        this.contentdes_id &&
        this.contentdes_eng
      );
    }
  }
};
</script>

<style>
</style>

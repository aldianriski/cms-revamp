<template>
  <div>
    <div align="left">
      <br />
      <h5 class="font-weight-bold text-primary">Terms & Conditons</h5>
      <br />
    </div>
    <b-card class="text-left">
      <b>Create New Terms & Conditions</b>
      <b-row class="mt-4">
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Interface" label-for="input-1">
            <b-form-select v-model="selected" :options="options" class="mb-3">
              <template slot="first">
                <option :value="null" disabled>Select Interface</option>
              </template>
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Page Number" label-for="input-1">
            <input
              v-model="page_number"
              v-validate="'required|numeric|max:5'"
              name="page_number"
              class="form-control"
              placeholder="Enter a Page Number"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="6">
          <b-form-group
            id="fieldset-1"
            label="Title (Bahasa)"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <input
              v-validate="'required|min:6|max:30'"
              v-model="title_id"
              name="title_id"
              id="input-1"
              class="form-control"
              placeholder="Title In Bahasa Indonesia"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            id="fieldset-1"
            label="Title (English)"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <input
              v-validate="'required|min:6|max:30'"
              v-model="title_eng"
              name="title_eng"
              class="form-control"
              placeholder="Title In English"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="fieldset-1"
            label="Content (Bahasa)"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <ckeditor
              :editor="editor"
              tag-name="textarea"
              placeholder="Content in Bahasa"
              v-model="description_id"
              class="form-control"
              :config="editorConfig"
            ></ckeditor>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="fieldset-1"
            label="Content (English)"
            label-class="font-weight-bold"
            label-for="input-1"
          >
            <ckeditor
              :editor="editor"
              tag-name="textarea"
              placeholder="Content in English"
              v-model="description_eng"
              class="form-control"
              :config="editorConfig"
            ></ckeditor>
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row class="text-right">
        <b-col>
          <b-button
            variant="primary"
            :disabled="veeErrors.any() || !isCompleted || loading"
            @click="post()"
            class="mr-3"
            size="lg"
          >
            Save
            <b-spinner v-if="loading" small label="Loading..."></b-spinner>
          </b-button>
          <router-link :to="{name: 'Tnc'}">
            <b-button variant="outline-secondary" size="lg">Cancel</b-button>
          </router-link>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          "fontSize",
          "|",
          "bold",
          "italic",
          "underline",
          "fontColor",
          "|",
          "alignment",
          "bulletedList",
          "numberedList",
          "outdent",
          "indent",
          "link",
          "|",
          "strikethrough"
        ]
      },
      selected: null,
      loading: false,
      page_number: "",
      title_id: "",
      title_eng: "",
      description_id: "",
      description_eng: "",
      options: [
        { text: "Paxel.co Website", value: "web" },
        { text: "User App", value: "user" },
        { text: "Hero App", value: "hero" }
      ]
    };
  },
  methods: {
    post() {
      this.loading = true;
      this.$store
        .dispatch("TncModule/postTnc", {
          interface: this.selected,
          page_number: this.page_number,
          title: {
            id: this.title_id,
            eng: this.title_eng
          },
          description: {
            id: this.description_id,
            eng: this.description_eng
          }
        })
        .then(response => {
          this.loading = false;
          this.$router.push({ name: "Tnc" });
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
    }
  },
  computed: {
    isCompleted() {
      return (
        this.selected &&
        this.page_number &&
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

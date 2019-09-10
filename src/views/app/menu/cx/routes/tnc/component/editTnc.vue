<template>
  <div>
    <div align="left">
      <br />
      <h5 class="font-weight-bold text-primary">Terms & Conditons</h5>
      <br />
    </div>
    <b-card class="text-left">
      <b>Edit Terms & Conditions</b>
      <br />
      <b-row class="mt-4">
        <b-col class="text-right pr-5" md="2">Interface</b-col>
        <b-col>
          <b-form-radio-group
            id="radio-group-1"
            v-model="items.interface"
            :options="options"
            name="radio-options"
          ></b-form-radio-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col class="text-right pr-5" md="2">Page Number</b-col>
        <b-col>
          <input
            placeholder="Enter a Page Number"
            name="page_number"
            class="form-control"
            v-model="items.page_number"
            v-validate="'required|numeric|max:5'"
          />
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
            <input
              id="input-1"
              v-validate="'required|min:6|max:30'"
              v-model="items.title.id"
              name="title_id"
              class="form-control"
              placeholder="Title In Bahasa Indonesia"
            />
          </b-form-group>
        </b-col>
        <b-col md="5">
          <b-form-group
            id="fieldset-2"
            label="English"
            label-class="font-weight-bold"
            label-for="input-2"
          >
            <input
              id="input-1"
              v-validate="'required|min:6|max:30'"
              name="title_eng"
              v-model="items.title.eng"
              class="form-control"
              placeholder="Title In English"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-right pr-5" md="2">Content</b-col>
        <b-col>
          <ckeditor
            :editor="editor"
            tag-name="textarea"
            placeholder="Content in Bahasa"
            v-model="items.description.id"
            class="form-control"
            :config="editorConfig"
          ></ckeditor>
        </b-col>
        <b-col>
          <ckeditor
            :editor="editor"
            tag-name="textarea"
            placeholder="Content in English"
            v-model="items.description.eng"
            class="form-control"
            :config="editorConfig"
          ></ckeditor>
        </b-col>
      </b-row>
      <br />
      <b-row class="text-right">
        <b-col>
          <b-button
            variant="primary"
            :disabled="veeErrors.any() || !isCompleted || loading"
            @click="put()"
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
      loading: false,
      items: [],
      selected: "",
      options: [
        { text: "Paxel.co Website", value: "web" },
        { text: "User App", value: "user" },
        { text: "Hero App", value: "hero" }
      ]
    };
  },
  beforeCreate() {
    // this.$store.dispatch("getDonatur");
    this.$store.dispatch("TncModule/getTnc", this.$route.params.id);
  },
  created() {
    this.$store.watch(
      state => state.TncModule.tnc_id,
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
      var tncData = {
        interface: this.items.interface,
        page_number: String(this.items.page_number),
        title: {
          id: this.items.title.id,
          eng: this.items.title.eng
        },
        description: {
          id: this.items.description.id,
          eng: this.items.description.eng
        }
      };
      this.$store
        .dispatch("TncModule/putTnc", { id: this.$route.params.id, tncData })
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
        this.items.interface &&
        this.items.page_number &&
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

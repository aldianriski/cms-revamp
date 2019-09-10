<template>
  <div>
    <div align="left">
      <br />
      <h5 class="font-weight-bold text-primary">Frequently Asked Question</h5>
      <br />
    </div>
    <b-card class="text-left">
      <b>Create New Frequently Asked Question</b>
      <b-row class="mt-4">
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Category" label-for="input-1">
            <select
              class="custom-select"
              v-validate="'required'"
              name="category"
              v-model="selected"
              required
            >
              <option :value="null" disabled>Select Category</option>
              <option v-for="item in items" :key="item" :value="item.title">{{item.title}}</option>
            </select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="FAQ Name" label-for="input-1">
            <input
              placeholder="FAQ Name"
              v-model="title"
              v-validate="'required|min:5|max:30'"
              name="title"
              class="form-control"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Question (Bahasa)" label-for="input-1">
            <input
              id="input-1"
              placeholder="Question in Bahasa Indonesia"
              v-model="question_id"
              v-validate="'required|min:5|max:30'"
              name="question_id"
              class="form-control"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Question (English)" label-for="input-1">
            <input
              placeholder="Question in English"
              v-model="question_eng"
              v-validate="'required|min:5|max:30'"
              name="question_eng"
              class="form-control"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <!-- <textarea
            id="textarea-large"
            placeholder="Answer in Bahasa"
            v-on:change="answer_id"
            v-validate="'required|min:5|max:30'"
            name="answer_id"
            class="form-control"
            style="display: none"
          ></textarea>-->
          <b-form-group id="fieldset-1" label="Answer (Bahasa)" label-for="input-1">
            <ckeditor
              :editor="editor"
              tag-name="textarea"
              placeholder="Answer in Bahasa"
              v-model="answer_id"
              class="form-control"
              :config="editorConfig"
            ></ckeditor>
          </b-form-group>
        </b-col>
        <b-col>
          <!-- <textarea
            id="editor"
            placeholder="Answer in English"
            v-on:change="answer_eng"
            v-validate="'required|min:5|max:30'"
            name="answer_eng"
            class="form-control"
            style="display: none"
          ></textarea>-->
          <b-form-group id="fieldset-1" label="Answer (English)" label-for="input-1">
            <ckeditor
              :editor="editor"
              tag-name="textarea"
              placeholder="Answer in English"
              name="answer_eng"
              class="form-control"
              v-model="answer_eng"
              :config="editorConfig"
            ></ckeditor>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
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
          >Save</b-button>
          <router-link :to="{name: 'Faq'}">
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
      title: "",
      question_id: "",
      question_eng: "",
      answer_id: "",
      answer_eng: "",
      loading: false,
      items: []
    };
  },
  methods: {
    post() {
      this.loading = true;
      this.$store
        .dispatch("FaqModule/postFaq", {
          title: this.title,
          category: this.selected,
          question: { eng: this.question_eng, id: this.question_id },
          answer: { eng: this.answer_eng, id: this.answer_id }
        })
        .then(response => {
          this.loading = false;
          this.$router.push({ name: "Faq" });
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
  async beforeCreate() {
    this.$store.dispatch("FaqModule/getFaqCategorys", { root: true });
  },
  created() {
    this.$store.watch(
      state => state.FaqModule.faq_category,
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
  computed: {
    isCompleted() {
      return (
        this.selected &&
        this.question_id &&
        this.question_eng &&
        this.answer_id &&
        this.answer_eng
      );
    }
  }
};
</script>

<style>
.ck-editor__editable_inline {
  min-height: 200px;
}
</style>

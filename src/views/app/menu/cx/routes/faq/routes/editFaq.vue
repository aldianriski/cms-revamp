<template>
  <div>
    <div align="left">
      <br />
      <h5 class="text-primary font-weight-bold">Frequently Asked Question</h5>
      <br />
    </div>
    <b-card class="text-left">
      <b>Edit Frequently Asked Question</b>
      <b-row class="mt-4">
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Category" label-for="input-1">
            <select
              class="custom-select"
              v-validate="'required'"
              name="category"
              v-model="items.category"
              required
            >
              <option :value="null" disabled>Select Category</option>
              <option v-for="option in options" :key="option" :value="option.title">{{option.title}}</option>
            </select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="FAQ Name" label-for="input-1">
            <input
              placeholder="Title"
              v-model="items.title"
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
              v-model="items.question.id"
              v-validate="'required|min:5|max:30'"
              name="question_id"
              class="form-control"
              placeholder="Question in Bahasa Indonesia"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Question (English)" label-for="input-1">
            <input
              placeholder="Question in English"
              v-model="items.question.eng"
              v-validate="'required|min:5|max:30'"
              name="question_eng"
              class="form-control"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Answer (Bahasa)" label-for="input-1">
            <ckeditor
              :editor="editor"
              tag-name="textarea"
              placeholder="Answer in Bahasa"
              name="answer_id"
              class="form-control"
              v-model="items.answer.id"
              :config="editorConfig"
            ></ckeditor>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Answer (English)" label-for="input-1">
            <ckeditor
              :editor="editor"
              tag-name="textarea"
              placeholder="Answer in English"
              name="answer_eng"
              class="form-control"
              v-model="items.answer.eng"
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
            class="mr-3"
            :disabled="veeErrors.any() || !isCompleted || loading"
            @click="put()"
            size="lg"
          >Save</b-button>
          <router-link :to="{name: 'Faq'}">
            <b-button size="lg" variant="outline-secondary">Cancel</b-button>
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
      items: [],
      selected: "",
      options: []
    };
  },
  beforeCreate() {
    this.$store.dispatch("FaqModule/getFaq", this.$route.params.id);
    this.$store.dispatch("FaqModule/getFaqCategorys", { root: true });
  },
  created() {
    this.$store.watch(
      state => state.FaqModule.faq_id,
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
  mounted() {
    this.$store.watch(
      state => state.FaqModule.faq_category,
      (newValue, oldValue) => {
        this.options = newValue;
        // Do whatever makes sense now
      }
    );
  },
  computed: {
    isCompleted() {
      return (
        this.items.category &&
        this.items.question.id &&
        this.items.question.eng &&
        this.items.answer.id &&
        this.items.answer.eng
      );
    }
  },
  methods: {
    put() {
      this.loading = true;
      var FaqData = {
        title: this.items.title,
        category: this.items.category,
        question: { eng: this.items.question.eng, id: this.items.question.id },
        answer: { eng: this.items.answer.eng, id: this.items.answer.id }
      };
      this.$store
        .dispatch("FaqModule/putFaq", {
          id: this.$route.params.id,
          FaqData
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
  }
};
</script>

<style>
</style>

<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 text-primary">
        <b>Online Test</b>
      </h5>
      <br />
    </div>
    <b-card class="text-left">
      <b>Create New Test</b>
      <b-row class="mt-4">
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Test Name" label-for="input-1">
            <b-form-input placeholder="Title"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Duration" label-for="input-1">
            <b-form-input type="number" placeholder="In minutes"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Test Title (Bahasa)" label-for="input-1">
            <b-form-input id="input-1" placeholder="Title In Bahasa Indonesia"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Test Title (English)" label-for="input-1">
            <b-form-input placeholder="Title In English"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="fieldset-1" label="Test Introduction (Bahasa)" label-for="input-1">
            <ckeditor
              :editor="editor"
              tag-name="textarea"
              placeholder="Test Introduction In Bahasa Indonesia"
              name="answer_eng"
              class="form-control"
              :config="editorConfig"
            ></ckeditor>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Test Introduction (English)" label-for="input-1">
            <ckeditor
              :editor="editor"
              tag-name="textarea"
              placeholder="Test Introduction In English"
              name="answer_eng"
              class="form-control"
              :config="editorConfig"
            ></ckeditor>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="text-left">
          <b-form-group id="fieldset-1" label="Auto Grading" label-for="input-1">
            <b-form-radio-group
              id="radio-group-1"
              v-model="selected2"
              :options="options2"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
        <b-col v-show="selected2 === 'A'">
          Total Score
          <br />
          <p class="pt-2">{{total()}}</p>
        </b-col>
      </b-row>
      <hr />
      <div v-for="(input , k) in test" :key="k">
        <b-row>
          <b-col class="text-left">
            <h5>Question {{k+1}}</h5>
          </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col>
            <b-form-group id="fieldset-1" label="Question (Bahasa)" label-for="input-1">
              <b-form-textarea
                id="textarea"
                v-model="input.question_bahasa"
                placeholder="Question In Bahasa"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group id="fieldset-1" label="Question (English)" label-for="input-1">
              <b-form-textarea
                id="textarea"
                v-model="input.question_eng"
                placeholder="Question In Bahasa English"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col md="6">
            <b-form-group id="fieldset-1" label="Supporting File" label-for="input-1"></b-form-group>
            <b-card body-class="py-2 px-2">
              <card-body>
                <b-row>
                  <b-col md="8" class="text-primary mt-2">
                    <i class="fas fa-paperclip"></i>&nbsp;
                    File (.doc/.xls/.pdf/.png/.jpg)
                    <sup
                      class="text-secondary pl-3 mr-5 pr-5"
                    >(2 Mb)</sup>
                  </b-col>
                  <b-col class="text-right" align="right">
                    <b-button variant="primary" class="ml-5">Select File</b-button>
                  </b-col>
                </b-row>
              </card-body>
            </b-card>
          </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col md="6">
            <b-form-group id="fieldset-1" label="Answer Type" label-for="input-1"></b-form-group>
            <b-form-select v-model="input.answer_type" :options="options" class="mb-3">
              <template slot="first">
                <option :value="null" disabled>Select Answer Type</option>
              </template>
            </b-form-select>
          </b-col>
          <b-col v-show="selected2 === 'A'">
            <b-form-group id="fieldset-1" label="Points" label-for="input-1"></b-form-group>
            <b-form-input
              type="number"
              v-model="input.points"
              placeholder="Point For Score (numbers only)"
            ></b-form-input>
          </b-col>
        </b-row>
        <div v-show="input.answer_type === 'A'">
          <b-row>
            <b-col md="6">
              <b-form-group id="fieldset-1" label-for="input-1">Answer</b-form-group>
              <b-form-input v-model="input.short_answer" placeholder="Exact answer"></b-form-input>
            </b-col>
          </b-row>
        </div>
        <div v-show="input.answer_type === 'B'">
          <b-row>
            <b-col md="6">
              <b-form-group id="fieldset-1" label-for="input-1">Answer</b-form-group>
              <b-form-textarea
                id="textarea"
                v-model="input.essay"
                placeholder="Essay Answer"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-col>
          </b-row>
        </div>
        <div
          v-show="input.answer_type === 'C'"
          v-for="(answer,l) in input.multiple_choice.answer_choice"
          :key="l"
        >
          <b-row>
            <b-col>
              <b-form-group id="fieldset-1" label-for="input-1">Choice 1</b-form-group>
              <b-form-input v-model="answer.id" placeholder="Choice in Bahasa"></b-form-input>
            </b-col>
            <b-col class="text-right">
              <b-form-group id="fieldset-1" label-for="input-1">
                <b-form-radio-group
                  v-model="input.multiple_choice.correct_answer"
                  name="radio-inline"
                >
                  <b-form-radio :value="l">Correct Choice</b-form-radio>
                  <b-link
                    style="text-decoration:none;"
                    @click="remove_multiple(l,k)"
                    v-show="l || ( !l && test[k].multiple_choice.answer_choice.length > 1)"
                    class="text-danger"
                  >Remove</b-link>
                </b-form-radio-group>
              </b-form-group>
              <b-form-input v-model="answer.eng" placeholder="Choice in English"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <b-button
                @click="add_multiple(l,k)"
                v-show="l == test[k].multiple_choice.answer_choice.length-1"
                variant="outline-primary"
              >
                <i class="fas fa-plus"></i> Add more choice
              </b-button>
            </b-col>
          </b-row>
        </div>
        <div
          v-show="input.answer_type === 'D'"
          v-for="(answer,l) in input.checkbox.answer_choice"
          :key="l"
        >
          <b-row>
            <b-col>
              <b-form-group id="fieldset-1" label-for="input-1">Choice 1</b-form-group>
              <b-form-input placeholder="Choice in Bahasa" v-model="answer.id"></b-form-input>
            </b-col>
            <b-col class="text-right">
              <b-form-group id="fieldset-1" label-for="input-1">
                <b-form-checkbox-group
                  id="checkbox-group-2"
                  v-model="input.checkbox.correct_answer"
                  name="flavour-2"
                >
                  <b-form-checkbox :value="l">
                    Correct Choice &nbsp;
                    <b-link
                      @click="remove_checkbox(l,k)"
                      v-show="l || ( !l && test[k].checkbox.answer_choice.length > 1)"
                      style="text-decoration:none;"
                      class="text-danger"
                    >Remove</b-link>
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <b-form-input placeholder="Choice in English" v-model="answer.eng"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col>
              <b-button
                @click="add_checkbox(l,k)"
                v-show="l == test[k].checkbox.answer_choice.length-1"
                variant="outline-primary"
              >
                <i class="fas fa-plus"></i> Add more choice
              </b-button>
            </b-col>
          </b-row>
        </div>
        <div v-show="input.answer_type === 'E'">
          <b-row>
            <b-col md="6">
              <b-form-group id="fieldset-1" label-for="input-1">Answer File</b-form-group>
              <b-form-file
                v-model="input.file"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              ></b-form-file>
            </b-col>
          </b-row>
        </div>
        <b-row>
          <b-col></b-col>
          <b-col md="3" class="text-right">
            <b-button
              block
              variant="danger"
              @click="remove(k)"
              v-show="k || ( !k && test.length > 1)"
            >Remove Question</b-button>
          </b-col>
        </b-row>

        <hr />
        <b-row>
          <b-col md="3"></b-col>
          <b-col>
            <b-button
              block
              variant="warning"
              @click="add(k)"
              v-show="k == test.length-1"
            >Add More Question</b-button>
          </b-col>
        </b-row>
      </div>
      <b-button variant="primary" class="mr-3">Save</b-button>
      <router-link :to="{name: 'pxOnlineTest'}">
        <b-button variant="outline-secondary">Cancel</b-button>
      </router-link>
    </b-card>
    {{test}}
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
      selected2: "B",
      file: null,
      options: [
        { value: "A", text: "Short Answer" },
        { value: "B", text: "Essay" },
        { value: "C", text: "Multiple Choice" },
        { value: "D", text: "Checkboxes" },
        { value: "E", text: "File Upload" }
      ],
      options2: [{ value: "B", text: "No" }, { value: "A", text: "Yes" }],
      total_point: 0,
      test: [
        {
          question_bahasa: null,
          question_english: null,
          answer_type: null,
          points: 0,
          short_answer: null,
          essay: null,
          file: null,
          multiple_choice: {
            correct_answer: null,
            answer_choice: [
              {
                id: null,
                eng: null
              }
            ]
          },
          checkbox: {
            correct_answer: [],
            answer_choice: [
              {
                id: null,
                eng: null
              }
            ]
          }
        }
      ]
    };
  },
  created() {},
  computed: {
    total_points() {}
  },
  methods: {
    total() {
      var total = 0;
      for (var i = 0; i < this.test.length; i++) {
        total += parseInt(this.test[i].points);
      }
      return total;
    },
    add(index) {
      this.test.push({
        question_bahasa: null,
        question_english: null,
        file: null,
        answer_type: null,
        points: 0,
        short_answer: null,
        essay: null,
        file: null,
        multiple_choice: {
          correct_answer: null,
          answer_choice: [
            {
              id: null,
              eng: null
            }
          ]
        },
        checkbox: {
          correct_answer: [],
          answer_choice: [
            {
              id: null,
              eng: null
            }
          ]
        }
      });
    },
    remove(index) {
      this.test.splice(index, 1);
    },
    add_multiple(choice, index) {
      this.test[index].multiple_choice.answer_choice.push({
        id: null,
        eng: null
      });
    },
    remove_multiple(choice, index) {
      this.test[index].multiple_choice.answer_choice.splice(choice, 1);
    },
    add_checkbox(choice, index) {
      this.test[index].checkbox.answer_choice.push({
        id: null,
        eng: null
      });
    },
    remove_checkbox(choice, index) {
      this.test[index].checkbox.answer_choice.splice(choice, 1);
    }
  }
};
</script>

<style>
</style>

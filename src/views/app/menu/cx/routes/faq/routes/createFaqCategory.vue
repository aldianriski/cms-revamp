<template>
  <div>
    <div align="left">
      <br />
      <h5 class="font-weight-bold text-primary">FAQ Categories</h5>
      <br />
    </div>
    <b-card class="text-left">
      <b>Create New Category</b>
      <b-row class="mt-4">
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Category Name" label-for="input-1">
            <input
              placeholder="Category Name"
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
          <b-form-group id="fieldset-1" label="Title (Bahasa)" label-for="input-1">
            <input
              id="input-1"
              placeholder="Title In Bahasa"
              v-validate="'required|min:5|max:30'"
              v-model="category_id"
              name="title"
              class="form-control"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Title (English)" label-for="input-1">
            <input
              placeholder="Title In English"
              v-validate="'required|min:5|max:30'"
              v-model="category_eng"
              name="title"
              class="form-control"
            />
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
export default {
  data() {
    return {
      loading: false,
      title: "",
      category_id: "",
      category_eng: ""
    };
  },
  methods: {
    post() {
      this.loading = true;
      this.$store
        .dispatch("FaqModule/postFaqCategory", {
          title: this.title,
          category_name: {
            id: this.category_id,
            eng: this.category_eng
          }
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
  computed: {
    isCompleted() {
      return this.title && this.category_id && this.category_eng;
    }
  }
};
</script>

<style>
</style>

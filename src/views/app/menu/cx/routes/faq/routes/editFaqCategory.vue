<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 text-primary font-weight-bold">FAQ Categories</h5>
      <br />
    </div>
    <b-card class="text-left">
      <b>Edit Category</b>
      <b-row class="mt-4">
        <b-col md="6">
          <b-form-group id="fieldset-1" label="Category Name" label-for="input-1">
            <input
              placeholder="Category Name"
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
          <b-form-group id="fieldset-1" label="Title (Bahasa)" label-for="input-1">
            <input
              id="input-1"
              v-model="items.category_name.id"
              v-validate="'required|min:5|max:30'"
              name="category_name_id"
              class="form-control"
              placeholder="Title In Bahasa"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fieldset-1" label="Title (English)" label-for="input-1">
            <input
              placeholder="Title In English"
              v-model="items.category_name.eng"
              v-validate="'required|min:5|max:30'"
              name="category_name_eng"
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
            @click="put()"
            class="mr-3"
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
export default {
  data() {
    return {
      loading: false,
      items: []
    };
  },
  methods: {
    put() {
      this.loading = true;
      var FaqCategoryData = {
        title: this.items.title,
        category_name: {
          id: this.items.category_name.id,
          eng: this.items.category_name.eng
        }
      };
      this.$store
        .dispatch("FaqModule/putFaqCategory", {
          id: this.$route.params.id,
          FaqCategoryData
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
      return (
        this.items.title &&
        this.items.category_name.id &&
        this.items.category_name.eng
      );
    }
  },
  beforeCreate() {
    this.$store.dispatch("FaqModule/getFaqCategory", this.$route.params.id);
  },
  created() {
    this.$store.watch(
      state => state.FaqModule.faq_category_id,
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
  mounted() {}
};
</script>

<style>
</style>

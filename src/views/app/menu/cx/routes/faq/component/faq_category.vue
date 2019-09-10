<template>
  <div>
    <br />
    <b-row>
      <b-col class="text-left mt-2">
        <h5 class="font-weight-bold text-primary">FAQ Categories</h5>
      </b-col>
      <b-col class="text-right">
        <router-link :to="{name: 'createFaqCategory'}">
          <b-button variant="primary">
            <img src="@/assets/create-new.svg" class="mr-2" alt />Create New Faq Category
          </b-button>
        </router-link>
      </b-col>
    </b-row>
    <br />
    <div class="text-left">
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <b-table
        v-else
        responsive
        show-empty
        hover
        :busy="loading"
        :items="items"
        :fields="categories"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
        head-variant="light"
        class="bg-white"
      >
        <div slot="table-busy" class="text-center text-primary my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
        <template slot="action" slot-scope="{value,item}">
          <router-link
            :to="{name: 'editFaqCategory', params: {id: item.faq_category_id}}"
            class="text-dark"
          >
            <img src="@/assets/ic-edit.svg" class="mr-2" alt />
          </router-link>
          <b-link class="text-dark" @click="del(item.faq_category_id)">
            <img src="@/assets/rectangle.svg" class="mr-2" alt />
          </b-link>
          <b-link class="text-primary">
            <i class="fas fa-arrow-up mr-2"></i>
          </b-link>
          <b-link class="text-primary">
            <i class="fas fa-arrow-down"></i>
          </b-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      errored: false,
      items: [],
      categories: [
        {
          key: "title",
          label: "Category Name",
          sortable: true,
          class: "text-center"
        },
        {
          key: "category_name.id",
          label: "Title (Bahasa)",
          sortable: true,
          class: "text-center"
        },
        {
          key: "category_name.eng",
          label: "Title (English)",
          sortable: true,
          class: "text-center"
        },
        { key: "action", label: "Action", class: "text-center" }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      customerShow: false,
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      }
    };
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
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    del(id) {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$store.dispatch("FaqModule/delFaqCategory", id);
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  }
};
</script>

<style>
</style>

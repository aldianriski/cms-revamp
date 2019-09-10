<template>
  <div>
    <div align="right"></div>
    <br />
    <div class="text-left">
      <h5 class="font-weight-bold text-primary">Frequently Asked Question</h5>
      <b-row>
        <b-col md="4" class="my-1">
          <b-form-group class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Search"></b-form-input>
              <b-input-group-append>
                <b-button variant="primary" :disabled="!filter" @click="filter = ''">Clear</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="2" class="my-1" align="right">
          <b-form-group label-cols-sm="6" label="Show" class="mb-0">
            <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="3" class="my-1"></b-col>
        <b-col md="3" class="my-1" align="right">
          <router-link :to="{name: 'createFaq'}">
            <b-button variant="primary">
              <img src="@/assets/create-new.svg" class="mr-2" alt />Create New FAQ
            </b-button>
          </router-link>
        </b-col>
      </b-row>
      <b-row>
        <br />
      </b-row>
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <!-- Main table element -->
      <b-table
        v-else
        responsive="sm"
        show-empty
        hover
        :busy="loading"
        :items="items"
        :fields="faq"
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
        <template slot="answer.id" slot-scope="row">
          <div v-html="row.value"></div>
        </template>
        <template slot="action" slot-scope="{value,item}">
          <router-link :to="{name: 'editFaq', params: {id: item.id}}" class="text-dark">
            <img src="@/assets/ic-edit.svg" class="mr-2" alt />
          </router-link>
          <b-link class="text-dark" @click="del(item.id)">
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

      <b-row class="mx-auto">
        <b-col md="4" class="mx-auto px-0">Total entries {{rows}}</b-col>
        <b-col md="4" class="mx-auto"></b-col>
        <b-col md="4" align="right" class="px-0">
          <b-pagination
            align="right"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            class="my-0"
          ></b-pagination>
        </b-col>
      </b-row>
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
      faq: [
        {
          key: "category",
          label: "Category",
          sortable: true,
          class: "text-center"
        },
        {
          key: "title",
          label: "FAQ Name",
          sortable: true,
          class: "text-center"
        },
        {
          key: "question.id",
          label: "Question (English)",
          sortable: true,
          class: "text-center"
        },
        {
          key: "answer.id",
          label: "Answer (English)",
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
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    },
    rows() {
      return this.items.length;
    }
  },
  created() {
    this.totalRows = this.items.length;
    this.$store.watch(
      state => state.FaqModule.faq,
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
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
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
          this.$store.dispatch("FaqModule/delFaq", id);
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  }
};
</script>

<style>
</style>

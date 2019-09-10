<template>
  <div>
    <div align="left">
      <br />
      <b-row>
        <b-col>
          <h5 class="h5 mb-1 text-primary">
            <b>Job Vacancy</b>
          </h5>
        </b-col>
        <b-col class="text-right">
          <router-link :to="{name: 'createJobVacancy'}">
            <b-button variant="primary">
              <img src="@/assets/create-new.svg" alt />Create New
            </b-button>
          </router-link>
        </b-col>
      </b-row>
    </div>
    <div class="text-left">
      <br />
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
        :fields="fields"
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
        <template slot="status" slot-scope="row">
          <p class="text-success" v-if="row.value == 'Active'">
              <i class="fas fa-check"></i>
              {{row.value}}
            </p>
            <p class="text-gray-400" v-else-if="row.value == 'Inactive'">
              <i class="fas fa-check"></i>
              {{row.value}}
            </p>
        </template>
        <template slot="action" slot-scope="{ value, item }">
          <router-link :to="{name: 'editJobVacancy', params: {id: item.job_id}}" class="text-dark">
            <img src="@/assets/ic-edit.svg" alt />
          </router-link>
          <router-link :to="{name: ''}" class="text-dark">
            <img src="@/assets/rectangle.svg" alt />
          </router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vuex: [],
      items: [],
      fields: [
        {
          key: "type",
          label: "Type",
          sortable: true,
          class: "text-center"
        },
        {
          key: "job_title",
          label: "Job Name",
          sortable: true,
          class: "text-center"
        },
        {
          key: "department",
          label: "Department",
          sortable: true,
          class: "text-center"
        },
        {
          key: "location",
          label: "Location",
          sortable: true,
          class: "text-center"
        },
        {
          key: "experience",
          label: "Experience",
          sortable: true,
          class: "text-center"
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          class: "text-center",
          tdClass: "status"
        },
        { key: "action", label: "Action", class: "text-center" }
      ],
      loading: true,
      errored: false,
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
  methods: {
    log: function(e) {
      console.log(e.currentTarget);
      console.log(e);
    }
  },
  beforeCreate() {
    // this.$store.dispatch("getDonatur");
    this.$store.dispatch("jobVacancyModule/getJobvacancy", null, {
      root: true
    });
  },
  created() {
    this.$store.watch(
      state => state.jobVacancyModule.jobvacancy,
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
  mounted() {},
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style scoped>
.status {
  max-width: 10px;
}
</style>

<template>
  <div>
    <div align="left" class="mt-5">
      <h5 class="h5 mb-3 text-primary font-weight-bold">Headlines</h5>
      <b-row>
        <b-col>
          <b-input-group>
            <b-input-group-text class="bg-white border-right-0" slot="prepend">
              <img src="@/assets/filter.svg" alt />
            </b-input-group-text>
            <b-dropdown
              text="Filter Data"
              variant="light"
              toggle-class="bg-white border-secondary text-primary border-left-0 pl-0"
              slot="append"
            >
              <b-dropdown-item>Action A</b-dropdown-item>
              <b-dropdown-item>Action B</b-dropdown-item>
            </b-dropdown>
          </b-input-group>
        </b-col>
        <b-col class="text-right">
          <router-link :to="{name: 'createHeadline'}">
            <b-button variant="primary">
              <img src="@/assets/create-new.svg" alt class="mr-2" /> Create New
            </b-button>
          </router-link>
        </b-col>
      </b-row>
    </div>
    <br />
    <div class="text-left">
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
        <b-col md="3" class="my-1" align="right"></b-col>
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
        <template slot="image">
          <b-img v-bind="mainProps" rounded alt="Rounded image"></b-img>
        </template>

        <template slot="action" slot-scope="{ value, item }">
          <router-link :to="{name: 'editHeadline', params: {id: item.no}}" class="text-dark">
            <img class="mr-2" src="@/assets/ic-edit.svg" alt />
          </router-link>
          <b-link class="text-dark">
            <img src="@/assets/rectangle.svg" alt />
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
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 50,
        height: 50,
        class: "m1"
      },
      loading: true,
      errored: false,
      items: [],
      fields: [
        {
          key: "name",
          label: "Created Date",
          sortable: true,
          class: "text-center"
        },
        {
          key: "category",
          label: "Type",
          sortable: true,
          class: "text-center"
        },
        {
          key: "title.id",
          label: "Headline",
          sortable: true,
          class: "text-center"
        },
        {
          key: "image",
          label: "Image",
          sortable: true,
          class: "text-center"
        },
        {
          key: "stardate",
          label: "Star Date",
          sortable: true,
          class: "text-center"
        },
        {
          key: "enddate",
          label: "End Date",
          sortable: true,
          class: "text-center"
        },
        {
          key: "status",
          label: "Status",
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
  beforeCreate() {
    // this.$store.dispatch("getDonatur");
    this.$store.dispatch("HeadlineModule/getHeadlines", null, { root: true });
  },
  created() {
    this.$store.watch(
      state => state.HeadlineModule.headlines,
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
    this.totalRows = this.items.length;
  },
  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style>
</style>

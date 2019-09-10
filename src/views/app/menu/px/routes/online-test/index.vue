<template>
  <div>
    <br />
    <b-row>
      <b-col class="text-left">
        <h5 class="h5 text-primary">
          <b>Online Test</b>
        </h5>
      </b-col>
      <b-col class="text-right">
        <router-link :to="{name: 'createOnlineTest'}">
          <b-button variant="primary">
            <img class="mr-2" src="@/assets/create-new.svg" alt />Create New
          </b-button>
        </router-link>
      </b-col>
    </b-row>
    <div class="text-left">
      <br />
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>
      <b-table
        v-else
        :busy="loading"
        responsive
        show-empty
        hover
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
        <template slot="action" slot-scope="{ value, item }">
          <router-link :to="{name: 'editOnlineTest', params: {id: item.id}}" class="text-dark">
            <img class="mr-2" src="@/assets/ic-edit.svg" alt />
          </router-link>
          <b-link class="text-dark">
            <img class="mr-2" src="@/assets/rectangle.svg" alt />
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
      items: [
        {
          created_date: "21/12/2019",
          title: "Happinest Hero Test",
          duration: "15 Minutes",
          total_question: "15",
          auto_grade: "Yes"
        },
        {
          created_date: "21/12/2019",
          title: "Happinest Hero Test",
          duration: "15 Minutes",
          total_question: "15",
          auto_grade: "Yes"
        },
        {
          created_date: "21/12/2019",
          title: "Happinest Hero Test",
          duration: "15 Minutes",
          total_question: "15",
          auto_grade: "Yes"
        }
      ],
      fields: [
        {
          key: "created_date",
          label: "Created Date",
          sortable: true,
          class: "text-left"
        },
        {
          key: "title",
          label: "Test Name",
          sortable: true,
          class: "text-left"
        },
        {
          key: "duration",
          label: "Duration",
          sortable: true,
          class: "text-center"
        },
        {
          key: "total_question",
          label: "Questions",
          sortable: true,
          class: "text-left"
        },
        {
          key: "auto_grade",
          label: "Auto Grade",
          sortable: true,
          class: "text-left"
        },
        { key: "action", label: "Action", class: "text-left" }
      ],
      loading: false,
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
  beforeCreate() {
    // this.$store.dispatch("getDonatur");
    // this.$store.dispatch("onlineTestModule/getOnlineTest", null, {
    //   root: true
    // });
  },
  created() {
    // this.$store.watch(
    //   state => state.onlineTestModule.onlinetest,
    //   (newValue, oldValue) => {
    //     this.items = newValue;
    //     // Do whatever makes sense now
    //     if (this.items.length === 0) {
    //       this.loading = true;
    //     } else {
    //       this.loading = false;
    //     }
    //   }
    // );
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

<style>
</style>

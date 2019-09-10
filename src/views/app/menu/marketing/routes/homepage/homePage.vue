<template>
  <div>
    <div align="left">
      <br />
      <b-row>
        <b-col>
          <h5 class="h5 text-primary font-weight-bold">Homepage Banners</h5>
        </b-col>
        <b-col class="text-right">
          <router-link :to="{name: 'createHomePage'}">
            <b-button variant="primary">
              <img src="@/assets/create-new.svg" class="mr-2" alt />Create New
            </b-button>
          </router-link>
        </b-col>
      </b-row>
    </div>
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
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
        </template>
        <template slot="action" slot-scope="{ value, item }">
          <router-link :to="{name: 'editHomePage', params: {id: item.id}}" class="text-dark">
            <img src="@/assets/ic-edit.svg" class="mr-2" alt />
          </router-link>
          <b-link class="text-dark">
            <img src="@/assets/rectangle.svg" class="mr-2" alt />
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
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 50,
        height: 50,
        class: "m1"
      },
      loading: false,
      errored: false,
      items: [
        {
          name: "Jangan Pakai Paxel",
          heading: "Jangan Pakai Paxel",
          sub_heading: "Jangan Pakai Paxel",
          image: "tess",
          status: "active"
        },
        {
          name: "Jangan Pakai Paxel",
          heading: "Jangan Pakai Paxel",
          sub_heading: "Jangan Pakai Paxel",
          image: "tess",
          status: "active"
        },
        {
          name: "Jangan Pakai Paxel",
          heading: "Jangan Pakai Paxel",
          sub_heading: "Jangan Pakai Paxel",
          image: "tess",
          status: "active"
        }
      ],
      fields: [
        {
          key: "name",
          label: "Name",
          sortable: true,
          class: "text-center"
        },
        {
          key: "heading",
          label: "Heading",
          sortable: true,
          class: "text-center"
        },
        {
          key: "sub_heading",
          label: "Sub Heading",
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
  beforeCreate() {
    // this.$store.dispatch("getDonatur");
    // this.$store.dispatch("homepageModule/getHomepage", null, { root: true });
  },
  created() {
    // this.$store.watch(
    //   state => state.homepageModule.homepage,
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

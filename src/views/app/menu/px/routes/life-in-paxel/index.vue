<template>
  <div>
    <div align="left">
      <br />
      <b-row>
        <b-col>
          <h5 class="text-primary">
            <b>Life in Paxel Stories</b>
          </h5>
          <br />
        </b-col>
        <b-col class="text-right">
          <router-link :to="{name: 'createLifeInPaxel'}">
            <b-button variant="primary">
              <img class="mr-2" src="@/assets/create-new.svg" alt />Create New
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

        <template slot="imagevideo">
          <b-img v-bind="mainProps" rounded="circle" alt="Circle image"></b-img>
        </template>
        <template slot="action" slot-scope="{ value, item }">
          <router-link :to="{name: 'editLifeInPaxel', params: {id: item.id}}" class="text-dark">
            <img class="mr-2" src="@/assets/ic-edit.svg" alt />
          </router-link>
          <b-link @click="del(item.id)" class="text-dark">
            <img class="mr-2" src="@/assets/rectangle.svg" alt />
          </b-link>
          <router-link :to="{}" class="text-primary">
            <i class="fas fa-arrow-up mr-2"></i>
          </router-link>
          <router-link :to="{}" class="text-primary">
            <i class="fas fa-arrow-down"></i>
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
      mainProps: {
        blank: true,
        blankColor: "#777",
        width: 50,
        height: 50,
        class: "m1"
      },
      loading: true,
      errored: false,
      vuex: [],
      items: [],
      fields: [
        {
          key: "no",
          label: "No",
          sortable: true,
          class: "text-center"
        },
        {
          key: "title.eng",
          label: "Title",
          sortable: true,
          class: "text-center"
        },
        {
          key: "contentdes.eng",
          label: "Content",
          sortable: true,
          class: "text-center"
        },
        {
          key: "imagevideo",
          label: "Media",
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
    this.$store.dispatch("lifeInPaxelModule/getLifeInPaxels", null, {
      root: true
    });
  },
  created() {
    this.$store.watch(
      state => state.lifeInPaxelModule.lifeinpaxel,
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
          this.$store.dispatch("lifeInPaxelModule/delLifeInPaxel", id);
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    }
  }
};
</script>

<style>
</style>

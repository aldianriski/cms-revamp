<template>
  <div>
    <div align="left">
      <h5 class="h5 mb-1 text-gray-800 font-weight-bold">Antarkan Kebaikan</h5>
      <p class="mb-4">Paxel | Antarkan Kebaikan | Donatur</p>
    </div>
    <b-row>
      <div class="col-md-2 mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold mb-1">Total Donatur</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col md="4" align="left">
                    <h4 class="mb-0">
                      <b class="text-primary">
                        <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
                        <p v-else>{{items.total_donatur}}</p>-->
                      </b>
                    </h4>
                  </b-col>
                  <b-col class="mt-1" align="right">
                    <font size="2">This Mount</font>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-row>
    <b-card class="text-left">
      <h5 class="font-weight-bold">Donator List</h5>
      <b-row>
        <b-col md="3" class="my-1">
          <b-form-group class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Search"></b-form-input>
              <b-input-group-append>
                <b-button variant="primary" :disabled="!filter" @click="filter = ''">
                  <i class="fas fa-search"></i>
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="2" class="text-center mt-2 px-0">
          <b-row>
            <b-col md="4" class="px-0">
              <label for="from">From:</label>
            </b-col>
            <b-col md="8">
              <b-form-input size="sm" type="date" id="from" name="from"></b-form-input>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="2" class="text-center mt-2 px-0">
          <b-row>
            <b-col md="4" class="pr-0">
              <label for="to">To:</label>
            </b-col>
            <b-col md="8">
              <b-form-input size="sm" type="date" id="to" name="to"></b-form-input>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="2" class="my-1 mx-0" align="right">
          <b-form-group label-cols-sm="6" label="Show" class="mb-0 px-0">
            <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
          </b-form-group>
        </b-col>
        <b-col></b-col>
        <b-col md="2" class="my-1" align="right">
          <b-button variant="primary">
            <i class="fas fa-file-export"></i> Export To CSV
          </b-button>
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
        responsive
        show-empty
        hover
        stacked="md"
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
      >
        <div slot="table-busy" class="text-center text-primary my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
        <template slot="status" slot-scope="row">
          <b-button block variant="warning" v-if="row.value == 'New'">{{row.value}}</b-button>
          <b-button block variant="danger" v-else-if="row.value == 'Rejected'">{{row.value}}</b-button>
          <b-button block variant="info" v-else-if="row.value == 'Interview'">{{row.value}}</b-button>
          <b-button block variant="danger" v-else-if="row.value == 'Failed'">{{row.value}}</b-button>
          <b-button block variant="success" v-else-if="row.value == 'Passed'">{{row.value}}</b-button>
          <b-button block variant="info" v-else-if="row.value == 'Offering'">{{row.value}}</b-button>
          <b-button block variant="danger" v-else-if="row.value == 'Decline'">{{row.value}}</b-button>
          <b-button block variant="primary" v-else-if="row.value == 'Joined'">{{row.value}}</b-button>
        </template>

        <template slot="action">
          <b-link @click="modalShow = !modalShow" class="text-dark">
            <i class="fas fa-eye"></i>
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
    </b-card>
    <b-modal v-model="modalShow" title-html="<b>Donator</b>" title-tag="h4" size="lg">
      <div v-for="item in items" :key="item">
        <b-row v-for="(value, name, index) in item" :key="index">
          <b-col md="3">
            <p>{{name}}</p>
          </b-col>
          <b-col md="9">
            <b>{{value}}</b>
          </b-col>
        </b-row>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      fields: [
        {
          key: "name",
          label: "Name",
          sortable: true,
          class: "text-center"
        },
        {
          key: "phone_number",
          label: "Phone Number",
          sortable: true,
          class: "text-center"
        },
        {
          key: "email",
          label: "Email Address",
          sortable: true,
          class: "text-center"
        },
        {
          key: "shipment_address",
          label: "Shipment Address.",
          sortable: true,
          class: "text-center"
        },
        {
          key: "detail",
          label: "Detail",
          sortable: true,
          sortDirection: "desc",
          class: "text-center"
        },
        { key: "action", label: "Action", class: "text-center" }
      ],
      loading: true,
      loading1: true,
      errored: false,
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      modalShow: false,
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
    this.$store.dispatch("AntarkanModule/getDonatur", null, { root: true });
  },
  created() {
    this.$store.watch(
      state => state.AntarkanModule.donatur,
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
    // Set the initial number of items
    this.totalRows = this.items.length;
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
    }
  }
};
</script>

<style>
</style>

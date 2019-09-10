<template>
  <div>
    <b-row align="left">
      <b-col md="8" class="mt-2">
        <p class="mb-1 font-weight-bold">
          <font class="h4 text-primary">Customer Empathy</font>
          &nbsp;&nbsp;&nbsp;
          <font class="h5 text-warning border rounded p-1">{{tanggal}}</font>
        </p>
      </b-col>
      <b-col class="text-right">
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
          <b-col>
            <download-csv
              class="btn btn-primary"
              :data="items.tickets"
              name="tickets.csv"
            >Export to CSV</download-csv>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <br />
    <b-card body-class="py-0 px-0">
      <b-row>
        <b-col md="4" class="border-right text-left pl-5 py-5">
          <b-row>
            <b-col>
              <h5 class>Total Tickets</h5>
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <h4 class="mb-0" v-else>{{items.total_ticket}}</h4>
            </b-col>
            <b-col>
              <b-input-group>
                <b-input-group-text class="bg-white border-right-0" slot="prepend">
                  <img src="@/assets/ic-calendar-copy-30.svg" alt />
                </b-input-group-text>
                <b-dropdown
                  text="Bulan Ini"
                  variant="light"
                  toggle-class="bg-white border-secondary text-primary border-left-0 pl-0"
                  slot="append"
                >
                  <b-dropdown-item>Action A</b-dropdown-item>
                  <b-dropdown-item>Action B</b-dropdown-item>
                </b-dropdown>
              </b-input-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="border-right text-left pl-4 py-5">
          <p class="text-warning font-weight-bold mb-0">Complaint</p>
          <b-row>
            <b-col class="font-weight-bold">
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <p v-else>{{items.total_complaint.total}}</p>
            </b-col>
            <b-col>
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <p v-else>{{items.total_complaint.percentage.toFixed(2)}}%</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="border-right text-left pl-4 py-5">
          <p class="text-danger font-weight-bold mb-0">Claim</p>
          <b-row>
            <b-col class="font-weight-bold">
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <p v-else>{{items.total_claim.total}}</p>
            </b-col>
            <b-col>
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <p v-else>{{items.total_claim.percentage.toFixed(2)}}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="border-right text-left pl-4 py-5">
          <p class="text-info font-weight-bold mb-0">Information</p>
          <b-row>
            <b-col class="font-weight-bold">
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <p v-else>{{items.total_information.total}}</p>
            </b-col>
            <b-col>
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <p v-else>{{items.total_information.percentage.toFixed(2)}}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="text-left pl-4 py-5">
          <p class="text-primary font-weight-bold mb-0">Feedback</p>
          <b-row>
            <b-col class="font-weight-bold">
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <p v-else>{{items.total_feedback.total}}</p>
            </b-col>
            <b-col>
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <p v-else>{{items.total_feedback.percentage.toFixed(2)}}%</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
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
        :busy="loading"
        hover
        :items="items.tickets"
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
        <template slot="time_issued" slot-scope="row">{{row.value.substring(0,10)}}</template>
        <template slot="message" slot-scope="row">{{row.value.substring(0,20)}}....</template>
        <template slot="type" slot-scope="row">
          <p
            class="text-warning"
            v-if="row.value == 'complaint'"
          >{{row.value[0].toUpperCase() + row.value.slice(1)}}</p>
          <p
            class="text-danger"
            v-else-if="row.value == 'claim'"
          >{{row.value[0].toUpperCase() + row.value.slice(1)}}</p>
          <p
            class="text-info"
            v-else-if="row.value == 'information'"
          >{{row.value[0].toUpperCase() + row.value.slice(1)}}</p>
          <p
            class="text-primary"
            v-else-if="row.value == 'feedback'"
          >{{row.value[0].toUpperCase() + row.value.slice(1)}}</p>
        </template>
        <template slot="status" slot-scope="row">
          <p class="text-warning" v-if="row.value == 'New'">{{row.value}}</p>
          <p class="text-danger" v-else-if="row.value == 'Rejected'">{{row.value}}</p>
          <p class="text-info" v-else-if="row.value == 'On Review'">{{row.value}}</p>
          <p class="text-primary" v-else-if="row.value == 'Resolved'">{{row.value}}</p>
        </template>
        <template slot="action" slot-scope="{ value, item }">
          <router-link
            v-if="value == 'claim'"
            :to="{name: 'cxDetailClaim', params: {id: item.id}}"
            class="text-primary"
          >
            <i class="fas fa-eye"></i>
          </router-link>
          <router-link
            v-else-if="value == 'information'"
            :to="{name: 'cxDetailInformation', params: {id: item.id}}"
            class="text-primary"
          >
            <i class="fas fa-eye"></i>
          </router-link>
          <router-link
            v-else-if="value == 'feedback'"
            :to="{name: 'cxDetailFeedback', params: {id: item.id}}"
            class="text-primary"
          >
            <i class="fas fa-eye"></i>
          </router-link>
          <router-link
            v-else-if="value == 'complaint'"
            :to="{name: 'cxDetailComplaint', params: {id: item.id}}"
            class="text-primary"
          >
            <i class="fas fa-eye"></i>
          </router-link>
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
      fields: [
        {
          key: "ticket_no",
          label: "Ticket No",
          sortable: true,
          class: "text-center"
        },
        {
          key: "type",
          label: "Type",
          sortable: true,
          class: "text-center"
        },
        {
          key: "time_issued",
          label: "Time Issued",
          sortable: true,
          class: "text-center"
        },
        {
          key: "shipment_code",
          label: "Shipment Code.",
          sortable: true,
          class: "text-center"
        },
        {
          key: "name",
          label: "Name",
          sortable: true,
          sortDirection: "desc",
          class: "text-center"
        },
        {
          key: "contact",
          label: "Contact",
          sortable: true,
          sortDirection: "desc",
          class: "text-center"
        },
        {
          key: "message",
          label: "Message",
          sortable: true,
          sortDirection: "desc",
          class: "text-center"
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          sortDirection: "desc",
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
      tanggal: new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/"),
      routename: null,
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
    this.$store.dispatch("cxModule/getCxReports", null, { root: true });
  },
  created() {
    // Set the initial number of items
    this.totalRows = this.items.length;
    this.$store.watch(
      state => state.cxModule.report,
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
    date() {
      var currentDateWithFormat = "";
      this.tanggal = currentDateWithFormat;
    },
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

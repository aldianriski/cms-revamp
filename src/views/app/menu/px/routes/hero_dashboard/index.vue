<template>
  <div>
    <!-- Content Row -->
    <b-row align="left">
      <b-col md="8" class="mt-2">
        <p class="mb-1 font-weight-bold">
          <font class="h4 text-primary">Hero Dasboard</font>
          &nbsp;&nbsp;&nbsp;
          <font
            class="h5 ml-5 text-warning border rounded p-1"
          >{{tanggal}}</font>
        </p>
      </b-col>
      <b-col class="text-right">
        <b-row>
          <b-col></b-col>
          <b-col>
            <b-button variant="primary">
              <i class="fas fa-file-export"></i> Export To CSV
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <br />
    <div class="row">
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body" id="v-step-1">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Total Hero</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">1200</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-users fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body" id="v-step-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Hero New</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">120</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-user-plus fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-danger shadow h-100 py-2">
          <div class="card-body" id="v-step-3">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Hero Elit</div>
                <div class="row no-gutters align-items-center">
                  <div class="col">
                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">10</div>
                  </div>
                  <!-- <div class="col">
                    <div class="progress progress-sm mr-2">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>-->
                </div>
              </div>
              <div class="col-auto">
                <i class="fas fa-user-tie fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pending Requests Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-warning shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Waiting Hero</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">3</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-user-clock fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          tgl_melamar: "09-09-2019",
          name: "TES",
          applied_position: "TES",
          penempatan: "TES",
          penempatan_alt: "TES",
          no_tlp: "TES",
          status: "Baru"
        },
        {
          tgl_melamar: "09-09-2019",
          name: "TES",
          applied_position: "TES",
          penempatan: "TES",
          penempatan_alt: "TES",
          no_tlp: "TES",
          status: "Ditolak"
        },
        {
          tgl_melamar: "09-09-2019",
          name: "TES",
          applied_position: "TES",
          penempatan: "TES",
          penempatan_alt: "TES",
          no_tlp: "TES",
          status: "Buffer"
        },
        {
          tgl_melamar: "09-09-2019",
          name: "TES",
          applied_position: "TES",
          penempatan: "TES",
          penempatan_alt: "TES",
          no_tlp: "TES",
          status: "Diterima"
        }
      ],
      loading: false,
      errored: false,
      tanggal: new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/"),
      fields: [
        {
          key: "tgl_melamar",
          label: "Tgl Melamar",
          sortable: true,
          class: "text-center"
        },
        {
          key: "name",
          label: "Name",
          sortable: true,
          class: "text-center"
        },
        {
          key: "applied_position",
          label: "Usia",
          sortable: true,
          class: "text-center"
        },
        {
          key: "penempatan",
          label: "Penempatan",
          sortable: true,
          class: "text-center"
        },
        {
          key: "penempatan_alt",
          label: "Penempatan Alt.",
          sortable: true,
          class: "text-center"
        },
        {
          key: "no_tlp",
          label: "No Tlp",
          sortable: true,
          class: "text-center"
        },
        {
          key: "status",
          label: "Status",
          sortable: true,
          sortDirection: "desc",
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
    // this.$store.dispatch("pxReportModule/getPxReport", null, { root: true });
  },
  created() {
    // this.$store.watch(
    //   state => state.pxReportModule.pxreport,
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

<template>
  <div>
    <!-- Content Row -->
    <b-row align="left">
      <b-col md="8" class="mt-2">
        <p class="mb-1 font-weight-bold">
          <font class="h4 text-primary">Paxelian Candidate</font>
          &nbsp;&nbsp;&nbsp;
          <font
            class="h5 ml-3 text-warning border rounded p-1"
          >{{tanggal}}</font>
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
              :data="items.applicant"
              name="paxelian.csv"
            >Export to CSV</download-csv>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <br />

    <!-- <div class="row"> -->
    <!-- Earnings (Monthly) Card Example -->
    <!-- <div class="col-xl-2 mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold mb-1">Total Applicant</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col md="4" align="left">
                    <h4 class="mb-0">
    <b class="text-primary">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_aplicant}}</p>-->
    <!-- </b>
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
    </div>-->
    <!-- Earnings (Monthly) Card Example -->
    <!-- <div class="col mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-warning mb-1">New</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col md="6" align="left" class="mr-0 pr-0">
                    <h4>
    <b class="text-warning">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_new.total}}</p>-->
    <!-- </b>
                    </h4>
                  </b-col>
                  <b-col md="6" class="mt-1 ml-0 pl-0" align="right">
    <font size="1">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_new.percentage}}</p>-->
    <!-- </font>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
    </div>-->

    <!-- Earnings (Monthly) Card Example -->
    <!-- <div class="col mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-danger mb-1">Rejected</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col md="6" align="left" class="mr-0 pr-0">
                    <h4>
    <b class="text-danger">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_rejected.total}}</p>-->
    <!-- </b>
                    </h4>
                  </b-col>
                  <b-col class="mt-1 ml-0 pl-0" align="right">
    <font size="1">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_rejected.percentage}}</p>-->
    <!-- </font>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
    </div>-->

    <!-- Pending Requests Card Example -->
    <!-- <div class="col mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-info mb-1">Interview</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col md="6" align="left" class="mr-0 pr-0">
                    <h4>
    <b class="text-info" id="total_interview">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_interview.total}}</p>-->
    <!-- </b>
                    </h4>
                  </b-col>
                  <b-col class="mt-1 ml-0 pl-0" align="right">
    <font size="1">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_interview.percentage}}</p>-->
    <!-- </font>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-danger mb-1">Failed</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col md="6" align="left" class="mr-0 pr-0">
                    <h4>
    <b class="text-danger">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_failed.total}}</p>-->
    <!-- </b>
                    </h4>
                  </b-col>
                  <b-col class="mt-1 ml-0 pl-0" align="right">
    <font size="1">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_failed.percentage}}</p>-->
    <!-- </font>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success mb-1">Passed</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col md="6" align="left" class="mr-0 pr-0">
                    <h4>
    <b class="text-success">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_passed.total}}</p>-->
    <!-- </b>
                    </h4>
                  </b-col>
                  <b-col class="mt-1 ml-0 pl-0" align="right">
    <font size="1">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_passed.percentage}}</p>-->
    <!-- </font>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-info mb-1">Offering</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col md="6" align="left" class="mr-0 pr-0">
                    <h4>
    <b class="text-info">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_offering.total}}</p>-->
    <!-- </b>
                    </h4>
                  </b-col>
                  <b-col class="mt-1 ml-0 pl-0" align="right">
    <font size="1">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_offering.percentage}}</p>-->
    <!-- </font>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-danger mb-1">Decline</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col class="pr-0 mr-0" md="6" align="left">
                    <h4>
    <b class="text-danger">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_decline.total}}</p>-->
    <!-- </b>
                    </h4>
                  </b-col>
                  <b-col class="mt-1 ml-0 pl-0" align="right">
    <font size="1">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_decline.percentage}}</p>-->
    <!-- </font>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col mb-4 pr-0">
        <div class="card shadow h-100 py-2">
          <div class="card-body pb-0 pt-1 px-2">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary mb-1">Joined</div>
                <hr class="my-1" />
                <b-row class="mb-0">
                  <b-col md="6" align="left" class="mr-0 pr-0">
                    <h4>
    <b class="text-primary">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_joined.total}}</p>-->
    <!-- </b>
                    </h4>
                  </b-col>
                  <b-col class="mt-1 ml-0 pl-0" align="right">
    <font size="1">-->
    <!-- <b-spinner v-if="loading" label="Loading..."></b-spinner>
    <p v-else>{{items.total_joined.percentage}}</p>-->
    <!-- </font>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <b-card body-class="py-0 px-0">
      <b-row>
        <b-col md="4" class="border-right text-left pl-5 py-5">
          <b-row class="mt-5">
            <b-col class="mt-1">
              <h5 class>Total Applicant</h5>
              <b-spinner v-if="loading" label="Loading..."></b-spinner>
              <h4 class="mb-0" v-else>{{items.total_applicant}}</h4>
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
        <b-col>
          <b-row>
            <b-col class="border-right border-bottom text-left pl-4 py-5">
              <p class="text-warning font-weight-bold mb-0">New</p>
              <b-row>
                <b-col class="font-weight-bold">
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_new.total}}</p>
                </b-col>
                <b-col>
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_new.percentage.toFixed(2)}}%</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="border-right border-bottom text-left pl-4 py-5">
              <p class="text-danger font-weight-bold mb-0">Rejected</p>
              <b-row>
                <b-col class="font-weight-bold">
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_rejected.total}}</p>
                </b-col>
                <b-col>
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_rejected.percentage.toFixed(2)}}</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="border-right border-bottom text-left pl-4 py-5">
              <p class="text-info font-weight-bold mb-0">Interview</p>
              <b-row>
                <b-col class="font-weight-bold">
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_interview.total}}</p>
                </b-col>
                <b-col>
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_interview.percentage.toFixed(2)}}</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="text-left border-bottom pl-4 py-5">
              <p class="text-danger font-weight-bold mb-0">Failed</p>
              <b-row>
                <b-col class="font-weight-bold">
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_failed.total}}</p>
                </b-col>
                <b-col>
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_failed.percentage.toFixed(2)}}%</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="border-right text-left pl-4 py-5">
              <p class="text-success font-weight-bold mb-0">Passed</p>
              <b-row>
                <b-col class="font-weight-bold">
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_passed.total}}</p>
                </b-col>
                <b-col>
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_passed.percentage.toFixed(2)}}%</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="border-right text-left pl-4 py-5">
              <p class="text-info font-weight-bold mb-0">Offering</p>
              <b-row>
                <b-col class="font-weight-bold">
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_offering.total}}</p>
                </b-col>
                <b-col>
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_offering.percentage.toFixed(2)}}</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="border-right text-left pl-4 py-5">
              <p class="text-danger font-weight-bold mb-0">Decline</p>
              <b-row>
                <b-col class="font-weight-bold">
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_decline.total}}</p>
                </b-col>
                <b-col>
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_decline.percentage.toFixed(2)}}</p>
                </b-col>
              </b-row>
            </b-col>
            <b-col class="text-left pl-4 py-5">
              <p class="text-primary font-weight-bold mb-0">Hired</p>
              <b-row>
                <b-col class="font-weight-bold">
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_hired.total}}</p>
                </b-col>
                <b-col>
                  <b-spinner v-if="loading" label="Loading..."></b-spinner>
                  <p v-else>{{items.total_hired.percentage.toFixed(2)}}%</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
    <div class="text-left">
      <b-row class="mt-4">
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
        :busy="loading"
        responsive
        show-empty
        hover
        :items="items.applicant"
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
        <template slot="name" slot-scope="row">
          <p class="text-primary">{{row.value}}</p>
        </template>
        <template slot="status" slot-scope="row">
          <p class="text-warning" v-if="row.value == 'New'">{{row.value}}</p>
          <p class="text-danger" v-else-if="row.value == 'Rejected'">{{row.value}}</p>
          <p class="text-info" v-else-if="row.value == 'Interview'">{{row.value}}</p>
          <p class="text-danger" v-else-if="row.value == 'Failed'">{{row.value}}</p>
          <p class="text-success" v-else-if="row.value == 'Passed'">{{row.value}}</p>
          <p class="text-info" v-else-if="row.value == 'Offering'">{{row.value}}</p>
          <p class="text-danger" v-else-if="row.value == 'Decline'">{{row.value}}</p>
          <p class="text-primary" v-else-if="row.value == 'Joined'">{{row.value}}</p>
        </template>

        <template slot="action">
          <!-- <router-link :to="{}" class="text-primary">
            <i class="fas fa-file-download mr-2"></i>
          </router-link>-->
          <router-link :to="{name: 'detailCandidate'}" class="text-primary">
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
      items: {
        total_applicant: 80,
        total_new: {
          total: 10,
          percentage: 10.5555
        },
        total_rejected: {
          total: 10,
          percentage: 10.55555
        },
        total_interview: {
          total: 10,
          percentage: 10.55555
        },
        total_failed: {
          total: 10,
          percentage: 10.55555
        },
        total_passed: {
          total: 10,
          percentage: 10.55555
        },
        total_offering: {
          total: 10,
          percentage: 10.55555
        },
        total_decline: {
          total: 10,
          percentage: 10.55555
        },
        total_hired: {
          total: 10,
          percentage: 10.55555
        },
        applicant: [
          {
            apply_date: "06/09/2019",
            name: "EBIE",
            applied_position: "IT LEAD",
            work_exp: "SUGEH",
            status: "New",
            email: "EBIENIH@gmain.co.id",
            phone: "ADADEH"
          }
        ]
      },
      loading: false,
      errored: false,
      tanggal: new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/"),
      fields: [
        {
          key: "apply_date",
          label: "Apply Date",
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
          label: "Applied Position",
          sortable: true,
          class: "text-center"
        },
        {
          key: "work_exp",
          label: "Work Exp.",
          sortable: true,
          class: "text-center"
        },
        {
          key: "email",
          label: "Email",
          sortable: true,
          sortDirection: "desc",
          class: "text-center"
        },
        {
          key: "phone",
          label: "Phone Number",
          sortable: true,
          sortDirection: "desc",
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

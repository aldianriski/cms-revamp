<template>
  <div>
    <!-- Page Heading -->
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 font-weight-bold" id="v-step-0">Dashboard</h1>
      <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
        <i class="fas fa-download fa-sm text-white-50" id="v-step-0-1"></i> Generate Report
      </a>
    </div>
    <br />
    <!-- Content Row -->
    <div class="row">
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-success shadow h-100 py-2">
          <div class="card-body" id="v-step-1">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Total Revenue</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">Rp. 215.000</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
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
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >All Shipment Today</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">80.000</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-shipping-fast fa-2x text-gray-300"></i>
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
                <div
                  class="text-xs font-weight-bold text-danger text-uppercase mb-1"
                >Bukalapak Shipment Today</div>
                <div class="row no-gutters align-items-center">
                  <div class="col">
                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">200.000</div>
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
                <i class="fas fa-shopping-bag fa-2x text-gray-300"></i>
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
                <div
                  class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                >Pickup Reminder</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">20.000</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-user-clock fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Content Row -->
    <div class="row">
      <div id="overlay-back"></div>
      <div>
        <app-tour></app-tour>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import MyTour from "../../MyTour.vue";
export default {
  components: {
    appTour: MyTour
  },
  data() {
    return {
      datacollection: null,
      hover: false
    };
  },
  mounted: function() {},
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter", "value"])
  },
  methods: {
    ...mapActions(["increment", "decrement"]),
    updateValue(event) {
      this.$store.dispatch("updateValue", event.target.value);
    }
  }
};
</script>

<style scoped>
.small {
  max-width: 600px;
  margin: 150px auto;
}
.ganti {
  background: white;
  color: blue;
}
</style>
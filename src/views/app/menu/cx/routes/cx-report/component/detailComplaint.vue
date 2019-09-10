<template>
  <div>
    <div align="left">
      <h5 class="h5 mb-1 text-gray-800">Customer Empathy</h5>
      <p class="mb-4">Paxel | Customer Excellence | Tickets | Complaint</p>
    </div>
    <b-card class="text-left">
      <b-row>
        <b-col>
          <h6>
            <router-link :to="{name: 'cxReport'}">
              <i class="fas fa-arrow-left mr-1"></i>Back
            </router-link>
          </h6>
        </b-col>
      </b-row>
      <br />
      <div v-if="loading" class="d-flex justify-content-center mb-3">
        <b-spinner style="width: 3rem; height: 3rem;" label="Loading..."></b-spinner>
      </div>
      <b-row v-else>
        <b-col md="8">
          <b-row>
            <b-col class="text-left" md="6">
              <b>No. AWB:</b>
              <p>{{items.shipment_code}}</p>
              <br />
              <b>No. Telp:</b>
              <p>{{items.contact}}</p>
            </b-col>
            <b-col md="6">
              <b>Nama :</b>
              <p>{{items.name}}</p>
              <br />
              <b>Email :</b>
              <p>{{items.email}}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <br />
              <b>Pesan :</b>
              <p>{{items.message}}</p>
              <br />
              <b>Bukti Foto :</b>
              <b-card class="mt-3 mb-3">
                <card-body>
                  <b-row>
                    <b-col>
                      <i class="fas fa-file-image pr-3"></i>
                      <b>{{items.image}} .jpg</b>
                      <sup class="text-secondary pl-3 mr-5 pr-5">(2 Mb)</sup>
                    </b-col>
                    <b-col class="text-right" align="right">
                      <b-button v-b-modal.modal-image1 variant="primary" class="ml-5">Preview</b-button>
                    </b-col>
                  </b-row>
                </card-body>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4">
          <p>
            <b-button block variant="primary">
              <i class="fas fa-print"></i> Print Complaint
            </b-button>
          </p>
          <b-card bg-variant="light" class="text-left">
            <b-row>
              <b-col class="text-left" md="12">
                <b-form-group id="fieldset-1" label="Status" class="mb-0" label-for="input-1">
                  <b-form-select
                    v-model="items.status"
                    class="my-0"
                    :class="items.status === 'New' ? 'text-warning':'' || items.status === 'On Review' ? 'text-info':''|| items.status === 'Resolve' ? 'text-primary':''|| items.status === 'Rejected' ? 'text-danger':'' "
                    id="input-1"
                  >
                    <option value="New" class="text-warning">New</option>
                    <option value="On Review" class="text-info">On Review</option>
                    <option value="Resolve" class="text-primary">Resolve</option>
                    <option value="Rejected" class="text-danger">Rejected</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col md="8">
                <br />
                <b>Ticket No :</b>
                <p>{{items.ticket_no}}</p>
                <br />
                <b>Time Issued</b>
                <p>{{items.time_issued}}</p>
              </b-col>
              <b-col md="4" class="text-right">
                <br />
                <b>Type</b>
                <p
                  v-if="items.type == 'feedback'"
                  class="text-success font-weight-bold"
                >{{items.type}}</p>
                <p
                  v-if="items.type == 'complaint'"
                  class="text-warning font-weight-bold"
                >{{items.type}}</p>
                <p v-if="items.type == 'claim'" class="text-danger font-weight-bold">{{items.type}}</p>
                <p
                  v-if="items.type == 'information'"
                  class="text-info font-weight-bold"
                >{{items.type}}</p>
                <br />
              </b-col>
            </b-row>
          </b-card>
          <br />
          <p>
            <b-button block variant="primary">
              <i class="fas fa-save"></i> Save Change
            </b-button>
          </p>
          <br />
          <h4>Comments</h4>
          <b-button block variant="outline-primary" @click="commentShow = !commentShow">
            <i class="fas fa-plus"></i> Add Comment
          </b-button>
          <b-card
            bg-variant="light"
            v-for="item in items.comments"
            :key="item"
            class="text-left mt-4"
          >
            <b-row>
              <b-col>
                <b class="text-primary">{{item.username}}</b>
              </b-col>
              <b-col class="text-right">
                <i class="fas fa-times text-danger"></i>
              </b-col>
            </b-row>
            <p class="text-warning">{{item.create_at}}</p>
            <p>{{item.comment}}</p>
            <p v-if="item.status == 'Internal'" class="text-success font-weight-bold">Internal</p>
            <p v-else-if="item.status == 'Eksternal'" class="text-danger font-weight-bold">External</p>
          </b-card>
        </b-col>
        <b-col class="text-left ml-3 my-3" md="2"></b-col>
        <b-col class="my-3"></b-col>
      </b-row>
    </b-card>
    <b-modal id="modal-image1" size="xl" title="Image 1">
      <img
        src="https://s4.bukalapak.com/uploads/attachment/451051/paxel_banner_1.png"
        alt
        width="400px"
        height="200px"
      />
    </b-modal>
    <b-modal v-model="commentShow" title="New Comment">
      <b-form-group id="fieldset-1" class="text-danger" label="External" label-for="input-1">
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="New Comment...."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group id="fieldset-1" class="text-success" label="Internal" label-for="input-1">
        <b-form-textarea
          id="textarea"
          v-model="text"
          placeholder="New Comment...."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </b-modal>
    {{items}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      modalShow: false,
      commentShow: false,
      selected: null,
      loading: true
    };
  },
  beforeCreate() {
    this.$store.dispatch("cxModule/getCxReport", this.$route.params.id);
  },
  mounted() {
    // Set the initial number of items
    this.$store.watch(
      state => state.cxModule.report_id,
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
    changeStatus(e) {
      this.items.status = e;
    }
  }
};
</script>

<style>
</style>

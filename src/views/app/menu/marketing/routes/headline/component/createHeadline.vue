<template>
  <div>
    <div align="left">
      <h5 class="h5 mb-3 text-primary font-weight-bold">Headlines</h5>
    </div>
    <br />
    <b-card class="text-left">
      <h5 class="font-weight-bold text-primary">Create New Headline</h5>
      <br />
      <br />
      <b-row>
        <b-col>
          <div>
            <b-tabs content-class="mt-3" justified>
              <b-tab title="News" active>
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-1" label="Headline:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Headline"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-1" label="Content:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Content"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-1" label="Image:" label-for="input-1"></b-form-group>
                    <b-card body-class="py-2 px-2">
                      <card-body>
                        <b-row>
                          <b-col class="text-primary mt-2">
                            <i class="fas fa-paperclip"></i>&nbsp;
                            Photo
                            <sup
                              class="text-secondary pl-3 mr-5 pr-5"
                            >(2 Mb)</sup>
                          </b-col>
                          <b-col class="text-right" align="right">
                            <b-button variant="primary" class="ml-5">Preview</b-button>
                          </b-col>
                        </b-row>
                      </card-body>
                    </b-card>
                  </b-col>
                </b-row>
                <br />
                <b-row>
                  <b-col>
                    <b-form-group
                      id="fieldset-1"
                      label="Star Date"
                      label-class="font-weight-bold"
                      label-for="input-1"
                    >
                      <b-form-input type="date"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="fieldset-1"
                      label="End Date"
                      label-class="font-weight-bold"
                      label-for="input-1"
                    >
                      <b-form-input type="date"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >Always Active</b-form-checkbox>
                  </b-col>
                </b-row>
                <br />
                <b-button variant="primary" class="mr-5">Save</b-button>
                <router-link :to="{name: 'Headline'}">
                  <b-button variant="outline-secondary">Cancel</b-button>
                </router-link>
              </b-tab>
              <b-tab title="Promo">
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-1" label="Headline:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Headline"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-1" label="Content:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Content"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-1" label="Image:" label-for="input-1"></b-form-group>
                    <b-card body-class="py-2 px-2">
                      <card-body>
                        <b-row>
                          <b-col class="text-primary mt-2">
                            <i class="fas fa-paperclip"></i>&nbsp;
                            Photo
                            <sup
                              class="text-secondary pl-3 mr-5 pr-5"
                            >(2 Mb)</sup>
                          </b-col>
                          <b-col class="text-right" align="right">
                            <b-button variant="primary" class="ml-5">Preview</b-button>
                          </b-col>
                        </b-row>
                      </card-body>
                    </b-card>
                  </b-col>
                </b-row>
                <br />
                <b-row>
                  <b-col>
                    <b-form-group
                      id="fieldset-1"
                      label="Star Date"
                      label-class="font-weight-bold"
                      label-for="input-1"
                    >
                      <b-form-input type="date"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="fieldset-1"
                      label="End Date"
                      label-class="font-weight-bold"
                      label-for="input-1"
                    >
                      <b-form-input type="date"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >Always Active</b-form-checkbox>
                  </b-col>
                </b-row>
                <br />
                <b-card
                  header-bg-variant="transparent"
                  body-class="pb-0"
                  border-variant="secondary"
                  align="left"
                >
                  <b-row>
                    <b-col class="text-left">
                      <h6 class="text-primary">
                        Promo Product Roles
                        <img src="@/assets/ic-warning.svg" alt />
                      </h6>
                    </b-col>
                    <b-col class="text-right">
                      <b-form-checkbox
                        v-model="checked"
                        name="check-button"
                        switch
                      >{{checked === true ? 'Yes':'' || checked === false ? 'No':''}}</b-form-checkbox>
                    </b-col>
                  </b-row>
                  <hr v-show="checked" />
                  <b-card-body v-show="checked">
                    <b-form-group id="input-group-1" label="Paxel Home:" label-for="input-1">
                      <vue-multiselect
                        v-model="value"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="code"
                        :options="options"
                        :multiple="true"
                        :taggable="true"
                        @tag="addTag"
                      ></vue-multiselect>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Dimension/Item:" label-for="input-1">
                      <b-row>
                        <b-col>
                          <b-form-input type="number" placeholder="Length"></b-form-input>
                        </b-col>
                        <p class="mt-1">X</p>
                        <b-col>
                          <b-form-input type="number" placeholder="Width"></b-form-input>
                        </b-col>
                        <p class="mt-1">X</p>
                        <b-col>
                          <b-form-input type="number" placeholder="Height"></b-form-input>
                        </b-col>
                        <p class="mt-1">CM</p>
                      </b-row>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Item(s) fit to:" label-for="input-1">
                      <b-row class="ml-3">
                        <b-col>Small (S)</b-col>
                        <b-col>
                          <b-form-input placeholder="Min"></b-form-input>
                        </b-col>
                        <p class="pt-2 mb-0">to</p>
                        <b-col>
                          <b-form-input placeholder="Max"></b-form-input>
                        </b-col>
                        <p class="pt-2 mb-0">Item</p>
                      </b-row>
                      <b-row class="ml-3 mt-3">
                        <b-col>Medium (M)</b-col>
                        <b-col>
                          <b-form-input placeholder="Min"></b-form-input>
                        </b-col>
                        <p class="pt-2 mb-0">to</p>
                        <b-col>
                          <b-form-input placeholder="Max"></b-form-input>
                        </b-col>
                        <p class="pt-2 mb-0">Item</p>
                      </b-row>
                      <b-row class="ml-3 mt-3">
                        <b-col>Large (L)</b-col>
                        <b-col>
                          <b-form-input placeholder="Min"></b-form-input>
                        </b-col>
                        <p class="pt-2 mb-0">to</p>
                        <b-col>
                          <b-form-input placeholder="Max"></b-form-input>
                        </b-col>
                        <p class="pt-2 mb-0">Item</p>
                      </b-row>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Item Type:" label-for="input-1">
                      <vue-multiselect
                        v-model="value2"
                        :options="options"
                        :custom-label="nameWithLang"
                        placeholder="Chose Item Type"
                        label="name"
                        track-by="name"
                      ></vue-multiselect>
                    </b-form-group>
                    <br />
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >Fragile Item</b-form-checkbox>
                    <br />
                    <b-form-group id="input-group-1" label="AddOn:" label-for="input-1">
                      <vue-multiselect
                        v-model="value3"
                        :options="options"
                        :custom-label="nameWithLang"
                        placeholder="Chose AddOn Requirement"
                        label="name"
                        track-by="name"
                      ></vue-multiselect>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Item Note:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Enter Item Note"></b-form-input>
                    </b-form-group>
                  </b-card-body>
                </b-card>
                <br />
                <b-button variant="primary" class="mr-5">Save</b-button>
                <router-link :to="{name: 'Headline'}">
                  <b-button variant="outline-secondary">Cancel</b-button>
                </router-link>
              </b-tab>
              <b-tab title="#Antarkankebaikan">
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-1" label="Headline:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Headline"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-1" label="Content:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Content"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-group id="input-group-1" label="Image:" label-for="input-1"></b-form-group>
                    <b-card body-class="py-2 px-2">
                      <card-body>
                        <b-row>
                          <b-col class="text-primary mt-2">
                            <i class="fas fa-paperclip"></i>&nbsp;
                            Photo
                            <sup
                              class="text-secondary pl-3 mr-5 pr-5"
                            >(2 Mb)</sup>
                          </b-col>
                          <b-col class="text-right" align="right">
                            <b-button variant="primary" class="ml-5">Preview</b-button>
                          </b-col>
                        </b-row>
                      </card-body>
                    </b-card>
                  </b-col>
                </b-row>
                <br />
                <b-row>
                  <b-col>
                    <b-form-group
                      id="fieldset-1"
                      label="Star Date"
                      label-class="font-weight-bold"
                      label-for="input-1"
                    >
                      <b-form-input type="date"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group
                      id="fieldset-1"
                      label="End Date"
                      label-class="font-weight-bold"
                      label-for="input-1"
                    >
                      <b-form-input type="date"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >Always Active</b-form-checkbox>
                  </b-col>
                </b-row>
                <br />
                <b-card
                  header-bg-variant="transparent"
                  body-class="pb-0"
                  border-variant="secondary"
                  align="left"
                >
                  <h6 class="text-primary">
                    #Antarakankebaikan Roles
                    <img src="@/assets/ic-warning.svg" alt />
                  </h6>
                  <hr />
                  <b-card-body>
                    <b-form-group id="input-group-1" label="Name:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Enter Name"></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Contact:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Enter Contact"></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="input-group-1"
                      label="Destination Location:"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        type="text"
                        required
                        placeholder="Choce Pickup Location"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Latitude:" label-for="input-1">
                      <b-form-input id="input-1" type="number" required placeholder="0"></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Longitude:" label-for="input-1">
                      <b-form-input id="input-1" type="number" required placeholder="0"></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Item Notes:" label-for="input-1">
                      <b-form-input id="input-1" type="text" required placeholder="Enter Item Note"></b-form-input>
                    </b-form-group>
                  </b-card-body>
                </b-card>
                <br />
                <b-button variant="primary" class="mr-5">Save</b-button>
                <router-link :to="{name: 'Headline'}">
                  <b-button variant="outline-secondary">Cancel</b-button>
                </router-link>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
        <b-col>Sidebar</b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "first",
      checked: false,
      value: [{ name: "Javascript", code: "js" }],
      value2: [{ name: "Vue.js", code: "vu" }],
      value3: [{ name: "Open Source", code: "os" }],
      options: [
        { name: "Vue.js", code: "vu" },
        { name: "Javascript", code: "js" },
        { name: "Open Source", code: "os" }
      ],
      status: [
        { text: "Active", value: "first" },
        { text: "Inactive", value: "second" }
      ],
      button: [
        { text: "No", value: "first" },
        { text: "Yes", value: "second" }
      ],
      options2: [
        { text: "Yes", value: "first" },
        { text: "No", value: "second" }
      ]
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.value.push(tag);
    }
  }
};
</script>

<style scoped>
</style>

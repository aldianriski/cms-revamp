<template>
  <div>
    <div align="left">
      <br />
      <h5 class="h5 mb-1 text-primary font-weight-bold">Paxelian Candidates - Profile - Andi Suhendi</h5>
      <br />
    </div>
    <b-card class="text-left">
      <b-row>
        <b-col>
          <h6>
            <router-link class="text-dark" :to="{name: 'pxReport'}">
              <i class="fas fa-arrow-left mr-1"></i>Back
            </router-link>
          </h6>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <b-col md="8">
          <b-row>
            <b-col class="text-left" md="4">
              <h4 class="font-weight-bold">Profile</h4>
              <br />
              <p>Fullname</p>
              <p>Gender</p>
              <p>Date Brith</p>
              <p>Phone Number</p>
              <p>Email Address</p>
              <p>Profile Summary</p>
            </b-col>
            <b-col md="8">
              <h4>&nbsp;</h4>
              <br />
              <p>{{items.full_name}}</p>
              <p>{{items.gender}}</p>
              <p>{{items.date_birth}}</p>
              <p>{{items.phone}}</p>
              <p>{{items.email}}</p>
              <p>{{items.summary}}</p>
            </b-col>
          </b-row>
          <h4 class="font-weight-bold">Experience</h4>
          <b-row v-for="(experience,k) in items.experience" :key="k">
            <b-col class="text-left" md="4">
              <br />
              <p>Company Name</p>
              <p>Title</p>
              <p>Period</p>
              <p>Description</p>
            </b-col>
            <b-col md="8">
              <br />
              <p>{{experience.company_name}}</p>
              <p>{{experience.title}}</p>
              <p>{{experience.period}}</p>
              <p>{{experience.description}}</p>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="4">
          <p>
            <b-button block variant="primary">
              <i class="fas fa-print"></i> Print Profile
            </b-button>
          </p>
          <p>
            <b-button block variant="warning">
              <i class="fas fa-file-download"></i> Download CV / Resume
            </b-button>
          </p>
          <b-card bg-variant="light" class="text-left">
            <b-row>
              <b-col md="12">
                <b-form-group id="fieldset-1" label="Status" class="mb-0" label-for="input-1">
                  <b-form-select
                    v-model="items.status"
                    class="my-0"
                    :class="items.status === 'New' ? 'text-warning':'' || items.status === 'Rejected' ? 'text-danger':''|| items.status === 'Interview' ? 'text-info':''|| items.status === 'Failed' ? 'text-danger':''|| items.status === 'Passed' ? 'text-success':''|| items.status === 'Offering' ? 'text-info':''|| items.status === 'Decline' ? 'text-danger':''|| items.status === 'Hired' ? 'text-primary':'' "
                    id="input-1"
                  >
                    <option value="New" class="text-warning">New</option>
                    <option value="Rejected" class="text-danger">Rejected</option>
                    <option value="Interview" class="text-info">Interview</option>
                    <option value="Failed" class="text-danger">Failed</option>
                    <option value="Passed" class="text-success">Passed</option>
                    <option value="Offering" class="text-info">Offering</option>
                    <option value="Decline" class="text-danger">Decline</option>
                    <option value="Hired" class="text-primary">Hired</option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col class="mt-4" md="12">
                <b>Applied Position</b>
                <p>{{items.applied_position}}</p>
              </b-col>
              <b-col md="12">
                <br />
                <b>Applied Date</b>
                <p>{{items.applied_date}}</p>
                <br />
              </b-col>
              <b-col md="12">
                <div v-for="tes in items.test" :key="tes">
                  <b-row class="mb-3" v-for="(detail,key,index) in tes" :key="index">
                    <b-col md="9">
                      <p class="mb-0 font-weight-bold">Stage Test {{index+1}}</p>
                      <div class="text-primary">{{detail.name}}</div>
                    </b-col>
                    <b-col>
                      <p class="mb-0 font-weight-bold">Score</p>
                      {{detail.score}}
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </b-card>
          <br />
          <p>
            <b-button block variant="primary">
              <i class="fas fa-save"></i> Save Change
            </b-button>
          </p>
          <h4>Comments</h4>
          <b-button block variant="outline-primary" @click="commentShow = !commentShow">
            <i class="fas fa-plus"></i> Add Comment
          </b-button>
          <b-card
            v-for="data in items.comments"
            :key="data"
            class="text-left mt-4 border-right-active-dropdown"
          >
            <b-row>
              <b-col>
                <b class="text-primary">{{data.username}}</b>
              </b-col>
              <b-col class="text-right">
                <i class="fas fa-times text-danger"></i>
              </b-col>
            </b-row>
            <p class="text-warning">{{data.create_at}}</p>
            <p>{{data.comment}}</p>
          </b-card>
        </b-col>
        <b-col class="text-left ml-3 my-3" md="2"></b-col>
        <b-col class="my-3"></b-col>
      </b-row>
    </b-card>
    <b-modal
      v-model="modalShow"
      title-html="<b>Stage 2 - Skill Test (Backend Developer)</b>"
      title-tag="h4"
      size="lg"
    >
      <b-row>
        <b-col md="8">
          <b-list-group>
            <b-list-group-item>
              <b-row>
                <b-col md="2">No</b-col>
                <b-col>Answer</b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="2">01</b-col>
                <b-col>B</b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="2">02</b-col>
                <b-col>A,C</b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="2">03</b-col>
                <b-col>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item>
              <b-row>
                <b-col md="2">04</b-col>
                <b-col>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col>
          <b-button variant="primary" block>
            <i class="fas fa-print"></i> Print Test Question
          </b-button>
          <b-button variant="primary" block>
            <i class="fas fa-print"></i> Print Answer
          </b-button>
          <b-button variant="warning" block>
            <i class="fas fa-file-export"></i> Export To CSV
          </b-button>
          <br />Result
          <p>
            <b-form-select v-model="selected" class="mb-3">
              <template slot="first">
                <option :value="null" disabled>Not yet graded</option>
              </template>
              <option value="D" class="text-success font-weight-bold">Passed</option>
              <option value="C" class="text-danger font-weight-bold">Failed</option>
            </b-form-select>
          </p>
          <b-button variant="primary" block>
            <i class="fas fa-save"></i> Save Change
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
    <b-modal
      v-model="commentShow"
      title="Add Comment"
      title-html="<b>Add Comment</b>"
      title-tag="h4"
    >
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter Comment..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-modal>
  </div>
</template>

<script>
import dataService from "../dataService";

export default {
  data() {
    return {
      items: {
        full_name: "Andi Suhendi",
        gender: "Male",
        date_birth: "18 Mei 1989",
        phone: "+62 8123341231",
        email: "Andis@gmail.com",
        summary:
          "Lorem Ipsum dolom sit ametLorem Ipsum dolom sit ametLorem Ipsum dolom sit ametLorem Ipsum dolom sit ametLorem Ipsum dolom sit amet",
        status: "Rejected",
        applied_position: "Backend Developer - Jakarta",
        applied_date: "5 Des 2018",
        experience: [
          {
            company_name: "Null",
            title: "Null",
            period: "Null",
            description: "Null"
          },
          {
            company_name: "Null",
            title: "Null",
            period: "Null",
            description: "Null"
          }
        ],
        test: [
          {
            stage_1: {
              name: "Psychological Test",
              score: 111,
              view_answer: [
                {
                  no: "1",
                  question: "question 1",
                  answer: "answer 1"
                },
                {
                  no: "2",
                  question: "question 2",
                  answer: "answer 2"
                }
              ]
            },
            stage_2: {
              name: "IQ Test",
              score: 111,
              view_answer: [
                {
                  no: "1",
                  question: "question 1",
                  answer: "answer 1"
                },
                {
                  no: "2",
                  question: "question 2",
                  answer: "answer 2"
                }
              ]
            }
          }
        ],
        comments: [
          {
            username: "Rizki Esa",
            create_at: "22 February 2019 | 1748",
            comment: "Leave Some Comment"
          },
          {
            username: "Rizki Esa",
            create_at: "22 February 2019 | 1748",
            comment: "Leave Some Comment"
          }
        ]
      },
      modalShow: false,
      commentShow: false,
      selected: null
    };
  },
  mounted() {
    // dataService
    //   .getReport()
    //   .then(response => {
    //     this.items = response.data.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     this.errored = true;
    //   })
    //   .finally(() => (this.loading = false));
  }
};
</script>

<style>
</style>

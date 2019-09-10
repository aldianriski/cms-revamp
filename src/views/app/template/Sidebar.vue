<template>
  <ul class="navbar-nav bg-gradient-light sidebar sidebar-light accordion" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
      <img class="sidebar-brand-icon" src="@/assets/logo-px.png" width="32px" height="145%" />

      <div class="sidebar-brand-text text-primary mx-3 mt-1">
        <font face="Netto" size="6">paxel</font>
      </div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li
      class="nav-item"
      @mouseover="dashboard = true"
      @mouseleave="dashboard = false"
      :class="{'active border-right-active': routename === 'dashboard'}"
    >
      <router-link :to="{name: 'dashboard'}" class="nav-link">
        <img
          src="@/assets/ic-dashboard.svg"
          alt
          class="px-2"
          v-if="dashboard || routename ==='dashboard'"
        />
        <img
          src="@/assets/ic-dashboard-unselect.svg"
          alt
          class="px-2"
          v-else-if="routename != 'dashboard' && !dashboard"
        />
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">CX</div>
    <li
      @mouseover="cx = true"
      @mouseleave="cx = false"
      class="nav-item"
      :class="{ 'active border-right-active': routename === 'cxReport' || routename === 'cxDetailComplaint'|| routename === 'cxDetailClaim'|| routename === 'cxDetailFeedback'|| routename === 'cxDetailInformation' }"
    >
      <router-link :to="{name: 'cxReport'}" class="nav-link">
        <img
          src="@/assets/ic-manage-account_color.svg"
          alt
          class="px-2"
          v-if="cx || routename ==='cxReport' || routename === 'cxDetailComplaint'|| routename === 'cxDetailClaim'|| routename === 'cxDetailFeedback'|| routename === 'cxDetailInformation'"
        />
        <img
          src="@/assets/ic-manage-account_bw.svg"
          alt
          class="px-2"
          v-else-if="routename != 'cxReport' && routename != 'cxDetailComplaint' && routename != 'cxDetailClaim' && routename != 'cxDetailFeedback' && routename != 'cxDetailInformation' && !cx"
        />
        <span>Customer Empathy</span>
      </router-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Marketing</div>
    <li
      class="nav-item"
      @mouseover="paxelco = true"
      @mouseleave="paxelco = false"
      :class="{ 'active border-right-active-dropdown': routename === 'homePage' || routename === 'Tnc'|| routename === 'Faq'|| routename === 'createFaq'|| routename === 'editFaq'|| routename === 'createFaqCategory'|| routename === 'editFaqCategory' || routename === 'createTnc'|| routename === 'editTnc'|| routename === 'editHomePage'|| routename === 'createHomePage' }"
    >
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePaxelco"
        aria-expanded="true"
        aria-controls="collapsePaxelco"
      >
        <img
          src="@/assets/ic-manage-account_color.svg"
          alt
          class="px-2"
          v-if="paxelco || routename === 'homePage' || routename === 'Tnc'|| routename === 'Faq' || routename === 'createFaq'|| routename === 'editFaq'|| routename === 'createFaqCategory'|| routename === 'editFaqCategory' || routename === 'createTnc'|| routename === 'editTnc'|| routename === 'editHomePage'|| routename === 'createHomePage'"
        />
        <img
          src="@/assets/ic-manage-account_bw.svg"
          alt
          class="px-2"
          v-else-if="routename != 'homePage' && routename != 'Tnc' && routename != 'Faq' && routename != 'createFaq'&& routename != 'editFaq' && routename != 'createFaqCategory' && routename != 'editFaqCategory' && routename != 'createTnc'&& routename != 'editTnc' && routename != 'editHomePage'&& routename != 'createHomePage' && !paxelco"
        />
        <span>Paxel.co Content</span>
      </a>
      <div
        id="collapsePaxelco"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
        :class="{ 'show': routename === 'homePage' || routename === 'Tnc'|| routename === 'Faq'|| routename === 'createFaq'|| routename === 'editFaq'|| routename === 'createFaqCategory'|| routename === 'editFaqCategory'|| routename === 'createTnc'|| routename === 'editTnc' || routename === 'editHomePage'|| routename === 'createHomePage' }"
      >
        <div class="bg-white collapse-inner text-left">
          <router-link
            :to="{name: 'Faq'}"
            :class="{ 'active border-right-active': routename === 'Faq' || routename === 'createFaq'|| routename === 'editFaq'|| routename === 'createFaqCategory'|| routename === 'editFaqCategory' }"
            class="collapse-item"
          >FAQ</router-link>
          <router-link
            :to="{name: 'homePage'}"
            :class="{ 'active border-right-active': routename === 'homePage' || routename === 'editHomePage'|| routename === 'createHomePage' }"
            class="collapse-item"
          >Homepage</router-link>
          <router-link
            :to="{name: 'Tnc'}"
            :class="{ 'active border-right-active': routename === 'Tnc'|| routename === 'createTnc'|| routename === 'editTnc' }"
            class="collapse-item"
          >Terms & Condition</router-link>
        </div>
      </div>
    </li>
    <li
      @mouseover="headline = true"
      @mouseleave="headline = false"
      class="nav-item"
      :class="{ 'active border-right-active': routename === 'Headline' }"
    >
      <router-link :to="{name: 'Headline'}" class="nav-link">
        <img
          src="@/assets/ic-manage-account_color.svg"
          alt
          class="px-2"
          v-if="headline || routename ==='Headline'"
        />
        <img
          src="@/assets/ic-manage-account_bw.svg"
          alt
          class="px-2"
          v-else-if="routename != 'Headline' && !headline"
        />
        <span>Headlines</span>
      </router-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">PX</div>
    <li
      class="nav-item"
      @mouseover="career = true"
      @mouseleave="career = false"
      :class="{ 'active border-right-active-dropdown': routename === 'pxBenefits' || routename === 'pxJobVacancy' || routename === 'pxLifeInPaxel' || routename === 'pxOnlineTest' || routename === 'pxTestimonial' }"
    >
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseCareer"
        aria-expanded="true"
        aria-controls="collapseCareer"
      >
        <img
          src="@/assets/ic-manage-account_color.svg"
          alt
          class="px-2"
          v-if="career || routename === 'pxBenefits' || routename === 'pxJobVacancy' || routename === 'pxLifeInPaxel' || routename === 'pxOnlineTest' || routename === 'pxTestimonial'"
        />
        <img
          src="@/assets/ic-manage-account_bw.svg"
          alt
          class="px-2"
          v-else-if="routename != 'pxBenefits' && routename != 'pxJobVacancy' && routename != 'pxLifeInPaxel' && routename != 'pxOnlineTest' && routename != 'pxTestimonial' && !career"
        />
        <span>Career</span>
      </a>
      <div
        id="collapseCareer"
        class="collapse"
        :class="{ 'show': routename === 'pxBenefits' || routename === 'pxJobVacancy' || routename === 'pxLifeInPaxel' || routename === 'pxOnlineTest' || routename === 'pxTestimonial' }"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white collapse-inner text-left">
          <router-link
            :to="{name: 'pxBenefits'}"
            :class="{ 'active border-right-active': routename === 'pxBenefits' }"
            class="collapse-item"
          >Benefits</router-link>
          <router-link
            :to="{name: 'pxJobVacancy'}"
            :class="{ 'active border-right-active': routename === 'pxJobVacancy' }"
            class="collapse-item"
          >Job Vacancy</router-link>
          <router-link
            :to="{name: 'pxLifeInPaxel'}"
            :class="{ 'active border-right-active': routename === 'pxLifeInPaxel' }"
            class="collapse-item"
          >Life in Paxel</router-link>
          <router-link
            :to="{name: 'pxOnlineTest'}"
            :class="{ 'active border-right-active': routename === 'pxOnlineTest' }"
            class="collapse-item"
          >Online Test</router-link>
          <router-link
            :to="{name: 'pxTestimonial'}"
            :class="{ 'active border-right-active': routename === 'pxTestimonial' }"
            class="collapse-item"
          >Testimonial</router-link>
        </div>
      </div>
    </li>
    <li
      class="nav-item"
      @mouseover="paxelian = true"
      @mouseleave="paxelian = false"
      :class="{ 'active border-right-active-dropdown': routename === 'pxReport' || routename === 'detailCandidate' ||  routename === 'pxDashboard'|| routename === 'pxHired' }"
    >
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePaxelian"
        aria-expanded="true"
        aria-controls="collapsePaxelian"
      >
        <img
          src="@/assets/ic-manage-account_color.svg"
          alt
          class="px-2"
          v-if="paxelian || routename === 'pxReport' || routename === 'detailCandidate' ||  routename === 'pxDashboard'|| routename === 'pxHired'"
        />
        <img
          src="@/assets/ic-manage-account_bw.svg"
          alt
          class="px-2"
          v-else-if="routename != 'pxReport' && routename != 'detailCandidate' && routename != 'pxDashboard' && routename != 'pxHired' && !paxelian"
        />
        <span>Paxelian</span>
      </a>
      <div
        id="collapsePaxelian"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
        :class="{ 'show': routename === 'pxReport' || routename === 'detailCandidate' ||  routename === 'pxDashboard'|| routename === 'pxHired' }"
      >
        <div class="bg-white collapse-inner text-left">
          <router-link
            :to="{name: 'pxDashboard'}"
            :class="{ 'active border-right-active': routename === 'pxDashboard' }"
            class="collapse-item"
          >Paxelian Dashboard</router-link>
          <router-link
            :to="{name: 'pxReport'}"
            :class="{ 'active border-right-active': routename === 'pxReport' || routename === 'detailCandidate' }"
            class="collapse-item"
          >Paxelian Candidates</router-link>
          <router-link
            :to="{name: 'pxHired'}"
            :class="{ 'active border-right-active': routename === 'pxHired' }"
            class="collapse-item"
          >Hired Paxelian</router-link>
        </div>
      </div>
    </li>
    <li
      class="nav-item"
      @mouseover="hero = true"
      @mouseleave="hero = false"
      :class="{ 'active border-right-active-dropdown': routename === 'pxHero' || routename === 'detailCandidateHero' || routename === 'pxHeroDasboard'|| routename === 'pxHeroHired' }"
    >
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseHero"
        aria-expanded="true"
        aria-controls="collapseHero"
      >
        <img
          src="@/assets/ic-manage-account_color.svg"
          alt
          class="px-2"
          v-if="hero || routename === 'pxHero'|| routename === 'detailCandidateHero' || routename === 'pxHeroDasboard'|| routename === 'pxHeroHired'"
        />
        <img
          src="@/assets/ic-manage-account_bw.svg"
          alt
          class="px-2"
          v-else-if="routename != 'pxHero' && routename != 'detailCandidateHero' && routename != 'pxHeroDasboard' && routename != 'pxHeroHired' && !hero"
        />
        <span>Happiness Hero</span>
      </a>
      <div
        id="collapseHero"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#accordionSidebar"
        :class="{ 'show': routename === 'pxHero' || routename === 'detailCandidateHero' || routename === 'pxHeroDasboard'|| routename === 'pxHeroHired' }"
      >
        <div class="bg-white collapse-inner text-left">
          <router-link
            :to="{name: 'pxHeroDasboard'}"
            :class="{ 'active border-right-active': routename === 'pxHeroDasboard' }"
            class="collapse-item"
          >Hero Dashboard</router-link>
          <router-link
            :to="{name: 'pxHero'}"
            :class="{ 'active border-right-active': routename === 'pxHero' || routename === 'detailCandidateHero' }"
            class="collapse-item"
          >Hero Candidates</router-link>
          <router-link
            :to="{name: 'pxHeroHired'}"
            :class="{ 'active border-right-active': routename === 'pxHeroHired' }"
            class="collapse-item"
          >Hired Heroes</router-link>
        </div>
      </div>
    </li>

    <!-- Heading -->

    <!-- Nav Item - Pages Collapse Menu -->

    <!-- Nav Item - Pages Collapse Menu -->

    <!-- Nav Item - Tables -->

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <!-- <button class="rounded-circle border-0" id="sidebarToggle"></button> -->
    </div>
    {{changeRoute()}}
  </ul>
</template>

<script>
export default {
  data() {
    return {
      routename: null,
      cx: false,
      headline: false,
      dashboard: false,
      paxelco: false,
      career: false,
      paxelian: false,
      hero: false
    };
  },
  methods: {
    changeRoute() {
      this.routename = this.$route.name;
    }
  },
  mounted() {},
  created() {}
};
</script>

<style>
@font-face {
  font-family: "Netto";
  src: url("../../../assets/netto.ttf");
}
@font-face {
  font-family: "Gotham";
  src: url("../../../assets/Gotham.ttf");
}
</style>

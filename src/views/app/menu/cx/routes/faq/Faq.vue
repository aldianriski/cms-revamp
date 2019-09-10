<template>
  <div>
    <div align="left"></div>
    <app-faq-category></app-faq-category>
    <br />
    <app-faq></app-faq>
    <br />
  </div>
</template>

<script>
import Faq from "./component/faq";
import Faq_Category from "./component/faq_category";

export default {
  components: {
    appFaq: Faq,
    appFaqCategory: Faq_Category
  },
  async beforeCreate() {
    // this.$store.dispatch("getDonatur");
    this.$store.dispatch("FaqModule/getFaqs", null, { root: true });
    this.$store.dispatch("FaqModule/getFaqCategorys", null, { root: true });
  }
};
</script>

<style>
</style>

<template>
  <div>
    <button
      @click="$tours['myTour'].start()"
      id="some-button"
      class="btn btn-primary btn-lg mr-2"
    >Start the tour</button>

    <v-tour name="myTour" :steps="steps" :callbacks="callbacks">
      <template slot-scope="tour">
        <transition name="fade">
          <v-step
            id="overlay"
            v-if="tour.currentStep === index"
            v-for="(step, index) of tour.steps"
            :key="index"
            :step="step"
            :previous-step="tour.previousStep"
            :next-step="tour.nextStep"
            :stop="tour.stop"
            :is-first="tour.isFirst"
            :is-last="tour.isLast"
            :labels="tour.labels"
          >
            <template v-if="tour.currentStep === 2">
              <div slot="actions">
                <button @click="tour.previousStep" class="btn btn-primary mr-2">Previous step</button>
                <button @click="tour.nextStep" class="btn btn-primary">Next step</button>
              </div>
            </template>
          </v-step>
        </transition>
      </template>
    </v-tour>
  </div>
</template>

<script>
export default {
  name: "my-tour",
  data() {
    return {
      steps: [
        {
          target: "#v-step-0",
          content: `Discover <strong>Vue Tour</strong>!`,
          params: {
            placement: "left"
          }
        },
        {
          target: "#v-step-0-1",
          content: `Created by <a href="https://github.com/pulsardev" target="_blank" rel="noopener">Pulsar</a> and its <a href="https://github.com/pulsardev/vue-tour/graphs/contributors" target="_blank" rel="noopener">contributors</a>.`,
          params: {
            placement: "right"
          }
        },
        {
          target: "#v-step-1",
          header: {
            title: "Vue Tour"
          },
          content: "An awesome plugin made with Vue.js!"
        },
        {
          target: "#v-step-2",
          content:
            "Try it, you'll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.",
          params: {
            placement: "top"
          }
        },
        {
          target: "#v-step-3",
          params: {
            placement: "bottom"
          }
        }
      ],
      callbacks: {
        onPreviousStep: this.myCustomPreviousStepCallback,
        onNextStep: this.myCustomNextStepCallback
      }
    };
  },
  mounted: function() {
    $("#some-button").on("click", function() {
      $("#overlay, #overlay-back").fadeIn(500);
    });

    $("#overlay-back").click(function() {
      $("#overlay-back").fadeOut(500);
    });
    // A dynamically added onStop callback
    this.callbacks.onStop = () => {
      document
        .querySelector("#v-step-0")
        .scrollIntoView({ behavior: "smooth" });
      $("#overlay-back").fadeOut(500);
    };
  },
  methods: {
    nextStep() {
      this.$tours["myTour"].nextStep();
    },
    showLastStep() {
      this.$tours["myTour"].currentStep = this.steps.length - 1;
    },
    myCustomPreviousStepCallback(currentStep) {
      console.log(
        "[Vue Tour] A custom previousStep callback has been called on step " +
          (currentStep + 1)
      );
    },
    myCustomNextStepCallback(currentStep) {
      console.log(
        "[Vue Tour] A custom nextStep callback has been called on step " +
          (currentStep + 1)
      );

      if (currentStep === 1) {
        console.log(
          "[Vue Tour] A custom nextStep callback has been called from step 2 to step 3"
        );
      }
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#overlay-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  filter: alpha(opacity=60);
  z-index: 5;
  display: none;
}

#overlay {
  z-index: 10;
}
</style>

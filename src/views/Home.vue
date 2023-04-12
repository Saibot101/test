<template>
  <div>
    <v-img src="../assets/skyline.jpg" height="100vh" :aspect-ratio="16 / 9">
      <v-card height="31%" class="transparent" flat> </v-card>
      <!-- easy workaround, not pretty -->
      <h1 class="text-center mt-15 mb-5 display-3 white--text">
        Hi! I'm Tobias Maas and this is my personal website.
      </h1>
      <h3 class="text-center mt-15 mb-5 display-1 white--text">
        I proudly present here my projects and a short CV.
      </h3>
      <h3 class="text-center mb-5 display-1 white--text">
        I'm studying Data Science at a Master Degree Level at the moment.
      </h3>
    </v-img>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";

export default {
  name: "Home",
  data() {
    return {
      draw: false, // if false then close
    };
  },
  created() {
    EventBus.$on("drawer", () => {
      //     <h3 class="white--text">{{draw}}</h3>
      this.draw = !this.draw;
    });
  },
};
</script>

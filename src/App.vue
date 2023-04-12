<template>
  <v-app class="grey lighten-4">
    <v-content>
      <Navbar />

      <v-main class="ma-0 pa-0">
        <router-view />
      </v-main>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Navbar },

  data: () => ({
    //
  }),
};
</script>

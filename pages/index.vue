<template>
  <v-card elevation="4" class="mt-10 overflow-hidden">
    <v-tabs :vertical="$vuetify.breakpoint.mdAndUp">
      <v-tab> Details </v-tab>
      <v-tab> Stuff </v-tab>
      <v-tab> Services </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text> </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text> </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text> </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import mapState from "vuex";
export default {
  name: "IndexPage",
  fetch() {
    this.$store.dispatch("fetchBranches");
  },
  computed: {
    ...mapState(["branches"]),
  },
};
</script>

<template>
  <v-card elevation="4" class="mt-10 overflow-hidden">
    <v-tabs :vertical="$vuetify.breakpoint.mdAndUp">
      <v-tab> Details </v-tab>
      <v-tab> Stuff </v-tab>
      <v-tab> Services </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2 class="mt-2">Branch Details</h2>
            <v-card outlined class="mt-5">
              <v-data-table
                hide-default-footer
                :headers="branchesHeaders"
                :items="localBranches"
              />
            </v-card>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2 class="mt-2">Stuff</h2>
            <v-card outlined class="mt-5">
              <v-data-table
                hide-default-footer
                :headers="stuffHeaders"
                :items="stuff"
              />
            </v-card>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <h2 class="mt-2">Services</h2>
            <v-card outlined class="mt-5">
              <v-data-table
                hide-default-footer
                :headers="servicesHeaders"
                :items="services"
              />
            </v-card>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "IndexPage",
  created() {
    // login
    this.$store
      .dispatch("login", {
        email: "test@test.com",
        password: "test@test",
      })
      .then(() => {
        this.$store.dispatch("getBranches");
        this.$store.dispatch("getStuff");
        this.$store.dispatch("getServices");
      });
  },
  data() {
    return {
      branchesHeaders: [
        {
          text: "Branch ID",
          align: "start",
          value: "id",
        },
        { text: "Country", value: "country" },
        { text: "City", value: "city" },
        { text: "District", value: "district" },
      ],
      stuffHeaders: [
        {
          text: "Stuff ID",
          align: "start",
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Surname", value: "surname" },
        { text: "Position", value: "position" },
      ],
      servicesHeaders: [
        {
          text: "Service ID",
          align: "start",
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Duration", value: "duration" },
      ],
      localBranches: [
        {
          id: 1,
          country: "Turkey",
          city: "Istanbul",
          district: "Kadıköy",
        },
        {
          id: 2,
          country: "Morocco",
          city: "Rabat",
          district: "sala",
        },
      ],
      stuff: [
        {
          id: 1,
          name: "John",
          surname: "Doe",
          position: "Manager",
        },
        {
          id: 2,
          name: "Jane",
          surname: "Doe",
          position: "Manager",
        },
      ],
      services: [
        {
          id: 1,
          name: "Haircut",
          price: 20,
          duration: 30,
        },
        {
          id: 2,
          name: "Haircut",
          price: 20,
          duration: 30,
        },
      ],
    };
  },
  computed: {
    branches() {
      return this.$store.state.branches;
    },
    businessUsers() {
      return this.$store.state.businessUsers;
    },
    serviceCategories() {
      return this.$store.state.serviceCategories;
    },
  },
};
</script>

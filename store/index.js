export const state = () => ({
  branches: [],
  businessUsers: [],
  serviceCategories: [],
});

export const mutations = {
  setBranches(state, branches) {
    state.branches = branches;
  },
  setBusinessUsers(state, businessUsers) {
    state.businessUsers = businessUsers;
  },
  setServiceCategories(state, serviceCategories) {
    state.serviceCategories = serviceCategories;
  },
};

export const actions = {
  async login({ commit }, { email, password }) {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const { data } = await this.$axios.post("/admin/login", formData);

      this.$axios.setToken(data.token, "Bearer");
    } catch (error) {
      console.log("error", error);
    }
  },
  async getBranches({ commit }) {
    const branches = await this.$axios.$get("/admin/business/1/branches");

    commit("setBranches", branches);
  },
  async getBusinessUsers({ commit }) {
    const businessUsers = await this.$axios.$get(
      "/admin/business/1/business-users"
    );

    commit("setBusinessUsers", businessUsers);
  },
  async getServiceCategories({ commit }) {
    const serviceCategories = await this.$axios.$get(
      "/admin/business/1/service-categories"
    );

    commit("setServiceCategories", serviceCategories);
  },
};

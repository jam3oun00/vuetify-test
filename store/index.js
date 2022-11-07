export const state = () => ({
  branches: 0,
});

export const mutations = {
  setBranches(state, branches) {
    state.branches = branches;
  },
};

export const actions = {
  async getBranches({ commit }) {
    const branches = await this.$axios.$get("/admin/business/1/branches");
    commit("setBranches", branches);
  },
};

import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    paths: ["L_I"],
  })(store);
};

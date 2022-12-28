export const state = () => ({
  L_I: false,
});

export const mutations = {
  setLIState(state, LI_state) {
    state.L_I = LI_state;
  },
};

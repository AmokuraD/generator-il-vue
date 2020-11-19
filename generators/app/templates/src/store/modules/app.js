import { getSampleData } from "@/apis/sample";

const state = {
  sample: "",
};

const mutations = {
  setSample: (state, sample) => {
    state.sample = sample;
  },
};

const actions = {
  getSample: ({ commit }) => {
    return new Promise((resolve, reject) => {
      getSampleData().then((res) => {
        const { data } = res;
        if (data && data.length > 0) {
          commit("setSample", data);
          resolve(data);
        } else {
          reject();
        }
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

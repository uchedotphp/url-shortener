import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shortenedUrls: [],
  },
  mutations: {
    SET_URL(state, urlDetails) {
      state.shortenedUrls.push(urlDetails);
      let urls = JSON.parse(localStorage.getItem("urls")) || [];

      urls.push(urlDetails);
      localStorage.setItem("urls", JSON.stringify(urls));
    },
  },
  actions: {
    shortenLink({ commit }, urlDetails) {
      return axios
        .post("https://rel.ink/api/links/", urlDetails)
        .then(({ data }) => {
          commit("SET_URL", data);
          console.log(data);
        });
    },
  },
  getters: {
    fetchUrls(state) {
      return state.shortenedUrls;
    },
  },
});

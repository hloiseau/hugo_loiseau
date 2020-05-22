import Vue from "vue";
import Vuex from "vuex";
import Data from "@/store/modules/data";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    Data,
  },
});
export default store;

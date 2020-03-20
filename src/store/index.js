import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sem1: {
      verde: false,
      amarillo: false,
      rojo: true
    },
    sem2: {
      verde: false,
      amarillo: false,
      rojo: false
    }
  },
  mutations: {
    sema(state) {
      var timer = setInterval(async () => {
        if (state.sem1.verde) {
          state.sem1.verde = false;
          state.sem1.amarillo = false;
          state.sem1.rojo = true;
          state.sem2.verde = true;
          state.sem2.rojo = false;
          state.sem2.amarillo = false;
        } else {
          state.sem1.verde = true;
          state.sem1.rojo = false;
          state.sem1.amarillo = false;
          state.sem2.verde = false;
          state.sem2.rojo = true;
          state.sem1.amarillo = false;
        }
        // if (c == jornadas.length) {
        //   clearInterval(timer);
        // }
      }, 2000);
    }
  },
  actions: {},
  modules: {}
});

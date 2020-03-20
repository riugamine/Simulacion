import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sem1: {
      verde: false,
      amarillo: false,
      rojo: false
    },
    sem2: {
      verde: false,
      amarillo: false,
      rojo: true
    },
    Ls: 0,
    Lq: 0,
    Ws: 0,
    Wq: 0,
    S: 2,
    Ro: 0,
    P0: 0 //probabilida de 0
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
      }, 3000);
    },
    ObtenerP0(state, datos) {},
    Calcular(state, datos) {
      state.Ro = datos.L / datos.M;
      state.P0 = 1 - state.Ro;

      //calculo de Lq
      let L2 = datos.L * datos.L;
      let denom = (datos.M - datos.L) * datos.M;
      state.Lq = L2 / denom;

      //Calculo de Ls
      state.Ls = datos.L / (datos.M - datos.L);

      //calcuolo de Wq

      state.Wq = datos.L / denom;

      //calculo de Ws
      state.Ws = 1 / (datos.M - datos.L);
    }
  },
  actions: {},
  modules: {}
});

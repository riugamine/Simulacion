<template>
  <div id="carros">
    <button @click="comen">Comenzar</button>
    <div id="carretera1">
      <!-- {{ n.angle }} {{ n.x }} {{ n.y }} -->
      <div
        v-for="(n, index) in carros1"
        :key="index"
        id="carro"
        :class="'carro' + index"
      >
        <svg>
          <use
            :xlink:href="carHref"
            :width="width"
            :height="height"
            :x="n.x - width / 2"
            :y="n.y - height / 2"
            :transform="`rotate(${n.angle} ${n.x} ${n.y})`"
          />
        </svg>
      </div>
    </div>

    <div id="carretera2">
      <!-- {{ n.angle }} {{ n.x }} {{ n.y }} -->
      <div
        v-for="(n, index) in carros2"
        :key="index"
        id="carro"
        :class="'carro' + index"
      >
        <svg>
          <use
            :xlink:href="carHref"
            :width="width"
            :height="height"
            :x="n.x - width / 2"
            :y="n.y - height / 2"
            :transform="`rotate(${n.angle} ${n.x} ${n.y})`"
          />
        </svg>
      </div>
    </div>

    <!-- <span>{{ carro_x }}</span> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import jQuery from "jquery";
let $ = jQuery;
export default {
  name: "carro",
  data: () => ({
    carHref: require("../assets/car.svg") + "#Capa_1",
    carro_x: 0,
    carro_y: 0,
    width: 70,
    height: 70,
    x: 40,
    y: 100,
    angle: 90,
    carros1: [{ x: 40, y: 100, angle: 90 }],
    carros2: [{ x: 650, y: 40, angle: 180 }]
  }),
  props: {
    // width: Number,
    // height: Number,
    // x: Number,
    // y: Number,
    // angle: Number
  },
  mounted() {
    // for (let i = 0; i < this.carros1.length; i++) {
    //   // setInterval(this.moverDerecha(this.carros1[i].x, i), 100);
    //   setInterval(a => {
    //     this.moverDerecha(this.carros1[i].x, i);
    //   }, 100);
    // }
  },
  methods: {
    ...mapMutations(["sema"]),
    moverDerecha() {
      var carro = $("#carretera1 .carro0");
      if (this.carro_x <= 88 && this.carro_x >= 0) {
        //condición para que se mueva entre estos valores de la pantalla
        if (this.$store.state.sem1.rojo && this.carro_x == 38) {
        } else {
          this.carro_x = this.carro_x + 1; //movimiento del valor x
          carro.css("left", this.carro_x + "%"); //aplicar el valor obtenido al left del elemento
        }
      } else {
        //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
        this.carro_x = 0; //posicion inicial
        carro.css("left", this.carro_x + "%"); //volvemos a aplicar el valor obtenido al left del elemento
      }
    },
    moverAbajo() {
      var carro = $("#carretera2 .carro0");
      if (this.carro_y <= 88 && this.carro_y >= 0) {
        //condición para que se mueva entre estos valores de la pantalla
        if (this.$store.state.sem2.rojo && this.carro_y == 29) {
        } else {
          this.carro_y = this.carro_y + 1; //movimiento del valor x
          carro.css("top", this.carro_y + "%"); //aplicar el valor obtenido al left del elemento
        }
      } else {
        //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
        this.carro_y = 0; //posicion inicial
        carro.css("top", this.carro_y + "%"); //volvemos a aplicar el valor obtenido al left del elemento
      }
    },
    comen() {
      var i = 0;
      this.sema();
      // var timer = setInterval(async () => {
      //   i++;
      //   this.carros1.push({ x: 40, y: 100, angle: 90 });
      // }, 2000);
      setInterval(a => {
        this.moverDerecha();
      }, 100);
      setInterval(a => {
        this.moverAbajo();
      }, 80);
    }
  },
  computed: {
    originX() {
      console.log("object");
      return this.x - this.width / 2;
    },
    originY() {
      return this.y - this.height / 2;
    },
    transform() {
      return `rotate(${this.angle} ${this.x} ${this.y})`;
    }
  }
};
</script>

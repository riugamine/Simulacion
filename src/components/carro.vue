<template>
  <div id="carros">
    <div id="carro">
      <svg>
        <use
          :xlink:href="require('../assets/car.svg') + '#Capa_1'"
          :width="width"
          :height="height"
          :x="originX"
          :y="originY"
          :transform="transform"
        />
      </svg>
    </div>

    <button @click="intervalo()">moverDerecha</button>
    <span>{{ carro_x }}</span>
  </div>
</template>

<script>
export default {
  name: "carro",
  data: () => ({
    carro_x: 0
  }),
  props: {
    width: Number,
    height: Number,
    x: Number,
    y: Number,
    angle: Number
  },

  methods: {
    moverDerecha() {
      var carro = document.getElementById("carro");
      if (this.carro_x <= 88 && this.carro_x >= 0) {
        //condición para que se mueva entre estos valores de la pantalla
        this.carro_x = this.carro_x + 1; //movimiento del valor x
        carro.style.left = this.carro_x + "%"; //aplicar el valor obtenido al left del elemento
      } else {
        //si no cumple la condición, es decir, se sale de los valores de la pantalla, vuelve a empezar
        this.carro_x = 0; //posicion inicial
        carro.style.left = this.carro_x + "%"; //volvemos a aplicar el valor obtenido al left del elemento
      }
    },
    intervalo() {
      setInterval(this.moverDerecha, 1000);
    }
  },
  computed: {
    originX() {
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

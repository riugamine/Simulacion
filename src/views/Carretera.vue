<template>
  <div id="Carretera">
    <carro :carrito="carrito"></carro>

    <label for="eje_horizontal">Mover de izquierda a derecha:</label>
    <input type="number" name="eje_horizontal" v-model="carrito[0].x" />
    <label for="eje_vertical">Mover de arriba hacia abajo:</label>
    <input type="number" name="eje_vertical" v-model="carrito[0].y" />
  </div>
</template>

<script>
import carro from "../components/carro.vue";
export default {
  name: "carretera",
  components: {
    carro,
  },
  data() {
    return {
      carrito: [
        {
          width: 100,
          height: 100,
          x: 100,
          y: 100,
          angle: 90
        }
      ],
    };
  }
};
</script>

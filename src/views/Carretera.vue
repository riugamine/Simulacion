<template>
  <div id="Carretera">
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div id="carro">
      <svg>
        <use :xlink:href="carHref" :width="width" :height="height" :x="originX" :y="originY" :transform="transform"/>
      </svg>
    </div>
    
    <label for="eje_horizontal"> Mover de izquierda a derecha: </label>
    <input type="number" name="eje_horizontal" v-model="x" />
    <label for="eje_vertical">Mover de arriba hacia abajo: </label>
    <input type="number" name="eje_vertical" v-model="y" />
  </div>
</template>

<script>
export default {
  data: () => ({
    carHref: require("../assets/car.svg") + "#Capa_1",
    width: 50,
    height: 50,
    x: 100,
    y: 100,
    angle:90
  }),
  computed: {
      originX(){
        return this.x - this.width/2
      },
      originY(){
        return this.y - this.height/2
      },
      transform(){
        return `rotate(${this.angle} ${this.x} ${this.y})`
      }
  },
};
</script>

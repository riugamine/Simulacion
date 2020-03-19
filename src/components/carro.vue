<template>
    <div id="carro">
        
      <svg>
        <use :xlink:href="require('../assets/car.svg') + '#Capa_1'" :width="carrito[0].width" :height="carrito[0].height" :x="originX" :y="originY" :transform="transform"/>
      </svg>
    </div>
</template>

<script>
export default {
    name: 'carro',
    props:[
        'carrito'
    ],

    data: () => ({
    }),
      computed: {
      originX(){
        return this.carrito[0].x - this.carrito[0].width/2
      },
      originY(){
        return this.carrito[0].y - this.carrito[0].height/2
      },
      transform(){
        return `rotate(${this.carrito[0].angle} ${this.carrito[0].x} ${this.carrito[0].y})`
      }
  },

};
</script>

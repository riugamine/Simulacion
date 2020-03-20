<template>
  <div id="Carretera">
    <carro :width="50" :height="50" :x="100" :y="100" :angle="90"></carro>
    <carro :width="50" :height="50" :x="40" :y="100" :angle="90"></carro>
  </div>
</template>

<script>
import carro from "../components/carro.vue";
export default {
  name: "carretera",
  components: {
    carro
  },
  data() {
    return {
      
    };
  }
};
</script>

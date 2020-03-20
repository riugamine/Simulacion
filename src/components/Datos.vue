<template>
<div>

    <div class="cuadro">
        <label for="llegada">Tasas de llegada en segundos</label>
        <input v-model="datos.L" name="llegada" type="number" placeholder="Inserte Tasa de llegada">

        <label for=" atencion semaforo ">tasa de atencion semaforo en segunddos</label>
        <input v-model="datos.M" name="atencion" type="number" placeholder="Inserte Tasa de atencion (tiempo de semaforos)">

        <button @click="Calcular(datos )" >calcular</button>

    </div>
    <table border="1">
        <tr>
            <td>Ls (promedio cola )</td>
            <td>LQ (promedio sistema)</td>
            <td>Ws (promedio tiempo en sistema)</td>
            <td>Wq (Tiempo en cola)</td>
        </tr>
        <tr>
             <td>{{Ls}}</td>
            <td>{{Lq}}</td>
            <td>{{Ws}}</td>
            <td>{{Wq}}</td>
            </tr>
    </table>


    <table>
        <tr>
            <td>P0 =</td> <td>{{P0}}</td>
        </tr>
    </table>
    

</div>

</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
    data(){
        return{
           
            datos:{
                M:0,
                L:0,
            }

        }
    },
  computed:{
      ...mapState(['Ls','Lq','Ws','Wq', 'P0'])
  }, 
  methods:{
      ...mapMutations(['Calcular','ObtenerLq'])
  }
}
</script>

<style scoped>

td{
    margin: auto;
    text-align: center;
}
.cuadro{
    width: 10%;
    height: 10%;
    border: 1;
}
</style>




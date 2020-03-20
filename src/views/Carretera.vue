<template>
  <div id="Carretera">
    <!-- <div id="carretera1">
      <div id="carro">
        <svg>
          <use
            :xlink:href="carHref"
            :width="width"
            :height="height"
            :x="originX"
            :y="originY"
            :transform="transform"
          />
        </svg>
      </div>
    </div>

    <div id="carretera1">
      <div id="carro">
        <svg>
          <use
            :xlink:href="carHref"
            :width="width"
            :height="height"
            :x="originX2"
            :y="originY2"
            :transform="transform2"
          />
        </svg>
      </div>
    </div> -->

    <carro />
    <!-- <carro :width="70" :height="70" :x="40" :y="100" :angle="90"></carro> -->

    <div class="background">
      <div id="box-out">
        <div id="box-inside" class="semaforo1">
          <div
            id="circulo1"
            class="color1"
            v-bind:class="sem1.verde ? 'circulo1hover' : null"
          ></div>
          <!-- <div
            id="circulo2"
            class="color2"
            v-bind:class="sem1.amarillo ? 'circulo2hover' : null"
          ></div> -->
          <div
            id="circulo3"
            class="color3"
            v-bind:class="sem1.rojo ? 'circulo3hover' : null"
          ></div>
        </div>
      </div>
    </div>

    <div class="background">
      <div id="box-out" style="margin: 140px 60% 0px 55%;">
        <div id="box-inside" class="semaforo2">
          <div
            id="circulo1"
            class="color1"
            v-bind:class="sem2.verde ? 'circulo1hover' : null"
          ></div>
          <!-- <div
            id="circulo2"
            class="color2"
            v-bind:class="sem2.amarillo ? 'circulo2hover' : null"
          ></div> -->
          <div
            id="circulo3"
            class="color3"
            v-bind:class="sem2.rojo ? 'circulo3hover' : null"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import jQuery from "jquery";
let $ = jQuery;
import carro from "../components/carro.vue";
export default {
  name: "carretera",
  data() {
    return {
      // sem1: {
      //   verde: false,
      //   amarillo: false,
      //   rojo: false
      // },
      // sem2: {
      //   verde: false,
      //   amarillo: false,
      //   rojo: false
      // },
      carros1: [{ x: 300, y: 90, angle: 90 }],
      carros2: [
        { x: 300, y: 90, angle: 90 },
        { x: 300, y: 90, angle: 90 }
      ],
      carHref: require("../assets/car.svg") + "#Capa_1",
      width: 70,
      height: 70
    };
  },
  components: {
    carro
  },
  computed: {
    ...mapState(["sem1", "sem2"])
  },
  mounted() {
    this.sema();
  },
  methods: {
    ...mapMutations(["sema"])
  }
};
</script>

<style lang="css" scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  /* zoom: 67%; */
  /*background: #33CCFF;*/
}
/* .background {
  padding: 120px;
  zoom: 67%;
  width: auto;
  height: 1400px;
  background-image: linear-gradient(
    bottom,
    rgb(75, 117, 179) 1%,
    rgb(75, 125, 148) 51%,
    rgb(23, 29, 130) 76%
  );
  background-image: -o-linear-gradient(
    bottom,
    rgb(75, 117, 179) 1%,
    rgb(75, 125, 148) 51%,
    rgb(23, 29, 130) 76%
  );
  background-image: -moz-linear-gradient(
    bottom,
    rgb(75, 117, 179) 1%,
    rgb(75, 125, 148) 51%,
    rgb(23, 29, 130) 76%
  );
  background-image: -webkit-linear-gradient(
    bottom,
    rgb(75, 117, 179) 1%,
    rgb(75, 125, 148) 51%,
    rgb(23, 29, 130) 76%
  );
  background-image: -ms-linear-gradient(
    bottom,
    rgb(75, 117, 179) 1%,
    rgb(75, 125, 148) 51%,
    rgb(23, 29, 130) 76%
  );

  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.01, rgb(75, 117, 179)),
    color-stop(0.51, rgb(75, 125, 148)),
    color-stop(0.76, rgb(23, 29, 130))
  );
} */
#box-out {
  background-image: linear-gradient(
    right top,
    rgb(66, 74, 70) 15%,
    rgb(142, 148, 148) 58%
  );
  background-image: -o-linear-gradient(
    right top,
    rgb(66, 74, 70) 15%,
    rgb(142, 148, 148) 58%
  );
  background-image: -moz-linear-gradient(
    right top,
    rgb(66, 74, 70) 15%,
    rgb(142, 148, 148) 58%
  );
  background-image: -webkit-linear-gradient(
    right top,
    rgb(66, 74, 70) 15%,
    rgb(142, 148, 148) 58%
  );
  background-image: -ms-linear-gradient(
    right top,
    rgb(66, 74, 70) 15%,
    rgb(142, 148, 148) 58%
  );
  background-image: -webkit-gradient(
    linear,
    right top,
    left bottom,
    color-stop(0.15, rgb(66, 74, 70)),
    color-stop(0.58, rgb(142, 148, 148))
  );
  width: 40px;
  height: 80px;
  border: solid 1px;
  border-radius: 10px;
  margin: 140px 40% 0px 40%;
  padding: 8px 13px 8px 10px;
  transition: width 2s, height 2s;
  -webkit-transition: width 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */
}
/*#box-out:hover{
	width:300px; height: 760px;
	transform:rotate (360deg);
	-webkit-transform:rotate(360deg);
}*/

#box-inside {
  /*background: black;*/
  background: rgb(10, 8, 9);
  background: -moz-linear-gradient(
    -45deg,
    rgba(10, 8, 9, 1) 0%,
    rgba(10, 14, 10, 1) 71%,
    rgba(110, 119, 116, 1) 74%,
    rgba(174, 188, 191, 1) 77%,
    rgba(174, 188, 191, 1) 100%
  );
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(0%, rgba(10, 8, 9, 1)),
    color-stop(71%, rgba(10, 14, 10, 1)),
    color-stop(74%, rgba(110, 119, 116, 1)),
    color-stop(77%, rgba(174, 188, 191, 1)),
    color-stop(100%, rgba(174, 188, 191, 1))
  );
  background: -webkit-linear-gradient(
    -45deg,
    rgba(10, 8, 9, 1) 0%,
    rgba(10, 14, 10, 1) 71%,
    rgba(110, 119, 116, 1) 74%,
    rgba(174, 188, 191, 1) 77%,
    rgba(174, 188, 191, 1) 100%
  );
  background: -o-linear-gradient(
    -45deg,
    rgba(10, 8, 9, 1) 0%,
    rgba(10, 14, 10, 1) 71%,
    rgba(110, 119, 116, 1) 74%,
    rgba(174, 188, 191, 1) 77%,
    rgba(174, 188, 191, 1) 100%
  );
  background: -ms-linear-gradient(
    -45deg,
    rgba(10, 8, 9, 1) 0%,
    rgba(10, 14, 10, 1) 71%,
    rgba(110, 119, 116, 1) 74%,
    rgba(174, 188, 191, 1) 77%,
    rgba(174, 188, 191, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(10, 8, 9, 1) 0%,
    rgba(10, 14, 10, 1) 71%,
    rgba(110, 119, 116, 1) 74%,
    rgba(174, 188, 191, 1) 77%,
    rgba(174, 188, 191, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0a0809', endColorstr='#aebcbf',GradientType=1 );
  border-radius: 10px;
  width: 15px;
  height: 60px;
  border: solid 1px;
  position: relative;
  padding: 1px 15px 13px 12px;
  /*margin: 15px auto;*/
  transition: width 2s, height 2s;
  -moz-transition: width 2s, height 2s, -moz-transform 2s; /* Firefox 4 */
  -webkit-transition: width 2s, height 2s, -webkit-transform 2s; /* Safari and Chrome */
} /*
#box-inside:hover{
	width:200px; height:670px;
	transform:rotate (360deg);
	-webkit-transform:rotate(360deg);
}*/
.color1 {
  /*background: #00CC33;*/
  background: rgb(79, 146, 43);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(79, 146, 43, 1) 0%,
    rgb(31, 77, 8) 50%,
    rgba(79, 146, 43, 1) 100%
  );
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(79, 146, 43, 1)),
    color-stop(50%, rgba(31, 77, 8, 1)),
    color-stop(100%, rgba(79, 146, 43, 1))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(79, 146, 43, 1) 0%,
    rgba(31, 77, 8, 1) 50%,
    rgba(79, 146, 43, 1) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(79, 146, 43, 1) 0%,
    rgba(31, 77, 8, 1) 50%,
    rgba(79, 146, 43, 1) 100%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(79, 146, 43, 1) 0%,
    rgba(31, 77, 8, 1) 50%,
    rgba(79, 146, 43, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(79, 146, 43, 1) 0%,
    rgba(31, 77, 8, 1) 50%,
    rgba(79, 146, 43, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#76d941', endColorstr='#76d941',GradientType=1 );
}

#circulo1 {
  border-radius: 200px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;

  /*Luz intenso (normal) */
}
#circulo1:hover {
  /*background-color: #66FF33;*/
  background: rgb(180, 227, 145); /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(180, 227, 145, 1)),
    color-stop(50%, rgba(97, 196, 25, 1)),
    color-stop(100%, rgba(180, 227, 145, 1))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4e391', endColorstr='#b4e391',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;

  /*Luz mas intenso que el normal*/
}

.circulo1hover {
  /*background-color: #66FF33;*/
  background: rgb(180, 227, 145); /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(180, 227, 145, 1)),
    color-stop(50%, rgba(97, 196, 25, 1)),
    color-stop(100%, rgba(180, 227, 145, 1))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(180, 227, 145, 1) 0%,
    rgba(97, 196, 25, 1) 50%,
    rgba(180, 227, 145, 1) 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4e391', endColorstr='#b4e391',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;

  /*Luz mas intenso que el normal*/
}

.color2 {
  /*background: #FFCC00;*/
  background: rgb(163, 131, 65);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(163, 131, 65, 1) 0%,
    rgb(167, 127, 36) 50%,
    rgb(161, 105, 9) 51%,
    rgb(184, 119, 8) 100%
  );
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(163, 131, 65, 1)),
    color-stop(50%, rgba(167, 127, 36, 1)),
    color-stop(51%, rgba(161, 105, 9, 1)),
    color-stop(100%, rgba(184, 119, 8, 1))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(163, 131, 65, 1) 0%,
    rgba(167, 127, 36, 1) 50%,
    rgba(161, 105, 9, 1) 51%,
    rgba(184, 119, 8, 1) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(163, 131, 65, 1) 0%,
    rgba(167, 127, 36, 1) 50%,
    rgba(161, 105, 9, 1) 51%,
    rgba(184, 119, 8, 1) 100%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(163, 131, 65, 1) 0%,
    rgba(167, 127, 36, 1) 50%,
    rgba(161, 105, 9, 1) 51%,
    rgba(184, 119, 8, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(163, 131, 65, 1) 0%,
    rgba(167, 127, 36, 1) 50%,
    rgba(161, 105, 9, 1) 51%,
    rgba(184, 119, 8, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8c560', endColorstr='#ee9a0a',GradientType=1 );
}

#circulo2 {
  margin-top: 5px;
  border-radius: 200px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;
  /*Luz intenso (normal) */
}
#circulo2:hover {
  /*background-color: #FFFF00;*/

  background: rgb(252, 234, 187); /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(252, 234, 187, 1)),
    color-stop(50%, rgba(252, 205, 77, 1)),
    color-stop(51%, rgba(248, 181, 0, 1)),
    color-stop(100%, rgba(251, 223, 147, 1))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fbdf93',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;
  /*Luz mas intenso que el normal*/
}

.circulo2hover {
  /*background-color: #FFFF00;*/

  background: rgb(252, 234, 187); /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(252, 234, 187, 1)),
    color-stop(50%, rgba(252, 205, 77, 1)),
    color-stop(51%, rgba(248, 181, 0, 1)),
    color-stop(100%, rgba(251, 223, 147, 1))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(252, 234, 187, 1) 0%,
    rgba(252, 205, 77, 1) 50%,
    rgba(248, 181, 0, 1) 51%,
    rgba(251, 223, 147, 1) 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fceabb', endColorstr='#fbdf93',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;
  /*Luz mas intenso que el normal*/
}

.color3 {
  /*ackground:red;*/
  background: rgb(133, 51, 51);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(133, 51, 51, 1) 0%,
    rgb(139, 75, 76) 32%,
    rgb(119, 28, 31) 49%,
    rgb(139, 40, 43) 71%,
    rgb(128, 46, 51) 100%
  );
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(133, 51, 51, 1)),
    color-stop(32%, rgba(139, 75, 76, 1)),
    color-stop(49%, rgba(119, 28, 31, 1)),
    color-stop(71%, rgba(139, 40, 43, 1)),
    color-stop(100%, rgba(128, 46, 51, 1))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(133, 51, 51, 1) 0%,
    rgba(139, 75, 76, 1) 32%,
    rgba(119, 28, 31, 1) 49%,
    rgba(139, 40, 43, 1) 71%,
    rgba(128, 46, 51, 1) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(133, 51, 51, 1) 0%,
    rgba(139, 75, 76, 1) 32%,
    rgba(119, 28, 31, 1) 49%,
    rgba(139, 40, 43, 1) 71%,
    rgba(128, 46, 51, 1) 100%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(133, 51, 51, 1) 0%,
    rgba(139, 75, 76, 1) 32%,
    rgba(119, 28, 31, 1) 49%,
    rgba(139, 40, 43, 1) 71%,
    rgba(128, 46, 51, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(133, 51, 51, 1) 0%,
    rgba(139, 75, 76, 1) 32%,
    rgba(119, 28, 31, 1) 49%,
    rgba(139, 40, 43, 1) 71%,
    rgba(128, 46, 51, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d85252', endColorstr='#c8464e',GradientType=1 );
}

#circulo3 {
  margin-top: 5px;
  border-radius: 200px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;
  /*Luz intenso (normal) */
}
#circulo3:hover {
  /*
	background-color: #FF3300;*/
  background: rgb(243, 197, 189); /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(243, 197, 189, 1)),
    color-stop(50%, rgba(232, 108, 87, 1)),
    color-stop(51%, rgba(234, 40, 3, 1)),
    color-stop(75%, rgba(255, 102, 0, 1)),
    color-stop(100%, rgba(199, 34, 0, 1))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3c5bd', endColorstr='#c72200',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;
  /*Luz mas intenso que el normal*/
}
.circulo3hover {
  /*
	background-color: #FF3300;*/
  background: rgb(243, 197, 189); /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(243, 197, 189, 1)),
    color-stop(50%, rgba(232, 108, 87, 1)),
    color-stop(51%, rgba(234, 40, 3, 1)),
    color-stop(75%, rgba(255, 102, 0, 1)),
    color-stop(100%, rgba(199, 34, 0, 1))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(243, 197, 189, 1) 0%,
    rgba(232, 108, 87, 1) 50%,
    rgba(234, 40, 3, 1) 51%,
    rgba(255, 102, 0, 1) 75%,
    rgba(199, 34, 0, 1) 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f3c5bd', endColorstr='#c72200',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 100px;
  width: 20px;
  height: 20px;
  position: relative;
  top: 0;
  left: 0;
  /*Luz mas intenso que el normal*/
}
</style>

<template>
  <div style="margin-top:100px;">
    <v-carousel cycle v-model="model" width="100%" hide-delimiters style=" max-height:'360px !important'">
      <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
let slide1 = require('@/assets/img/slide/main_slide1.png');
let slide2 = require('@/assets/img/slide/main_slide2.png');
let slide3 = require('@/assets/img/slide/main_slide3.png');
export default {
  data () {
    return {
      items: [
        { src: slide1, },
        { src: slide2, },
        { src: slide3, },
      ],
      model: 0,
    }
  },
}
</script>
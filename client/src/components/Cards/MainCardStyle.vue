<template>
  <v-card
      class=" mt-5 relative flex flex-row min-w-0 break-words mb-0 "
      style="background: none !important; border: none;"
      elevation="0"
  >
    <div class="flex-auto p-4" v-for="(item, i) in items" :key="i"
         style="background: none !important"
    >
      <div class="flex flex-wrap"
           style="background: none !important">

        <v-img
            :src="item.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            width="5vw"
            height="200px"
            style="background: none !important; border-radius: 10px;"
        >
          <v-card-title v-text="item.title" class="text-xs "></v-card-title>
        </v-img>

      </div>
    </div>
  </v-card>
</template>

<script>
import lego1 from "@/assets/img/product-lego1.jpg"
import lego2 from "@/assets/img/product-lego2.jpg"
import lego3 from "@/assets/img/product-lego3.jpg"
import bearbrick1 from "@/assets/img/bg-bearbrick1.jpg"
import bearbrick2 from "@/assets/img/bg-bearbrick3.jpg"
import bearbrick3 from "@/assets/img/bg-bearbrick4.jpg"
export default {
  data(){
    return{
      lego1,
      lego2,
      lego3,
      bearbrick1,
      bearbrick2,
      items:[{
        src: lego1,
        title:"@deri_s234443",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        src: lego2,
        title:"@dongdong",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        src: lego3,
        title:"@hahahahahaha",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      }, {
        src: bearbrick1,
        title:"@______abc",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        src: bearbrick2,
        title:"@30389478",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        src: bearbrick3,
        title:"@sdfsg4",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },]
    }
  },
}
</script>
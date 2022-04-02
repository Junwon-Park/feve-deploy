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
export default {
  data(){
    return{
      items:[{
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        title:"@deri_s234443",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        title:"@deri_s234443",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        title:"@deri_s234443",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      }, {
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        title:"@deri_s234443",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        title:"@deri_s234443",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },{
        src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        title:"@deri_s234443",
        desc:"설명중ㅇㅇㅇ",
        price: 550000,
      },]
    }
  }
}
</script>
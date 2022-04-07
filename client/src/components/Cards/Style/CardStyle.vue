<template>
  <v-card
      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0"
      style="background: none !important; border: none;"
      elevation="0"
  >
      <div class="flex"
         style="background: none !important"
    >
        <div class="relative w-full max-w-full flex-grow flex-1">
          <div class="w-full mb-5 mx-auto"  style="overflow: hidden; min-width:250px; min-height: 250px; width:20rem; height: 20rem;">
            <v-img
            :src="src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            width="100%"
            height="100%"
            style="background: none !important; border-radius: 10px;"
        >
              <v-card-title v-text="title" class="text-xs "></v-card-title>
            </v-img>
          </div>
        </div>
      </div>
  </v-card>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    src: String,
    title:String,
    desc:String,
    price: Number,
  }
}
</script>
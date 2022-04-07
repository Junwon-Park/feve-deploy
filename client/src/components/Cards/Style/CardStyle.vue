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
          <div class="relative w-full mb-5 mx-auto relative overflow-hidden"  style="overflow: hidden; min-width:250px; min-height: 250px; width:20rem; height: 20rem;">
            <img
            :src="imageUrl+POST_PIC" crossorigin
            class="white--text align-end"
            style="object-fit: cover; border-radius: 10px; width: 100%; height: 100% !important;"
        >
          <div class="rounded-lg"
          style="width:100%; height:100%; background: rgba(0,0,0,0.5); position: absolute; top: 0; left: 0;"
          ></div>
          </div>
          <v-card-title v-text="'@'+USER_ID" class="bottom-1 absolute text-xs text-white -mt-12"></v-card-title>
        </div>
      </div>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      imageUrl : this.$store.getters.ServerUrl + '/getStyleImage?imageName=',
    }
  },
  props:{
    POST_KEY: {
      type: Number,
      default: 0,
    },
    POST_CONTENS:{
      type: String,
      default: "Lego Firehouse Headquarters",
    },
    POST_WDATE:{
      type: String,
    default: "Lego Firehouse Headquarters",
    },
    POST_PIC:{
      type: String,
    default: "Lego Firehouse Headquarters",
    },
    USER_KEY: {
      type: Number,
    default: 0,
    },
    USER_ID: {
      type: String,
    default: "Lego Firehouse Headquarters",
    },
  },
  created(){
    console.log(this.$props.POST_PIC)
  }
}
</script>
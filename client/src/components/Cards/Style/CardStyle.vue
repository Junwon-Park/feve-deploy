<template>
  <v-card
      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0"
      style="background: none !important; border: none;"
      elevation="0"
      @click="goView(`${USER_KEY}`)"
  >
      <div class="flex flex-col"
         style="background: none !important"
    >
        <div class="relative w-full max-w-full flex-grow flex-1">
          <div class="relative w-full mb-5 mx-auto relative overflow-hidden"  style="overflow: hidden; min-width:250px; min-height: 250px; width:20rem; height: 20rem;">

            <div class="rounded-lg"
                 style="width:100%; height:100%; background: rgba(0,0,0,0.5); position: absolute; top: 0; left: 0;"
            ></div>
            <img
            :src="imageUrl+POST_PIC" crossorigin
            class="white--text align-end"
            style="object-fit: cover; border-radius: 10px; width: 100%; height: 100% !important;"
        >
            <v-card-title v-text="'@'+USER_ID" class="left-0 bottom-0 absolute text-xs text-white -mt-12"></v-card-title>

          </div>
        </div>
        <div class="relative mx-auto  max-w-full flex-grow flex-1" style="width:320px;">
          <div class="relative  mb-5 mx-auto relative overflow-hidden">
            <span class="text-xs text-blueGray-400 font-semibold" v-for="(ht, idx) in hashtag" :key="idx">#{{ ht }} </span>
          </div>
        </div>
      </div>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      user_key:JSON.parse(localStorage.getItem('userKey')),
      imageUrl : this.$store.getters.ServerUrl + '/getStyleImage?imageName=',
      hashtag:[],
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
    HASHTAG_TITLE:{
      type: String,
      default: "",
    },
  },
  watch:{
    HASHTAG_TITLE: function(){
      this.makeHashtagArray()
    }
  },
  created(){
    this.makeHashtagArray()
  },
  methods:{
    goView(USER_KEY){
      //console.log("USER_KEY:::::::::",USER_KEY)
        this.$router.push({path:'./style',
          name:'StyleView',
          params:{
            USER_KEY:USER_KEY}
        });
    },

    makeHashtagArray(){
      let that = this;
      if( that.HASHTAG_TITLE != null ) {
        let hashtagArray = that.HASHTAG_TITLE.split(',');
        that.hashtag=hashtagArray;
      } else {
        return
      }
    },
  },
}
</script>
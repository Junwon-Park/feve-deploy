<template>
    <div class="grid ">
      <h1>관심 상품</h1>
      
      <mypage-favorite-list-slot 
      v-for="(item, i) in list" :key="i"
      :item="item"/>
    </div>
</template>

<script>
import MypageFavoriteListSlot from '../../components/Cards/Mypage/MypageFavoriteListSlot.vue';

  export default {
    components:{
      MypageFavoriteListSlot,
    },
    data () {
      return {
        list:[],
      }
    },
    created(){
      this.getFavoriteList();
    },
    methods: {
      getFavoriteList(){
        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/favoriteList', {
          USER_KEY : '1', //로그인과 연동시키기
        })
        .then((result) => {
          //console.log(result.data);
          this.list = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
  }
</script>"
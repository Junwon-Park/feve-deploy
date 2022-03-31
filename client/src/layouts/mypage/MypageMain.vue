<template>
  <div style="margin-left:18%; max-width:60%; margin-bottom:10%">
    <mypage-simple-user-info :userInfo="userInfo" style="width:15rem;"/>

    <h2 class="mt-20 font-bold">구매 내역</h2>
    <mypage-simple-count-list :counts="buyCounts"/>

    <h2 class="font-bold">판매 내역</h2>
    <mypage-simple-count-list :counts="sellCounts"/>

    <h2 class="font-bold">관심 상품</h2>
    <mypage-simple-favorite-list :items="favoriteProducts"/>

  </div>
</template>

<script>
import MypageSimpleUserInfo from '@/components/Cards/Mypage/MypageSimpleUserInfo.vue';
import MypageSimpleCountList from '@/components/Cards/Mypage/MypageSimpleCountList.vue';
import MypageSimpleFavoriteList from '@/components/Cards/Mypage/MypageSimpleFavoriteList.vue';

export default {
  components: {
    MypageSimpleUserInfo,
    MypageSimpleCountList,
    MypageSimpleFavoriteList,
  },
  data() {
    return {
      userInfo:{
        USER_NAME:'', 
        USER_MAIL:'',
      },
      buyCounts:[],
      sellCounts:[],
      favoriteProducts: [
        {
          PRODUCT_BRAND:'',
          PRODUCT_NAME:'',
          PRODUCT_ORIPRICE:'',
          PRODUCT_PIC:'',
        },
      ],
    }
  },
  created() {
    this.getSimpleUserInfo();
    this.getBuyCounts();
    this.getSellCounts();
    this.getSimpleFavorites();
  },
  methods: {
    getSimpleUserInfo(){
      this.$axios.post('http://localhost:8080/mypage/getSimpleUserInfo', {
        USER_KEY : '1', //로그인과 연동시키기
      })
      .then((result) => {
        // console.log(result.data);
        this.userInfo = result.data;
        // console.log(this.userInfo);
      })
      .catch((error) => {
        console.log(error);
      })
    },
    getBuyCounts(){
      this.$axios.post('http://localhost:8080/mypage/getbuyCounts', {
        USER_KEY : '1', //로그인과 연동시키기
      })
      .then((result) => {
        // console.log(result.data);
        this.buyCounts = result.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    getSellCounts(){
      this.$axios.post('http://localhost:8080/mypage/getsellCounts', {
        USER_KEY : '1', //로그인과 연동시키기
      })
      .then((result) => {
        // console.log(result.data);
        this.sellCounts = result.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },
    getSimpleFavorites(){
      this.$axios.post('http://localhost:8080/mypage/getSimpleFavorites', {
        USER_KEY : '1', //로그인과 연동시키기
      })
      .then((result) => {
        //console.log("getSimpleFavorites.result: ", result);
        this.favoriteProducts = result.data;
        //console.log("getSimpleFavorites.favoriteProducts: ", this.favoriteProducts);
      })
      .catch((error) => {
        console.log(error);
      })
    },
  }
};

</script>

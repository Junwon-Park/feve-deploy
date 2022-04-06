<template>
  <div style="margin-left:18%; max-width:60%; margin-bottom:10%">
    <mypage-simple-user-info :userInfo="userInfo" />

    <h2 class="mt-20 font-bold">구매 내역</h2>
    <mypage-simple-count-list :counts="buyCounts" :state=1 />

    <h2 class="font-bold">판매 내역</h2>
    <mypage-simple-count-list :counts="sellCounts" :state=2 />

    <h2 class="font-bold">관심 상품</h2>
    <mypage-simple-favorite-list :items="favoriteList" :state=3 />
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
      favoriteList: [],
    }
  },
  created() {
    this.getSimpleUserInfo();
    this.getBuyCounts();
    this.getSellCounts();
    this.getSimpleFavoriteList();
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
      this.$axios.post('http://localhost:8080/mypage/getBuyCounts', {
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
      this.$axios.post('http://localhost:8080/mypage/getSellCounts', {
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
    getSimpleFavoriteList(){
      this.$axios.post(this.$store.getters.ServerUrl + '/mypage/getSimpleFavoriteList', {
          USER_KEY : '1', //로그인과 연동시키기
        })
        .then((result) => {
          //console.log(result.data);
          this.favoriteList = result.data;
          
          for(let item of this.favoriteList)
             item.MIN_PRICE = (item.MIN_PRICE == null) ? '-' : item.MIN_PRICE.toLocaleString('ko-KR') + "원";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onMoreClicked(state){
    //   console.log("onMoreClicked: ", state);
    //   EventBus.$emit("mypageViewStateChange", state); //1:buyList 2:sellList
    // }
  }
};

</script>

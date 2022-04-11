<template>
  <div style="margin-left:18%; max-width:60%; margin-bottom:10%">
    <mypage-simple-user-info :userInfo="userInfo" />

    <h2 class="mt-20 font-bold">구매 내역</h2>
    <mypage-simple-count-list :counts="buyCounts" :state=1 />

    <h2 class="font-bold">판매 내역</h2>
    <mypage-simple-count-list :counts="sellCounts" :state=2 />
  
    <v-card-actions style="margin-left:42%" >
      <h2 class="font-bold" style="margin-left: -76%;">관심 상품</h2>
      <v-btn
          outlined
          rounded
          text
          @click="onMoreClicked(3, $event)"
          style="margin-left:auto"
        >
          더보기
      </v-btn>
    </v-card-actions>

    <mypage-simple-favorite-list :items="favoriteList" v-if="favoriteList.length > 0"/>
    <div v-else style="text-align:center; margin-top:4rem;">
      관심상품이 없습니다.
    </div>
  </div>
</template>

<script>
import MypageSimpleUserInfo from '@/components/Cards/Mypage/MypageSimpleUserInfo.vue';
import MypageSimpleCountList from '@/components/Cards/Mypage/MypageSimpleCountList.vue';
import MypageSimpleFavoriteList from '@/components/Cards/Mypage/MypageSimpleFavoriteList.vue';
import {EventBus} from "@/common/EventBus.js"

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
    getUserKey()
    {
      return localStorage.getItem('userKey');
    },

    getSimpleUserInfo(){
      this.$axios.post('http://localhost:8080/mypage/getSimpleUserInfo', {
        USER_KEY : this.getUserKey(),
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
        USER_KEY : this.getUserKey(),
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
        USER_KEY : this.getUserKey(),
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
          USER_KEY : this.getUserKey(),
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
    onMoreClicked(state, event){
      event.stopPropagation();
      EventBus.$emit("mypageViewStateChange", state);
    }
    // onMoreClicked(state){
    //   console.log("onMoreClicked: ", state);
    //   EventBus.$emit("mypageViewStateChange", state); //1:buyList 2:sellList
    // }
  }
};

</script>

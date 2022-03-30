<template>
  <div style="margin-left:18%; max-width:60%; margin-bottom:10%">
    <mypage-simple-user-info style="width:15rem;"/>

    <h2 class="mt-20 font-bold">구매 내역</h2>
    <mypage-simple-buy-list/>

    <h2 class="font-bold" style="margin-left:18%;">판매 내역</h2>
    <mypage-simple-buy-list/>

    <h2 class="font-bold" style="margin-left:18%;">관심 상품</h2>
    <mypage-simple-favorite-list/>

  </div>
</template>

<script>
import MypageSimpleUserInfo from '@/components/Cards/Mypage/MypageSimpleUserInfo.vue';
import MypageSimpleBuyList from '@/components/Cards/Mypage/MypageSimpleBuyList.vue';
import MypageSimpleFavoriteList from '@/components/Cards/Mypage/MypageSimpleFavoriteList.vue';

export default {
  components: {
    MypageSimpleUserInfo,
    MypageSimpleBuyList,
    MypageSimpleFavoriteList,
  },
  data() {
    return {
    }
  },
  
};

</script>

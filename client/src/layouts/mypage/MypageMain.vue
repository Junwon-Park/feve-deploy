<template>
  <div style="max-width:60%; margin-left:18%;">
    <mypage-simple-user-info class="mt-20"/>

    <h2 class="mt-20 font-bold">구매 내역</h2>
    <mypage-simple-buy-list/>

    <h2 class="font-bold">판매 내역</h2>
    <mypage-simple-buy-list/>

    <h2 class="font-bold">관심 상품</h2>
    <mypage-simple-favorite-list class="mb-24"/>

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

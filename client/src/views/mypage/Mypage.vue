<template>
  <div class="mt-7rem ml-14rem">
    <mypage-sidebar :currentViewState="currentViewState" @onViewStateChanged="onViewStateChanged"/>

    <div style="margin-left: 13rem;" class="sm:mt-40 md:mt-40">
        <mypage-main v-if= "currentViewState === 0"/>
      
        <mypage-buy-list v-else-if= "currentViewState === 1"
        style="margin:auto; max-width:80%; margin-bottom:10%;" />

        <mypage-sell-list v-else-if= "currentViewState === 2"
        style="margin:auto; max-width:80%; margin-bottom:10%;" />
        
        <mypage-favorite-list v-else-if= "currentViewState === 3"
        style="margin:auto; max-width:80%; margin-bottom:10%;" />

        <mypage-profile v-else-if= "currentViewState === 4"
        style="margin:auto; max-width:80%; margin-bottom:10%;" />
        <CardLineChart v-else/>
    </div>

  </div>
</template>
<script>
import MypageSidebar from "@/components/Sidebar/MypageSidebar.vue";
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import MypageMain from '@/layouts/mypage/MypageMain.vue';
import MypageBuyList from '@/layouts/mypage/MypageBuyList.vue';
import MypageSellList from '@/layouts/mypage/MypageSellList.vue';
import MypageFavoriteList from '@/layouts/mypage/MypageFavoriteList.vue';
import MypageProfile from '../../layouts/mypage/MypageProfile.vue';

export default {
  components: {
    MypageSidebar,
    CardLineChart,
    MypageMain,
    MypageBuyList,
    MypageSellList,
    MypageFavoriteList,
    MypageProfile,
  },
  data() {
    return {
      currentViewState : 0,
    }
  },
  methods:{
    onViewStateChanged(viewState){
      this.currentViewState = viewState;
    },
  }
};

</script>

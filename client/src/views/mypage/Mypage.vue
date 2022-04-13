<template>
  <div class="mt-48 ml-14rem" style="min-height: 100vh">
    <mypage-sidebar :currentViewState="currentViewState" @onViewStateChanged="onViewStateChanged"/>

    <div style="margin-left: 13rem;" class="">
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
import {EventBus} from "@/common/EventBus.js"

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
      timeOut:0
    }
  },
  created(){
    EventBus.$on("mypageViewStateChange", this.onViewStateChanged);
  },
  methods:{
    onViewStateChanged(viewState){
      this.currentViewState = viewState;
      this.scrollToTop();
    },
    scrollToTop() {
      if(this.currentViewState == 0)
      {
        window.scrollTo(0,0);
        return;
      }

      if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
          window.scrollBy(0,-50);
          this.timeOut=setTimeout(this.scrollToTop,10);
      }
      else clearTimeout(this.timeOut);
    },
  }
};

</script>

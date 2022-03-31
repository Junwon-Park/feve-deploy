<template>
  <div class="mt-7rem ml-14rem">
    <mypage-sidebar :currentViewState="currentViewState" @onViewStateChanged="onViewStateChanged"/>

    <div style="margin-left: 13rem;" class="sm:mt-40 md:mt-40">
        <mypage-main v-if= "currentViewState === 0"/>

        <mypage-buy-list v-else-if= "currentViewState === 1"
        style="margin:auto; max-width:80%; margin-bottom:10%;" />
        
        <CardLineChart v-else/>
    </div>
  </div>
</template>
<script>
import MypageSidebar from "@/components/Sidebar/MypageSidebar.vue";
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import MypageMain from '@/layouts/mypage/MypageMain.vue';
import MypageBuyList from '@/components/Cards/Mypage/MypageBuyList.vue';

export default {
  components: {
    MypageSidebar,
    CardLineChart,
    MypageMain,
    MypageBuyList
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

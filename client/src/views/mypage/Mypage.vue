<template>
  <div class="mt-7rem ml-14rem">
    <MypageSidebar :currentViewState="currentViewState" @onViewStateChanged="onViewStateChanged"/>

    <div style="margin-left: 13rem;">
      <div v-if= "currentViewState === 0">
        <mypage-main style="margin-top:13%;"/>
        <h1>{{currentViewState}}</h1>
      </div>
      <div v-else-if= "currentViewState === 1">
        <mypage-buy-list style="margin:auto; max-width:80%; margin-bottom:10%; margin-top:13%;" />
        <h1>{{currentViewState}}</h1>
      </div>
      <div v-else>
        <CardLineChart/>
        <h1>{{currentViewState}}</h1>
      </div>
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
    MypageBuyList,
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

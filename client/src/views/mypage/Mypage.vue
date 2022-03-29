<template>
  <div class="mt-7rem ml-14rem">
    <MypageSidebar :currentViewState="currentViewState" @onViewStateChanged="onViewStateChanged"/>

    <div style="margin-left: 13rem; display: flex;">
      <div v-if= "currentViewState === 0" style="width: 100%">
        <mypage-main/>
        <h1>{{currentViewState}}</h1>
      </div>
      <div v-else-if= "currentViewState === 1"  style="width:100%;">
        <mypage-simple-buy-list style="width:100%; justify-content:center; align-items: center" />
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

export default {
  components: {
    MypageSidebar,
    CardLineChart,
    MypageMain,
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

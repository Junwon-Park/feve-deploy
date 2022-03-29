<template>
  <div class="flex mt-7rem ml-14rem">
    <MypageSidebar :currentViewState="currentViewState" @onViewStateChanged="onViewStateChanged"/>

    <div>
      <div v-if= "currentViewState === 0">
        <mypage-simple-user-info
        class="mt-48 ml-7rem"/>
        <mypage-simple-buy-list/>
        <h1>{{currentViewState}}</h1>
      </div>
      <div v-else-if= "currentViewState === 1">
        <mypage-simple-buy-list/>
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
import MypageSimpleUserInfo from '../../components/Cards/Mypage/MypageSimpleUserInfo.vue';
import MypageSimpleBuyList from '../../components/Cards/Mypage/MypageSimpleBuyList.vue';

export default {
  components: {
    MypageSidebar,
    CardLineChart,
    MypageSimpleUserInfo,
    MypageSimpleBuyList,
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

<template>
  <div class="mt-7rem ml-14rem">
    <MypageSidebar :currentViewState="currentViewState" @onViewStateChanged="onViewStateChanged"/>
      <div v-if= "currentViewState === 0">
        <CardLineChart/>
        <h1>{{currentViewState}}</h1>
      </div>
      <div v-else-if= "currentViewState === 1">
        <CardTable/>
        <h1>{{currentViewState}}</h1>
      </div>
      <div v-else>
        <CardLineChart/>
        <h1>{{currentViewState}}</h1>
      </div>
  </div>
</template>
<script>
import MypageSidebar from "@/components/Sidebar/MypageSidebar.vue";
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardTable from "@/components/Cards/CardTable.vue";

export default {
  components: {
    MypageSidebar,
    CardLineChart,
    CardTable,
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

<template>
  <div>
    <mypage-top-count-tap :items="counts" />
    <mypage-period-setter/>
  </div>
</template>

<script>
import MypageTopCountTap from '@/components/Cards/Mypage/MypageTopCountTap.vue';
import MypagePeriodSetter from '../../components/Cards/Mypage/MypagePeriodSetter.vue';

  export default {
    components:{
      MypageTopCountTap,
      MypagePeriodSetter,
    },
    data () {
      return {
        counts: [
        {
          tapName:'구매입찰',
          count:0,
        },
        {
          tapName:'진행 중',
          count:0,
        },
        {
          tapName:'종료',
          count:0,
        },
      ],
        startDate:'',
        endDate:'',
      }
    },
    methods: {
      onSerchClicked(){
      },
    },
  }
</script>"
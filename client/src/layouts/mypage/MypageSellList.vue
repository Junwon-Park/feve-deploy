<template>
  <div>
    <mypage-top-count-tap :counts="counts" :tapNames="tapNames" @onTapChanged="onTapChanged"/>
    <mypage-period-setter @onSearchClicked="onSearchClicked"/>
  </div>
</template>

<script>
import MypageTopCountTap from '@/components/Cards/Mypage/MypageTopCountTap.vue';
import MypagePeriodSetter from '@/components/Cards/Mypage/MypagePeriodSetter.vue';


//데이터 호출 url과 tapName만 관리해주면
// buyList, sellList 상관없이 쓸 수 있음.
  export default {
    components:{
      MypageTopCountTap,
      MypagePeriodSetter,
    },
    data () {
      return {
        curTapIdx:0,
        tapNames:['판매입찰', '진행 중', '종료'],
        counts: [],
        startDate:'',
        endDate:'',
      }
    },
    created() {
      this.getSellCounts();
    },
    methods: {
      getSellCounts(){
        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/sellList/getSellCounts', {
          USER_KEY : '1', //로그인과 연동시키기
        })
        .then((result) => {
          //console.log(result.data);
          this.counts = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
      },

      onTapChanged(idx)
      {
        this.curTapIdx = idx;
      },

      onSearchClicked(startDate, endDate){
        let url = this.$store.getters.ServerUrl;
        switch(this.curTapIdx)
        {
          case 1: //진행 중
            url+= '/mypage/sellList/getProgressSellList'
            break;
          case 2: // 종료
            url+= '/mypage/sellList/getDoneSellList'
            break;
          default:
            url+= '/mypage/sellList/getWaitSellList';
            break;
        }

        this.$axios.post(url, {
          USER_KEY : '1', //로그인과 연동시키기
          startDate : startDate,
          endDate : endDate,
        })
        .then((result) => {
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
      },
    },
  }
</script>"
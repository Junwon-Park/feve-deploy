<template>
  <div>
    <mypage-top-count-tap :counts="counts" :tapNames="tapNames" @onTapChanged="onTapChanged"/>
    <mypage-period-setter @onSearchClicked="onSearchClicked"
    class="divide-y-gray"/>
    
    <mypage-list-filter
    :filter="curFilter"
    @onFilterChanged="onFilterChanged"
    @onOrderClicked="onOrderClicked"
    ref="filter"
    class="mt-3 divide-y-b-gray"/>

    <div class="grid ">
        <mypage-list-slot 
        v-for="item in sellList" :key="item.SELL_KEY"
        :item="item"
        :price="item.sell_price"/>
    </div>
  </div>
</template>

<script>
import MypageTopCountTap from '@/components/Cards/Mypage/MypageTopCountTap.vue';
import MypagePeriodSetter from '@/components/Cards/Mypage/MypagePeriodSetter.vue';
import MypageListSlot from '../../components/Cards/Mypage/MypageListSlot.vue';
import MypageListFilter from '../../components/Cards/Mypage/MypageListFilter.vue';

  export default {
    components:{
      MypageTopCountTap,
      MypagePeriodSetter,
      MypageListSlot,
      MypageListFilter,
    },
    data () {
      return {
        curTapIdx:0,
        tapNames:['판매입찰', '진행 중', '종료'],
        counts: [],
        startDate:'',
        endDate:'',
        filters:[
          {
            tapIdx:0,
            filters:["전체", "입찰중", "기한만료"],
            orderableColumns:["판매 희망가", "만료일"],
          },
          {
            tapIdx:1,
            filters:["전체", "발송요청", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "보류", "거래실패"],
            orderableColumns:["상태"],
          },
          {
            tapIdx:2,
            filters:["전체", "배송완료", "취소완료"],
            orderableColumns:["정산일", "상태"],
          }
        ],
        curFilter:'',
        sellList:[],
        sortPriceDir: true, //true:오름차순(1 -> 2-> 3) false:내림차순 (3-> 2-> 1)
        sortDateDir: true,  //true:오름차순 false:내림차순
      }
    },
    created() {
      this.getSellCounts();
      this.curFilter = this.filters[this.curTapIdx];
      // console.log("BuyList.created.curFilter: ", this.curFilter);
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
        this.curFilter = this.filters[idx];
        this.$refs.filter.initSelected();
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
          this.sellList = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
      },

      onOrderClicked(idx){
        // console.log("sellList.onOrderClicked.idx: ", idx);
        if(idx == 0)
          this.sortPrice();
        else if(idx == 1)
          this.sortDate();
        // console.log(this.sellList);
      },
      
      sortPrice(){
        this.sortPriceDir = !this.sortPriceDir;
        // console.log("sortPrice.priceDir: ", this.sortPriceDir);
        if(this.sortPriceDir)
        {
          this.sellList.sort(function(a, b){
            return a.sell_price - b.sell_price;
          });
        }
        else
        {
          this.sellList.sort(function(a, b){
            return b.sell_price - a.sell_price;
          });
        }
      },

      sortDate(){
        this.sortDateDir = !this.sortDateDir;
        console.log("sortDate.sortDateDir: ", this.sortDateDir);
        if(this.sortDateDir)
        {
          this.sellList.sort(function(a, b){
            return Date.parse(a.sell_edate) - Date.parse(b.sell_edate);
          });
        }
        else
        {
          this.sellList.sort(function(a, b){
            return Date.parse(b.sell_edate) - Date.parse(a.sell_edate);
          });
        }
      },

      onFilterChanged(selected){
        console.log("sellList.onFilterChanged.selected: ", selected);
      },
    },
  }
</script>"
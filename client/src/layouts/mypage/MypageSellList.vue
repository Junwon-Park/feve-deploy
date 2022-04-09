<template>
  <div class="w-full">
    <mypage-top-count-tap :counts="counts" :tapNames="tapNames" @onTapChanged="onTapChanged"/>
    <mypage-period-setter @onSearchClicked="onSearchClicked"
      class="divide-y-gray"
    />
    
    <mypage-list-filter
      :filter="curFilter"
      @onFilterChanged="onFilterChanged"
      @onOrderClicked="onOrderClicked"
      ref="filter"
      class="mt-3 divide-y-b-gray"
    />

    <div class="grid ">
      <mypage-list-slot 
        v-for="item in list" :key="item.SELL_KEY"
        :item="item"
        :price="item.sell_price"/>

      <v-pagination
        v-model="curPage"
        :length="totalPage"
        :total-visible="7"
        @input="onPageChanged"
        color="black"
        class="my-4"
      ></v-pagination>
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
            slotStates:["전체", "입찰중", "기한만료"],
            orderableColumns:["판매 희망가", "만료일"],
          },
          {
            tapIdx:1,
            slotStates:["전체", "발송요청", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "보류", "거래실패"],
            orderableColumns:["상태"],
          },
          {
            tapIdx:2,
            slotStates:["전체", "배송완료", "취소완료"],
            orderableColumns:["정산일", "상태"],
          }
        ],
        curFilter:'',
        getCountUrl:'',
        getListUrl:'',
        list:[],
        sortPriceDir: true, //true:오름차순(1 -> 2-> 3) false:내림차순 (3-> 2-> 1)
        sortDateDir: true,  //true:오름차순 false:내림차순

        curPage:1,
        totalPage:0,
        slotCountPerPage:10,
        rowStart:0,
      }
    },
    created() {
      this.getSellCounts();
      this.curFilter = this.filters[this.curTapIdx];
      this.setUrl();
      // console.log("sellList.created.curFilter: ", this.curFilter);
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

        this.tapChangedInit();
      },

      tapChangedInit(){
        this.list.length = 0;
        this.totalPage = 0;
        this.curPage = 1;
        this.rowStart = 0;
        this.setRowStart();
        this.setUrl();
      },

      setRowStart(){
        this.rowStart = (this.curPage-1) * this.slotCountPerPage;
      },

      setUrl()
      {
        switch(this.curTapIdx)
        {
          case 1: //진행 중
          {
            this.getCountUrl = this.$store.getters.ServerUrl + '/mypage/sellList/getProgressSellListCount';
            this.getListUrl =  this.$store.getters.ServerUrl + '/mypage/sellList/getProgressSellList';
          }
            break;
          case 2: // 종료
          {
            this.getCountUrl = this.$store.getters.ServerUrl + '/mypage/sellList/getDoneSellListCount';
            this.getListUrl =  this.$store.getters.ServerUrl + '/mypage/sellList/getDoneSellList';
          }
            break;
          default:
          {
            this.getCountUrl = this.$store.getters.ServerUrl + '/mypage/sellList/getWaitSellListCount';
            this.getListUrl =  this.$store.getters.ServerUrl + '/mypage/sellList/getWaitSellList';
          }
            break;
        }
      },

      onSearchClicked(startDate, endDate){
        this.startDate = startDate;
        this.endDate = endDate;
        
        this.curPage = 1;
        this.rowStart = 0;
        this.setRowStart();
        
        this.getListCount();
        this.getList();
      },

      onPageChanged(page){
        // console.log("onPageChanged.page: ", page);
        this.curPage = page;
        this.setRowStart();
        this.getList();
      },

      getListCount(){
        this.$axios.post(this.getCountUrl, {
          USER_KEY : '1', //로그인과 연동시키기
          startDate : this.startDate,
          endDate : this.endDate,
        })
        .then((result) => {
          console.log(result.data);
          this.totalPage = Math.ceil(result.data / this.slotCountPerPage);  
        })
        .catch((error) => {
          console.log(error);
        });
      },

      getList(){
        console.log("getList", this.rowStart, this.slotCountPerPage);
        this.$axios.post(this.getListUrl, {
          USER_KEY : '1', //로그인과 연동시키기
          startDate : this.startDate,
          endDate : this.endDate,
          limtStart: this.rowStart,
          limtCount: this.slotCountPerPage,
        })
        .then((result) => {
          console.log(result.data);
          this.list = result.data;
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
        // console.log(this.list);
      },
      
      sortPrice(){
        this.sortPriceDir = !this.sortPriceDir;
        // console.log("sortPrice.priceDir: ", this.sortPriceDir);
        if(this.sortPriceDir)
        {
          this.list.sort(function(a, b){
            return a.sell_price - b.sell_price;
          });
        }
        else
        {
          this.list.sort(function(a, b){
            return b.sell_price - a.sell_price;
          });
        }
      },

      sortDate(){
        this.sortDateDir = !this.sortDateDir;
        console.log("sortDate.sortDateDir: ", this.sortDateDir);
        if(this.sortDateDir)
        {
          this.list.sort(function(a, b){
            return Date.parse(a.sell_edate) - Date.parse(b.sell_edate);
          });
        }
        else
        {
          this.list.sort(function(a, b){
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
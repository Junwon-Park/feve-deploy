<template>
  <div class="w-full">
    <mypage-top-count-tap :counts="counts" :tapNames="tapNames" @onTapChanged="onTapChanged"/>
    <mypage-period-setter @onSearchClicked="onSearchClicked"
      class="divide-y-gray"
    />
    
    <mypage-list-filter
      :filter="curFilter"
      ref="listFilter"
      @onFilterChanged="onFilterChanged"
      @onOrderClicked="onOrderClicked"
      class="mt-3 divide-y-b-gray"
    />

    <div class="grid" v-if="list.length > 0">
      <mypage-list-slot 
        v-for="item in list" :key="item.SELL_KEY"
        :item="item"
        :price="item.sell_price"
        :eDate="item.strEDate"/>

      <v-pagination
        v-model="curPage"
        :length="totalPage"
        :total-visible="7"
        @input="onPageChanged"
        color="black"
        class="my-4"
      ></v-pagination>
    </div>
    <div v-else style="text-align:center; margin-top:4rem;">
      검색 결과가 없습니다.
    </div>
  </div>
</template>

<script>
import MypageTopCountTap from '@/components/Cards/Mypage/MypageTopCountTap.vue';
import MypagePeriodSetter from '@/components/Cards/Mypage/MypagePeriodSetter.vue';
import MypageListSlot from '../../components/Cards/Mypage/MypageListSlot.vue';
import MypageListFilter from '../../components/Cards/Mypage/MypageListFilter.vue';
import moment from 'moment'

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
            orderTexts:["판매 희망가", "만료일"],
            orderColumn:["sell_price", "sell_edate"],
          },
          {
            tapIdx:1,
            slotStates:["전체", "발송요청", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "보류", "거래실패"],
            orderTexts:["상태"],
            orderColumn:["sell_status"],
          },
          {
            tapIdx:2,
            slotStates:["전체", "배송완료", "취소완료"],
            orderTexts:["상태"],
            orderColumn:["sell_status"],
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

        reqObj:Object,
        selectedFilterIdx:0,

        curOrderIdx: -1,
        orderColumn: String,
        strOrderDirs:["ASC","DESC"],
        orderDir: 0,
      }
    },
    created() {
      moment.locale('ko-KR');

      this.getSellCounts();
      this.curFilter = this.filters[this.curTapIdx];
      this.setUrl();
      // console.log("sellList.created.curFilter: ", this.curFilter);
    },
    methods: {
      getUserKey()
      {
        return localStorage.getItem('userKey');
      },
      getSellCounts(){
        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/sellList/getSellCounts', {
          USER_KEY : this.getUserKey(),
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
        
        this.selectedFilterIdx = 0;
        this.initOrder();

        this.list.length = 0;
        this.totalPage = 0;
        this.goToFirstPage();
        this.setUrl();
      },

      goToFirstPage(){
        this.curPage = 1;
        this.rowStart = 0;
        this.setRowStart();
      },

      setRowStart(){
        this.rowStart = (this.curPage-1) * this.slotCountPerPage;
      },

      initOrder(){
        this.curOrderIdx = -1,
        this.orderColumn ='';
        this.orderDir = 0;

        this.$refs.listFilter.initOrder();
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
        
        this.initOrder();
        this.goToFirstPage();
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
          USER_KEY : this.getUserKey(),
          startDate : this.startDate,
          endDate : this.endDate,
          state : this.selectedFilterIdx,
        })
        .then((result) => {
          // console.log(result.data);
          this.totalPage = Math.ceil(result.data / this.slotCountPerPage);  
        })
        .catch((error) => {
          console.log(error);
        });
      },

      getList(){
        //console.log("getList", this.rowStart, this.slotCountPerPage);
        this.$axios.post(this.getListUrl, {
          USER_KEY    : this.getUserKey(),
          startDate   : this.startDate,
          endDate     : this.endDate,
          limitStart  : this.rowStart,
          limitCount  : this.slotCountPerPage,
          state       : this.selectedFilterIdx,
          orderColumn : this.orderColumn,
          orderDir    : this.strOrderDirs[this.orderDir],
        })
        .then((result) => {
          // console.log(result.data);
          this.list = result.data;
          this.initSlotsData();
        })
        .catch((error) => {
          console.log(error);
        });
      },
      
      initSlotsData()
      {
        for(let slot of this.list)
        {
          slot.strEDate = moment(slot.sell_edate).format('ll');

          // 0.대기 1.성공(구매확정) 2.실패(기간만료) 3.진행중 4.실패(구매취소:반품)
          switch(slot.sell_status)
          {
            //성공
            case '1':{ 
              slot.strState = this.curFilter.slotStates[1];
              break;
            }
            //기간지남
            case '2':{
              slot.strState = this.curFilter.slotStates[2];
              break;
            }
            //진행중
            case '3':{
              //temp code - 진행중일때만 임시로 data 가공.
              slot.Product = {
                PRODUCT_BRAND: slot.PRODUCT_BRAND,
                PRODUCT_NAME: slot.PRODUCT_NAME,
                PRODUCT_PIC: slot.PRODUCT_PIC,
              };
              //slotStates:["전체", "발송요청", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "보류", "거래실패"],
              //INSPECTION_STATUS 0:검수 진행중, 1:검수 완료
              if(slot.INSPECTION_STATUS == null) 
              {
                //STATUS Null일때 입고완료로 처리.
                slot.strState = this.curFilter.slotStates[4];
              }
              else if(slot.INSPECTION_STATUS == 0) //검수중
                slot.strState = this.curFilter.slotStates[5];
              else
              {
                //INSPECTION_RESULt 0:불합격, 1:합격
                if(slot.INSPECTION_RESULT == 1) 
                  slot.strState = this.curFilter.slotStates[7];
                else
                {
                  //검수 완료인데 RESULT 없는경우도 다 검수보류로 처리한다.
                  slot.strState = this.curFilter.slotStates[6];
                }
              }
              break;
            }
            case '4':{
              slot.strState = this.curFilter.slotStates[2];
              break;
            }
            //대기중
            default:{
              slot.strState = this.curFilter.slotStates[1];
              break;
            }
          }
        }
      },

      onOrderClicked(idx){
        // console.log("sellList.onOrderClicked.idx: ", idx);
        
        //0:ASC(오름차순) 1:DESC(내림차순)
        if(this.curOrderIdx == idx)
          this.orderDir = (++this.orderDir) % 2;  
        else
          this.orderDir = 0;

        this.curOrderIdx = idx;
        this.orderColumn = this.curFilter.orderColumn[idx];

        //console.log("buyList.onOrderClicked.list: ", this.list);
        if(this.list != null && this.list.length > 0)
        {
          this.goToFirstPage();
          this.getListCount();
          this.getList();
        }
      },
      
      onFilterChanged(selected){
        //console.log("sellList.onFilterChanged.selected: ", selected);
        this.selectedFilterIdx = selected;
        this.goToFirstPage();
        this.getListCount();
        this.getList();
      },
    },
  }
</script>"
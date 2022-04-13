
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
      class="divide-y-b-gray"
    />

    <div class="grid" v-if="list.length > 0">
      <mypage-list-slot 
        v-for="item in list" :key="item.BUY_KEY"
        :item="item"
        :isFromBuy="0"
        :price="item.BUY_PRICE"
        :eDate="item.strEDate"
        @onFinalizeClicked="onFinalizeClicked"
        />

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
      tapNames:['구매입찰', '진행 중', '종료'],
      counts: [],
      startDate:'',
      endDate:'',
      filters:[
        {
          tapIdx:0,
          slotStates: ["전체", "입찰중", "기한만료"],
          orderTexts:["구매 희망가", "만료일"],
          orderColumn:["BUY_PRICE", "BUY_EDATE"],
        },
        {
          tapIdx:1,
          slotStates:["전체", "발송대기", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "배송 중", "거래실패"],
          orderTexts:["상태"],
          orderColumn:["BUY_STATUS"],
        },
        {
          tapIdx:2,
          slotStates:["전체", "구매확정", "취소완료"],
          orderTexts:["구매일", "상태"],
          orderColumn:["BUY_EDATE", "BUY_STATUS"],
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

    this.getBuyCounts();
    this.curFilter = this.filters[this.curTapIdx];
    this.setUrl();
    // console.log("BuyList.created.curFilter: ", this.curFilter);
  },
  methods: {
    getUserKey()
    {
      return localStorage.getItem('userKey');
    },

    getBuyCounts(){
      this.$axios.post(this.$store.getters.ServerUrl + '/mypage/buyList/getBuyCounts', {
        USER_KEY : this.getUserKey(),
      })
      .then((result) => {
        console.log(result.data);
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
      this.getBuyCounts();
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
          this.getCountUrl = this.$store.getters.ServerUrl + '/mypage/buyList/getProgressBuyListCount';
          this.getListUrl =  this.$store.getters.ServerUrl + '/mypage/buyList/getProgressBuyList';
        }
          break;
        case 2: // 종료
        {
          this.getCountUrl = this.$store.getters.ServerUrl + '/mypage/buyList/getDoneBuyListCount';
          this.getListUrl =  this.$store.getters.ServerUrl + '/mypage/buyList/getDoneBuyList';
        }
          break;
        default:
        {
          this.getCountUrl = this.$store.getters.ServerUrl + '/mypage/buyList/getWaitBuyListCount';
          this.getListUrl =  this.$store.getters.ServerUrl + '/mypage/buyList/getWaitBuyList';
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
      //console.log("onPageChanged.page: ", page);
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
        console.log(result.data);
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
        console.log(result.data);
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
        slot.strEDate = moment(slot.BUY_EDATE).format('ll');

          //if(slot.sell_status != '0' && slot.sell_status !='2')
          {
            //temp code - 임시로 data 가공.(직접쿼리 쓴것과 sequelize쓴거랑 데이터 형식이 다르게 옴)
              slot.Product = {
                PRODUCT_BRAND: slot.PRODUCT_BRAND,
                PRODUCT_NAME: slot.PRODUCT_NAME,
                PRODUCT_PIC: slot.PRODUCT_PIC,
              };
          }

        // 0.대기 1.성공(구매확정) 2.실패(기간만료) 3.진행중 4.실패(구매취소:반품)
        switch(slot.BUY_STATUS)
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
            //slotStates:["전체", "발송대기", "발송완료", "입고대기", "입고완료", "검수 중", "검수보류","검수합격", "배송 중", "거래실패"],
            //INSPECTION_STATUS 0:검수 진행중, 1:검수 완료
            if(slot.INSPECTION_STATUS == null) 
            {
              //STATUS Null일때 발송대기로 처리.
              slot.strState = this.curFilter.slotStates[1];
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
      // console.log("buyList.onOrderClicked.idx: ", idx);
      
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
      //console.log("buyList.onFilterChanged.selected: ", selected);
      this.selectedFilterIdx = selected;
      this.goToFirstPage();
      this.getListCount();
      this.getList();
    },

    onFinalizeClicked(slot, decision){
      //console.log("onAcceptClicked().buy_key:", buy_key, "decision: ", decision);
      this.$axios.post(this.$store.getters.ServerUrl + '/mypage/buyList/finalize', {
        tableName : slot.TABLE_NAME,
        key : slot.BUY_KEY,
        decision: decision,
      })
      .then((result) => {
        console.log(result.data);
        //if(result.data[0] == 1)
        {
          if(decision == 0)
            alert("구매 확정 하셨습니다. 감사합니다.");
          else
            alert("구매 취소 하셨습니다.");

          this.getBuyCounts();
          this.goToFirstPage();
          this.getListCount();
          this.getList();
        }
        // else
        // {
        //   alert("알 수 없는 에러 발생. 다시 시도 해주세요.");
        // }
      })
      .catch((error) => {
        console.log(error);
      });
    },
  },
}
</script>"
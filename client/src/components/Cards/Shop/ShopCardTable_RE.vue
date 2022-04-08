<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            최근 거래 내역
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <v-tabs fixed-tabs>
        <v-tab @click="showRecentTransaction">체결 거래</v-tab>
        <v-tab @click="showSellTable">판매 입찰</v-tab>
        <v-tab @click="showBuyTable">구매 입찰</v-tab>
      </v-tabs>
     
      <table class="items-center w-full bg-transparent border-collapse" name="recentTransaction">
        <thead>
          <tr  v-show="RT">
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              거래가
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              거래일
            </th>
          </tr>
          <tr  v-show="ST">
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              판매희망가
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              수량
            </th>
          </tr>
          <tr v-show="BT">
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              구매희망가
            </th>
            <th
              class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center"
              :class="[
                color === 'light'
                  ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                  : 'bg-emerald-800 text-emerald-300 border-emerald-700',
              ]"
            >
              수량
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-show="RT"  v-for="(item,i) in PRICES" :key="i" v-bind="item" style="width:50%;">
              <td 
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              {{item.SELL_PRICE}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              {{item.SELL_EDATE.substring(0,10)}}
            </td>
          </tr>
          <tr v-show="ST"  v-for="(item,i) in arr" :key="`A-${i}`" v-bind="item" style="width:50%;">
              <td 
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              {{item.SELL_PRICE}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              {{item.SELL_COUNT}}
            </td>
          </tr>
          <tr v-show="BT"  v-for="(item,i) in arr2" :key="`B-${i}`" v-bind="item" style="width:50%;">
              <td 
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              {{item.BUY_PRICE}}
            </td>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
            >
              {{item.BUY_COUNT}}
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      RT: true,
      BT: false,
      ST: false,
      // BUY_PRICE:'',
      // BUY_COUNT:''
    };
  },
  props: {
    color: {
      default: "light",
      validator: function (value) {
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
    PRICES:[],
    arr:[],
    arr2:[]
  },
  
  methods:{
    showRecentTransaction:function(){
      this.RT = true;
      this.ST = false;
      this.BT = false; 
    },
    showSellTable:function(){
      this.ST = true;
      this.RT = false;
      this.BT = false;
    },
    showBuyTable:function(){
      this.BT = true;
      this.ST = false;
      this.RT = false;
    }
  }
};
</script>

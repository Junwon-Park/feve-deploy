<template>
    <div>
      <ul class="mt-6 mb-2">
        <li class="text-gray-400 -ml-4" style="font-size: 0.75rem;">
          한 번에 조회 가능한 기간은 최대 6개월입니다.
        </li>
        <li class="text-gray-400 -ml-4" style="font-size: 0.75rem;">
          기간별 조회 결과는 입찰일 기준으로 노출됩니다
        </li>
      </ul>

<!-- <select v-model="formData[word.name]" :name="word.name">
    <option v-for="(option, index) in word.fieldProps.opts" :key="index" :value="option.value" :strSelected="index === 0 ? 'strSelected' : ''">
        {{ option.value }}
    </option>
</select> -->
        <div class="grid">
            <v-select v-if="filterObjs.length > 0"
                v-model="selectedObj"
                :items="filterObjs"
                @change="onFilterChanged()"
                item-value="index"
                item-text="text"
                outlined
                style="width:10rem;"
            ></v-select>

            <div>
              <a href="#" v-for="(column, i) in filter.orderTexts" :key="i"
                @click="onOrderClicked(i)">
                  <span >{{column}} </span> 
                  <span v-if="orderIdx == i">
                    <span v-if="orderDir == 0">
                      &#9660;
                    </span>
                    <span v-else>
                      &#9650;
                    </span>
                  </span>
                  &nbsp;&nbsp;
              </a>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  props:{
      filter:Object,
  },
  watch:{
    filter(){
      this.initSelected();
    }
  },
  data() {
    return {
        filterObjs:[],
        selectedObj:Object,
        orderIdx:-1,
        orderDir:0,
    }
  },
  created(){
      this.initSelected();
    //   console.log("filter.strSelected : ", this.strSelected);
  },
  methods:{
      initSelected()
      {
        this.filterObjs=[];
        if(this.filter.slotStates.length > 0)
        {
          let i = 0;
          for(let state of this.filter.slotStates)
          {
            this.filterObjs.push({
              index:i,
              text:state
            })
            i++;
          }
        
          this.selectedObj = this.filterObjs[0];
        }
        
        this.initOrder();
      },

      initOrder(){
        this.orderIdx = -1;
      },

      onOrderClicked(idx){
        this.$emit("onOrderClicked", idx);
        if(this.orderIdx == idx)
          this.orderDir = (++this.orderDir) % 2;  
        else
          this.orderDir = 0;

        this.orderIdx = idx;
      },

      onFilterChanged(){
        //console.log("FilterChanged.index: ", this.selectedObj);
        this.$emit("onFilterChanged", this.selectedObj);
      },

  }
};
</script>

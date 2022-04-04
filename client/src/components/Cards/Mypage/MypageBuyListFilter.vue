<style scoped>
.v-text-field.v-text-field--solo .v-input__control{
    height: 1rem;
}
</style>

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
    <option v-for="(option, index) in word.fieldProps.opts" :key="index" :value="option.value" :selected="index === 0 ? 'selected' : ''">
        {{ option.value }}
    </option>
</select> -->
        <div class="grid">
            <v-select
                v-model="selected"
                :items="filter.filters"
                @change="onFilterChanged"
                outlined
                style="width:10rem;"
            ></v-select>

            <div>
                <a href="#" v-for="(column, i) in filter.orderableColumns" :key="i"
                @click="onOrderClicked(i)">
                    <span>{{column}}</span> &nbsp;&nbsp;
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
  data() {
    return {
        selected:'',
    }
  },
  created(){
      this.initSelected();
    //   console.log("filter.selected : ", this.selected);
  },
  methods:{
      initSelected()
      {
        this.selected = this.filter.filters[0];
      },

      onOrderClicked(idx){
        this.$emit("onOrderClicked", idx);
      },

      onFilterChanged(){
          this.$emit("onFilterChanged", this.selected);
      },
  }
};
</script>

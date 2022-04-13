<style scoped>
    .centered-input >>> input {
      text-align: center
    }
</style>

<template>
      <v-row align="center" justify="center" class="bg-blueGray-200 mt-0  rounded border-t" style="border-color: #ccc;">

        <v-btn v-for="(item, i) in periods" :key="i"
          elevation="2"
          tile
          color="white"
          @click="onPeriodClicked(i)"
        >{{periods[i]}}개월</v-btn>

        <v-col
          cols="12"
          sm="6"
          md="4"
          style="max-width:12rem;"
        >
          <v-menu
            v-model="startMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                class="centered-input"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="startDate"
              @input="startMenu = false"
              :show-current="false"
              :max="now"
              locale="ko-KR"
              color="#212121"
            ></v-date-picker>
          </v-menu>
        </v-col>
        ~
        <v-col
          cols="12"
          sm="6"
          md="4"
          style="max-width:12rem; margin-left:-2rem"
        >
          <v-menu
            v-model="endMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                class="centered-input"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="endDate"
              @input="endMenu = false"
              :show-current="false"
              :max="now"
              locale="ko-KR"
              color="#212121"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-btn 
          elevation="2"
          tile
          color="black"
          @click="onSearchClicked()"
          class="white--text"
        >조회</v-btn>

      </v-row>
    
</template>

<script>
import moment from 'moment'

export default {
    props:{
        
    },
    data () {
      return {
        periods:[2,4,6],
        startMenu: false,
        endMenu: false,
        
        startDate:'',
        endDate:'',
        nowDate: new Date(Date.now() - (new Date().getTimezoneOffset() * 60000)),
        now:'',
      }
    },
    created(){
        this.endDate = this.startDate = this.now = this.nowDate.toISOString().substr(0,10);
    },
    methods: {
        onPeriodClicked(i){
            this.endDate = this.now;
            let prevDate = new Date();
            prevDate.setMonth(this.nowDate.getMonth() - this.periods[i]);
            this.startDate = prevDate.toISOString().substr(0, 10)
        },
        onSearchClicked(){
            if(this.startDate > this.endDate) 
            {
                alert("시작 날짜를 끝 날짜보다 이전으로 설정해주세요.");
            }
            else
            {
                const beginningOfDay = moment(this.startDate, 'YYYY-MM-DD').startOf('day');
                const endOfDay = moment(this.endDate, 'YYYY-MM-DD').endOf('day');
                // console.log("endOfDaty", endOfDay);
                this.$emit("onSearchClicked", beginningOfDay, endOfDay);
            }
      },
    }
}
</script>

<style scoped>
    .centered-input >>> input {
      text-align: center
    }
</style>

<template>
  <div>
    <mypage-top-count-tap :items="counts" />

      <v-row align="center" justify="center" class="bg-blueGray-100 mt-1">

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
              locale="ko-KR"
              color="#212121"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-btn 
          elevation="2"
          tile
          color="black"
          @click="onSerchClicked()"
          class="white--text"
        >조회</v-btn>

      </v-row>

  </div>
</template>


<script>
import MypageTopCountTap from '@/components/Cards/Mypage/MypageTopCountTap.vue';

  export default {
    components:{
      MypageTopCountTap,
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
        periods:[2,4,6],
        startDate:'',
        endDate:'',
        startMenu: false,
        endMenu: false,
      }
    },
    created(){
      this.startDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
      this.endDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
    },
    methods: {
      onPeriodClicked(i){
        let now = new Date();
        this.endDate = (new Date(now - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);

        let prevMonth = new Date(now.setMonth(now.getMonth() - this.periods[i]));
        this.startDate = (new Date(prevMonth - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
      },

      onSerchClicked(){

      },
    },
  }
</script>"
<style scoped>
    .centered-input >>> input {
      text-align: center
    }
</style>

<template>
  <div>
    <v-tabs  
    >
      <v-tab v-for="(item,i) in items" :key="i" style="text-center;  width:33%; flex-direction: column;" >
        <h6 class="text-h6 font-bold" >{{counts[i]}}</h6>
        <h6>{{items[i]}}</h6>
      </v-tab>
    </v-tabs>

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

  export default {
    data () {
      return {
        items: [
          '구매 입찰', '진행 중', '종료',
        ],
        counts:[0,0,0],
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
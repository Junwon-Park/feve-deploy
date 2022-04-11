<template>
  <div style="min-height: 100vh" class='mt-48'>
  <v-card :elevation="0">

    <h1 class="text-center text-4xl mb-10 font-semibold">STYLE</h1>
    <v-toolbar
        color="white"
        flat
        prominent
    >
      <div class="xl:w-4/12 mx-auto">
      <v-text-field
          prepend-inner-icon="mdi-pound"
          class="mx-4"
          flat
          outlined
          background-color="white"
          dart
          hide-details
          label="#검색"
          solo-inverted
          append-icon="mdi-magnify"
      ></v-text-field>
      </div>

      <template v-slot:extension>
        <v-tabs
            v-model="tabs"
            centered
            color="black"
        >
          <v-tab
              v-for="(tabTitle, idx) in tabTitle"
              :key="idx"
          >
             {{ tabTitle }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs" class="mt-24">
      <v-tab-item>
        <div class="w-full px-4 mb-5 flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4 mb-5" v-for="(item, i) in newitems" :key="i">
            <CardStyle
                v-bind="item"
                :items="item"/>
          </div>
        </div>
      </v-tab-item>

        <v-tab-item>
          <div class="w-full px-4 my-10 flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4 mb-5" v-for="(item, i) in followitems" :key="i">
              <CardStyle
                  v-bind="item"
                  :items="item"
              />
            </div>
          </div>
        </v-tab-item>
        <v-tab-item>
          <div class="w-full px-4 mb-5 flex flex-wrap justify-center">
            <div class="w-full lg:w-4/12 xl:w-4/12 px-4 mb-5">
              <UserInfo
                  :userInfo="userInfo"
                  @sendDialog="cDialog"
              />
            </div>
          </div>
          <div class="w-full px-4 my-10 flex flex-wrap">
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4 mb-5" v-for="(item, i) in myitems" :key="i">
              <CardStyle
                  v-bind="item"
                  :items="item"
              />
            </div>
          </div>
        </v-tab-item>
    </v-tabs-items>

    <StyleWrite
        :dialog="recDialog"
        :userInfo="userInfo"
        @sendDialog="sendDialog"
    />
  </v-card>
  </div>
</template>
<script>
import CardStyle from "@/components/Cards/Style/CardStyle.vue";
import UserInfo from "@/components/Cards/Style/StyleFollowInfo.vue";
import StyleWrite from "@/components/Cards/Style/StyleWrite.vue";
export default {
  data() {
    return {
      recDialog: false,
      userInfo: {
        USER_NAME: '',
        USER_MAIL: '',
        USER_KEY: '',
      },
      tabs: null,
      followtabs: null,
      tabTitle: ['NEW','FEED', 'FOLLOW'],
      followitems: {
        POST_KEY: 0,
        POST_CONTENS: "",
        POST_WDATE: "",
        POST_PIC: "",
        USER_KEY: 0,
        USER_ID: "",
        HASHTAG_TITLE: "",
      },
      newitems: {
        POST_KEY: 0,
        POST_CONTENS: "",
        POST_WDATE: "",
        POST_PIC: "",
        USER_KEY: 0,
        USER_ID: "",
        HASHTAG_TITLE: "",
      },
      myitems: {
        POST_KEY: 0,
        POST_CONTENS: "",
        POST_WDATE: "",
        POST_PIC: "",
        USER_KEY: 0,
        USER_ID: "",
        HASHTAG_TITLE: "",
      },
    }
  },
  components: {
    CardStyle,
    UserInfo,
    StyleWrite,
  },
  created(){
    this.getSimpleUserInfo()
    this.loadFollowPost()
    this.loadAllPost()
    this.loadMyPost()
  },
  methods:{
    getSimpleUserInfo(){
      this.$axios.post('http://localhost:8080/mypage/getSimpleUserInfo', {
        USER_KEY : JSON.parse(localStorage.getItem('userKey'))
      })
          .then((result) => {
            this.userInfo = result.data;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    // loadPost(){
    //   this.$axios.post('http://localhost:8080/style/loadPost', {
    //     USER_KEY : JSON.parse(localStorage.getItem('userKey'))
    //   })
    //       .then((res) => {
    //         this.followitems = res.data;
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    // },

    loadMyPost(){
      this.$axios.post('http://localhost:8080/style/loadPost', {
        USER_KEY : JSON.parse(localStorage.getItem('userKey'))
      })
          .then((res) => {
            this.myitems = res.data;
            //console.log(res.data)
          })
          .catch((error) => {
            console.log(error);
          })
    },

    loadFollowPost(){
      this.$axios.post('http://localhost:8080/style/loadPost/follow', {
        USER_KEY : JSON.parse(localStorage.getItem('userKey'))
      })
          .then((res) => {
            this.followitems = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
    },

    loadAllPost(){
      this.$axios.post('http://localhost:8080/style/loadPost/all', {
        USER_KEY : JSON.parse(localStorage.getItem('userKey'))
      })
          .then((res) => {
            this.newitems = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    cDialog(){
      this.recDialog=true;
    },
    sendDialog(){
      this.recDialog = false
    },
  }
};
</script>

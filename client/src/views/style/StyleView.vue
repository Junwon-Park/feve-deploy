<template>
  <div>
    <main class="profile-page">
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg  mt-48 "
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      :src="team2"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-15 max-w-150-px"
                    />
                  </div>
                </div>

              </div>
              <div class="text-center mt-24">
                <h3
                  class="text-4xl font-semibold leading-normal text-blueGray-700 "
                >
                  {{ userInfo.USER_NAME }}
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold "
                >
                  @ {{ userInfo.USER_ID }}
                </div>

                <div class="w-full lg:w-4/12 px-4 mx-auto">
                  <div class="flex justify-center py-4  pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                          class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        {{ totalPostCount }}
                      </span>
                      <span class="text-sm text-blueGray-400">게시물</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span
                          class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        {{ totalFollowerCount }}
                      </span>
                      <span class="text-sm text-blueGray-400">팔로워</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                          class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        {{ totalFollowingCount }}
                      </span>
                      <span class="text-sm text-blueGray-400">팔로잉</span>
                    </div>
                  </div>
                </div>


                <div
                    class="w-full lg:w-4/12 px-4 mx-auto"
                >
                  <div class="mt-5">
                    <button
                        v-if="userInfo.USER_KEY!=user_key && isfollow===''"
                        class="bg-black active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        @click="follow"
                    >
                      팔로우
                    </button>
                    <button
                        v-if="isfollow!=''"
                        class="bg-black active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        @click="unfollow"
                    >
                      팔로잉
                    </button>
                  </div>
                </div>


              </div>
            </div>

              <div class="flex flex-wrap justify-center mt-24">
                   <div class="w-full mb-12 px-16">
                    <StyleViewCard
                        v-for="(post, idx) in posts"
                        :key="idx"
                        :posts="post"
                        v-bind="post"
                    />
                  </div>
                </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import StyleViewCard from "@/components/Cards/Style/StyleViewCard.vue";
import team2 from "@/assets/img/icon_account.png";

export default {
  props:{
    USER_KEY: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      user_key:JSON.parse(localStorage.getItem('userKey')),
      team2,
      userInfo: {
        USER_NAME: '',
        USER_MAIL: '',
        USER_KEY: '',
      },
      posts:{
        POST_KEY: 0,
        POST_CONTENT: "",
        POST_WDATE: "",
        POST_PIC: "",
        USER_KEY: 0,
        USER_ID: "",
        USER_NAME:"",
        HASHTAG_TITLE: "",
      },
      totalPostCount: 0,
      totalFollowerCount: 0,
      totalFollowingCount: 0,
      isfollow:false,
      followStatus: false,
      unfollowStatus: false,
    };
  },
  components: {
    StyleViewCard,
  },
  methods:{
    getSimpleUserInfo(){
      this.$axios.post('http://localhost:8080/mypage/getSimpleUserInfo', {
        USER_KEY : this.$route.params.USER_KEY
      })
          .then((result) => {
            this.userInfo = result.data;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    loadPost(){

      let that = this;
      that.$axios.post('http://localhost:8080/style/loadPost', {
        USER_KEY : this.$route.params.USER_KEY
      })
          .then((res) => {
            this.posts = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    countPost(){
      this.$axios.post('http://localhost:8080/style/loadPost/count', {
        USER_KEY : this.$route.params.USER_KEY
      })
          .then((res) => {
            this.totalPostCount = res.data[0].totalPostCount;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    follow(){
      let that = this;
      if( this.userInfo.USER_KEY != this.user_key){
        this.$axios.post('http://localhost:8080/style/follow', {
          follower_id: this.user_key,
          following_id : this.$route.params.USER_KEY,
        })
            .then(() => {
              this.followStatus=true;
              that.$router.go(that.$router.currentRouter);
            })
            .catch((error) => {
              console.log(error);
            });
      }
    },
    unfollow(){
      let that = this;
      this.$axios.post('http://localhost:8080/style/follow/unfollow', {
        follower_id: this.user_key,
        following_id : this.$route.params.USER_KEY,
      })
          .then(() => {
            this.unfollowStatus=true;
            that.$router.go(that.$router.currentRouter);
          })
          .catch((error) => {
            console.log(error);
          });
    },
    followCount(){
      this.$axios.post('http://localhost:8080/style/follow/count/following', {
        user_key : this.$route.params.USER_KEY,
      })
          .then((res) => {
            this.totalFollowerCount = res.data[0].cnt;
          })
          .catch((error) => {
            console.log(error);
          });

      this.$axios.post('http://localhost:8080/style/follow/count/follower', {
        user_key : this.$route.params.USER_KEY,
      })
          .then((res) => {
            this.totalFollowingCount = res.data[0].cnt;
          })
          .catch((error) => {
            console.log(error);
          })
      this.$axios.post('http://localhost:8080/style/follow/isfollow', {
        follower_id: this.user_key,
        following_id : this.$route.params.USER_KEY,
      })
          .then((res) => {
            //console.log(res.data)
            this.isfollow = res.data;
          })
          .catch((error) => {
            console.log(error);
          })
    }
  },
  created(){
    this.getSimpleUserInfo()
    this.loadPost()
    this.countPost()
    this.followCount()
  },
}
</script>

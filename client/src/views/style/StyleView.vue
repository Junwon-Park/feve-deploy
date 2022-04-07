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
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <img
                      alt="..."
                      :src="team2"
                      class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      팔로우
                    </button>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        22
                      </span>
                      <span class="text-sm text-blueGray-400">게시물</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        10
                      </span>
                      <span class="text-sm text-blueGray-400">팔로워</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        89
                      </span>
                      <span class="text-sm text-blueGray-400">팔로잉</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal text-blueGray-700 "
                >
                  {{ userInfo.USER_NAME }}
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                >
                  @ {{ userInfo.USER_ID }}
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
      }
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
            console.log(result)
            this.userInfo = result.data;
          })
          .catch((error) => {
            console.log(error);
          })
    },
    loadPost(){
      this.$axios.post('http://localhost:8080/style/loadPost', {
        USER_KEY : this.$route.params.USER_KEY
      })
          .then((res) => {
            console.log(res)
            this.posts = res.data;
            console.log(this.posts)
          })
          .catch((error) => {
            console.log(error);
          })
    },
  },
  created(){
    this.getSimpleUserInfo()
    this.loadPost()
  },
}
</script>

<template>
  <div>
    <main class="md:ml-64">
      <section class="mt-20 relative block py-24 lg:pt-3">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center">
            <div class="w-full ">
              <div
                  class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">
                    문의 등록
                  </h4>

                  <div class="flex flex-wrap">
                  <div class="relative mb-3 mt-8 w-full lg:w-6/12 pr-3 ">
                    <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="제목"
                    >
                      제목
                    </label>
                    <input
                        type="text"
                        class="border-0 px-3 py-3  placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="제목"
                        v-model="cscenter.cscenter_title"
                    />
                  </div>

                    <div class="relative mb-3  mt-8 w-full lg:w-6/12 pr-3 ">
                      <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="작성자" 
                      >
                        작성자
                      </label>
                      <input
                          type="text"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="작성자"
                          readonly
                         :value="userInfo.USER_NAME"
                      />
                    </div>

                    <div class="relative mb-3  mt-8 w-full lg:w-6/12 pr-3 ">
                      <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="작성일"
                      >
                       
                      </label>
                      <input
                          type="hidden"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="작성일"
                          v-model="cscenter.cscenter_wdate"
                      />
                    </div>

                  <div class="relative w-full mb-3">
                    <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="문의 내용"
                    >
                      문의 내용
                    </label>
                    <textarea
                        rows="15"
                        cols="80"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="문의 내용"
                        style="background: #fff !important;"
                        v-model="cscenter.cscenter_contents"
                    />
                  </div>
                  <div class="text-center mt-6">
                    
                    <button
                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        @click="formSubmit()"
                    >
                      작성하기
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onclick="location.href='/CscenterQna'"
                    >
                      돌아가기
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cscenter: {
        cscenter_title: '',
        cscenter_contents: '',
        cscenter_wdate: '',
        cscenter_status: '',
        user_key: JSON.parse(localStorage.getItem('userKey')),
        default: "0",
        user_name:''
      },
      userInfo: {
        USER_NAME: '',
        USER_MAIL: '',
        USER_KEY: '',
        USER_ID:'',
      },
    };
  },

  components: {

  },
  methods: {
    formSubmit() {
      const curr = new Date();
      const utc =curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
      const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
      const kr_curr =new Date(utc + (KR_TIME_DIFF));



      this.$axios.post('http://localhost:8080/cscenter/cscenterinsert', {
          cscenter_title: this.cscenter.cscenter_title,
          cscenter_contents: this.cscenter.cscenter_contents,
          cscenter_wdate: kr_curr,
          cscenter_status: this.cscenter.cscenter_status,
          user_name:this.cscenter.user_name,
          user_key:this.cscenter.user_key
          
      })
          .then(() => {
            alert("문의가 등록 되었습니다.");
            this.$router.push('/cscenterQna');
          })
          .catch((error) => {
            console.log(error);
          }); 
    },

    getSimpleUserInfo(){
      this.$axios.post('http://localhost:8080/mypage/getSimpleUserInfo', {
        USER_KEY : JSON.parse(localStorage.getItem('userKey'))
      })
          .then((result) => {
            this.userInfo = result.data;
            console.log(result.data)
          })
          .catch((error) => {
            console.log(error);
          })
    },
  },
  created(){
    this.getSimpleUserInfo()()
  }
};
</script>

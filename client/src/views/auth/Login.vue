<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full md:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-2"
        >
          <div class="flex-auto px-4 lg:px-10 py-10 pt-10">
            <div class="text-2xl text-blueGray-800 text-center mb-5 font-bold">
              로그인
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  아이디
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="아이디를 입력하세요."
                  v-model="inputId"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-800 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  비밀번호
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="비밀번호를 입력하세요."
                  v-model="inputPw"
                />
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    아이디 기억하기
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="submitLogin"
                >
                  로그인
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2">
            <router-link to="/auth/findpassword">
              <span class="text-blueGray-100">
                <small>비밀번호를 잊어버리셨습니까? / 비밀번호 변경</small>
              </span>
            </router-link>
          </div>
          <div class="w-1/2 text-right">
            <router-link to="/auth/register">
              <span class="text-blueGray-100">
                <small>아직 회원이 아니시라면?</small>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import github from '@/assets/img/github.svg';
import google from '@/assets/img/google.svg';
import axios from 'axios';

export default {
  data() {
    return {
      github,
      google,
      inputId: '',
      inputPw: ''
    };
  },
  methods: {
    async submitLogin() {
      const userData = await axios
        .post(
          `${this.$store.getters.ServerUrl}/auth/login`,
          { USER_ID: this.inputId, USER_PASSWORD: this.inputPw },
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${this.accessToken}` }
          }
        )
        .catch((err) => {
          // Login failed
          console.error('Login failed!!!', err);
          alert('로그인에 실패했습니다.');
          localStorage.setItem('Authorization', null);
          localStorage.setItem('isLogin', false);
          localStorage.setItem('userKey', null);
          return location.reload();
        });

      if (userData) {
        // Login successed
        localStorage.setItem('Authorization', userData.data.data.accessToken);
        localStorage.setItem('isLogin', true);
        localStorage.setItem('userId', userData.data.data.USER_ID);
        localStorage.setItem('userAdmin', userData.data.data.USER_ADMIN);
        localStorage.setItem('userKey', userData.data.data.USER_KEY);
        return (location.href = `${this.$store.getters.LocalUrl}`);
      }
    }
  }
};
</script>

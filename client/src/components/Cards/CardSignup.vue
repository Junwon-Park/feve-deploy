<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">회원가입</h6>
        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          @click="submitSignUp"
        >
          가입하기
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          회원정보 입력
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                아이디
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value=""
                placeholder="아이디를 입력하세요."
                v-model="USER_ID"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                비밀번호
              </label>
              <input
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="비밀번호를 입력하세요."
                v-model="USER_PASSWORD"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                비밀번호 확인
              </label>
              <input
                type="password"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="비밀번호 확인"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                이름
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value=""
                placeholder="이름을 입력하세요."
                v-model="USER_NAME"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                이메일
              </label>
              <input
                type="email"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value=""
                placeholder="이메일을 입력하세요."
                v-model="USER_MAIL"
              />
            </div>
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                전화번호
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="010-0000-0000"
                v-model="USER_PHONE"
              />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300" />

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          배송지 주소
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                시/군/구
              </label>
              <input
                type="text"
                class="address border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="주소를 입력하세요."
                readonly
              />
            </div>
          </div>
          <div
            style="
              display: flex;
              flex-direction: column;
              justify-content: center;
            "
          >
            <v-btn
              elevation="2"
              large
              color="primary"
              style="margin-top: 10px"
              @click="postCode"
              >주소 검색</v-btn
            >
          </div>
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                주소
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="상세주소를 입력해주세요."
                v-model="USER_ADDRESS2"
              />
            </div>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                우편번호
              </label>
              <input
                id="postcode"
                type="text"
                class="postCode border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="우편 번호를 입력하세요."
                readonly
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      USER_ID: '',
      USER_PASSWORD: '',
      USER_NAME: '',
      USER_MAIL: '',
      USER_PHONE: '',
      USER_ADDRESS1: '',
      USER_ADDRESS2: '',
      POST_CODE: '',
      baseURL: 'http://localhost:8080',
      clientBaseURL: 'http://localhost:3000'
    };
  },
  methods: {
    postCode() {
      new window.daum.Postcode({
        oncomplete: function (data) {
          const userAddress = document.querySelector('.address');
          const postCode = document.querySelector('.postCode');

          userAddress.value = data.address;
          postCode.value = data.zonecode;
        }
      }).open();
    },
    async submitSignUp() {
      const userAddress = document.querySelector('.address');
      const postCode = document.querySelector('.postCode');

      const checkSignUp = await axios
        .post(
          `${this.baseURL}/auth/signup`,
          {
            USER_ID: this.USER_ID,
            USER_PASSWORD: this.USER_PASSWORD,
            USER_NAME: this.USER_NAME,
            USER_MAIL: this.USER_MAIL,
            USER_PHONE: this.USER_PHONE,
            USER_ADDRESS1: userAddress.value,
            USER_ADDRESS2: this.USER_ADDRESS2,
            POST_CODE: postCode.value
          },
          { withCredentials: true }
        )
        .catch((err) => {
          console.log('Sign up failed!!!', err);
        });

      if (checkSignUp) {
        localStorage.setItem('isLogin', true);
        localStorage.setItem(
          'Authorization',
          checkSignUp.data.data.accessToken
        );
        localStorage.setItem('userId', checkSignUp.data.data.USER_ID);
        alert('회원가입이 완료되었습니다.');
      }
      return (location.href = `${this.clientBaseURL}`);
    }
  }
};
</script>

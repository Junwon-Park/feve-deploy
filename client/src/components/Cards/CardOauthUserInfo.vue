<template>
  <v-form ref="form" lazy-validation>
    <v-row>
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
      >
        <div class="rounded-t bg-white mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6 class="text-blueGray-700 text-xl font-bold">추가 정보</h6>
            <h6
              class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
              style="margin-bottom: 12px !important"
            >
              물품 배송 시 필요한 정보를 추가로 입력합니다.
            </h6>
            <button
              class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              @click="submitSaveUserInfo"
            >
              저장하기
            </button>
          </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              추가 회원정보 입력
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4">
                <v-col cols="12">
                  <v-text-field
                    label="전화번호"
                    :rules="validationRules.phone"
                    v-model="USER_PHONE"
                    placeholder="010-0000-0000"
                    required
                  ></v-text-field>
                </v-col>
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
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </v-row>
  </v-form>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      USER_PHONE: '',
      USER_ADDRESS1: '',
      USER_ADDRESS2: '',
      POST_CODE: '',
      checkId: false,
      addressLength: 0,
      postCodeLength: 0,
      validationRules: {
        phone: [
          (v) => !!v || '핸드폰번호는 필수 입력사항 입니다.',
          (v) =>
            /01[0179]-\d{3,4}-\d{4}/.test(v) || '핸드폰번호 형식이 아닙니다.'
        ]
      }
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
          localStorage.setItem('addressLength', data.address.length);
          localStorage.setItem('postCodeLength', data.zonecode.length);
          userAddress.readOnly = true;
          postCode.readOnly = true;
        }
      }).open();
    },
    async submitSaveUserInfo() {
      const userAddress = document.querySelector('.address');
      const postCode = document.querySelector('.postCode');
      const validate = this.$refs.form.validate();
      const addressLength = JSON.parse(localStorage.getItem('addressLength'));
      const postCodeLength = JSON.parse(localStorage.getItem('postCodeLength'));

      if (
        // validate(유효성 검사)가 false 이거나 주소를 입력하지 않은 경우
        !validate ||
        addressLength === 0 ||
        this.USER_ADDRESS2.length === 0 ||
        postCodeLength === 0
      ) {
        return alert('입력하신 내용을 다시 확인하세요.');
      } else {
        // 유효성 검사를 통과(true)하고 주소를 입력한 경우
        const USER_NAME = localStorage.getItem('userId');
        const USER_MAIL = localStorage.getItem('userMail');
        const accessToken = localStorage.getItem('Authorization');
        console.log('check!!!', checkSaveUserInfo);
        const checkSaveUserInfo = await axios
          .post(
            `${this.$store.getters.ServerUrl}/auth/saveuserinfo`,
            {
              USER_NAME,
              USER_MAIL,
              USER_PHONE: this.USER_PHONE,
              USER_ADDRESS1: userAddress.value,
              USER_ADDRESS2: this.USER_ADDRESS2,
              POST_CODE: postCode.value,
              accessToken
            },
            { withCredentials: true }
          )
          .catch((err) => {
            console.log('Save user infomation failed!!!', err);
          });

        if (checkSaveUserInfo) {
          localStorage.setItem('isLogin', true);
          localStorage.setItem(
            'Authorization',
            checkSaveUserInfo.data.data.accessToken
          );
          localStorage.setItem('googleLogin', true);
          localStorage.setItem('userId', checkSaveUserInfo.data.data.USER_ID);
          localStorage.setItem('userKey', checkSaveUserInfo.data.data.USER_KEY);
          localStorage.setItem('userMail', null);
          localStorage.setItem('addressLength', null);
          localStorage.setItem('postCodeLength', null);
          alert('추가 정보가 저장되었습니다.');
        }
        return (location.href = `${this.$store.getters.LocalUrl}`);
      }
    }
  }
};
</script>

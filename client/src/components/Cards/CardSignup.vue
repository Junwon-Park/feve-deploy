<template>
  <v-form ref="form" lazy-validation>
    <v-row>
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
              <v-col cols="12" style="margin-left: 15px">
                <v-btn
                  elevation="2"
                  large
                  color="primary"
                  style="margin-top: 10px"
                  @click="checkUserId"
                  >아이디 중복 검사</v-btn
                >
              </v-col>

              <div class="w-full lg:w-6/12 px-4">
                <v-col cols="12">
                  <v-text-field
                    label="아이디"
                    :rules="validationRules.id"
                    v-model="USER_ID"
                    placeholder="사용할 아이디를 입력하세요."
                    @change="changeId"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="비밀번호"
                    type="password"
                    :rules="validationRules.password"
                    v-model="USER_PASSWORD"
                    placeholder="사용할 비밀번호를 입력하세요."
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="비밀번호 확인"
                    :rules="validationRules.passwordCheck"
                    type="password"
                    placeholder="입력한 비밀번호를 확인하세요."
                    required
                  ></v-text-field>
                </v-col>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <v-col cols="12">
                  <v-text-field
                    label="이름"
                    :rules="validationRules.name"
                    v-model="USER_NAME"
                    placeholder="홍길동"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="이메일"
                    :rules="validationRules.email"
                    v-model="USER_MAIL"
                    placeholder="abc123@feve.com"
                    required
                  ></v-text-field>
                </v-col>

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
      USER_ID: '',
      USER_PASSWORD: '',
      USER_NAME: '',
      USER_MAIL: '',
      USER_PHONE: '',
      USER_ADDRESS1: '',
      USER_ADDRESS2: '',
      POST_CODE: '',
      checkId: false,
      addressLength: 0,
      postCodeLength: 0,
      validationRules: {
        id: [
          (v) => !!v || '아이디는 필수 입력사항입니다.',
          (v) =>
            /^[a-zA-Z0-9]*$/.test(v) || '아이디는 영문+숫자만 입력 가능합니다.',
          (v) =>
            !(v && v.length > 12) || '아이디는 12자 이상 입력할 수 없습니다.',
          (v) => !(v && v.length < 8) || '아이디는 8자 미만일 수 없습니다.'
        ],
        name: [
          (v) => !!v || '이름은 필수 입력사항 입니다.',
          (v) =>
            !(v && v.length > 10) || '이름은 10자 이상 입력할 수 없습니다.',
          (v) =>
            !/[~!@#$%^&*()_+|<>?:{}]/.test(v) ||
            '이름에는 특수문자를 사용할 수 없습니다.'
        ],
        password: [
          (v) => !!v || '패스워드는 필수 입력사항 입니다.',
          (v) =>
            !(v && v.length > 20) || '패스워드는 20자 이상 입력할 수 없습니다.',
          (v) => !(v && v.length < 10) || '패스워드는 10자 미만일 수 없습니다.'
        ],
        passwordCheck: [
          (v) => !!v || '패스워드는 필수 입력사항입니다.',
          (v) =>
            !(v && v.length >= 30) ||
            '패스워드는 30자 이상 입력할 수 없습니다.',
          (v) => v === this.USER_PASSWORD || '패스워드가 일치하지 않습니다.'
        ],
        email: [
          (v) => !!v || '이메일은 필수 입력사항 입니다.',
          (v) => /.+@.+/.test(v) || '이메일 형식이 아닙니다.'
        ],
        phone: [
          (v) => !!v || '핸드폰번호는 필수 입력사항 입니다.',
          (v) =>
            /01[0179]-\d{3,4}-\d{4}/.test(v) || '핸드폰번호 형식이 아닙니다.'
        ]
      }
    };
  },
  methods: {
    changeId() {
      this.checkId = false;
      console.log('체인지', this.checkId);
    },
    async checkUserId() {
      if (this.USER_ID.length === 0 || this.USER_ID.length < 8)
        return alert('아이디를 정확히 입력하세요.');
      else {
        const userInfo = await this.$axios.post(
          `${this.$store.getters.ServerUrl}/auth/checkuserid`,
          { USER_ID: this.USER_ID },
          {
            withCredentials: true
          }
        );

        if (!userInfo) {
          this.checkId = false;
          console.log('존재하는 아이디', this.checkId);
          return alert('이미 존재하는 아이디 입니다.');
        } else {
          this.checkId = true;
          console.log('사용 가능한 아이디', this.checkId);
          return alert('사용 가능한 아이디 입니다.');
        }
      }
    },
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
    async submitSignUp() {
      const userAddress = document.querySelector('.address');
      const postCode = document.querySelector('.postCode');
      const validate = this.$refs.form.validate();
      const addressLength = JSON.parse(localStorage.getItem('addressLength'));
      const postCodeLength = JSON.parse(localStorage.getItem('postCodeLength'));

      if (!this.checkId) return alert('아이디 중복 확인을 하세요.');
      else {
        if (
          !validate ||
          addressLength === 0 ||
          this.USER_ADDRESS2.length === 0 ||
          postCodeLength === 0
        ) {
          return alert('입력하신 내용을 다시 확인하세요.');
        } else {
          const checkSignUp = await axios
            .post(
              `${this.$store.getters.ServerUrl}/auth/signup`,
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
            localStorage.setItem('userKey', checkSignUp.data.data.USER_KEY);
            localStorage.setItem('addressLength', null);
            localStorage.setItem('postCodeLength', null);
            alert('회원가입이 완료되었습니다.');
          }
          return (location.href = `${this.$store.getters.LocalUrl}`);
        }
      }
    }
  }
};
</script>

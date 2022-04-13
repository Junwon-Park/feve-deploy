<template>
  <v-form ref="form" lazy-validation>
    <v-row>
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full md:w-6/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-2"
            >
              <div class="flex-auto px-4 lg:px-10 py-10 pt-10">
                <div
                  class="text-2xl text-blueGray-800 text-center mb-5 font-bold"
                >
                  비밀번호 변경
                </div>
                <form>
                  <v-col cols="12">
                    <v-text-field
                      label="아이디"
                      :rules="validationRules.id"
                      v-model="inputId"
                      placeholder="가입하신 아이디를 입력하세요."
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="이메일"
                      :rules="validationRules.email"
                      v-model="inputMail"
                      placeholder="가입하신 이메일을 입력하세요."
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="비밀번호"
                      type="password"
                      :rules="validationRules.password"
                      v-model="inputNewPassword"
                      placeholder="변경할 비밀번호를 입력하세요."
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
                  <div>
                    <label class="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        class="form-checkbox border-1 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                    </label>
                  </div>

                  <div class="text-center mt-6">
                    <button
                      class="bg-orange-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      @click="submitChange"
                    >
                      변경하기
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-row>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      inputId: '',
      inputMail: '',
      inputNewPassword: '',
      validationRules: {
        id: [
          (v) => !!v || '아이디는 필수 입력사항입니다.',
          (v) =>
            /^[a-zA-Z0-9]*$/.test(v) || '아이디는 영문+숫자만 입력 가능합니다.',
          (v) =>
            !(v && v.length > 12) || '아이디는 12자 이상 입력할 수 없습니다.',
          (v) => !(v && v.length < 8) || '아이디는 8자 미만일 수 없습니다.'
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
            !(v && v.length > 20) || '패스워드는 20자 이상 입력할 수 없습니다.',
          (v) => !(v && v.length < 10) || '패스워드는 10자 미만일 수 없습니다.',
          (v) => v === this.inputNewPassword || '패스워드가 일치하지 않습니다.'
        ],
        email: [
          (v) => !!v || '이메일은 필수 입력사항 입니다.',
          (v) => /.+@.+/.test(v) || '이메일 형식이 아닙니다.'
        ]
      }
    };
  },
  methods: {
    async submitChange() {
      const validate = this.$refs.form.validate();

      if (!validate) return alert('입력하신 내용을 다시 확인하세요.');
      else {
        const changResult = await this.$axios
          .post(
            `${this.$store.getters.ServerUrl}/auth/findpassword`,
            {
              USER_ID: this.inputId,
              USER_MAIL: this.inputMail,
              inputNewPassword: this.inputNewPassword
            },
            {
              withCredentials: true
            }
          )
          .catch((err) => {
            console.error('Change Password is failed!!!', err);
            alert('비밀번호 번경에 실패했습니다.');
            return location.reload();
          });
        if (changResult.data.data) {
          alert('비밀번호 번경이 완료되었습니다.');
          return (location.href = `${this.$store.getters.LocalUrl}/auth/login`);
        }
      }
    }
  }
};
</script>

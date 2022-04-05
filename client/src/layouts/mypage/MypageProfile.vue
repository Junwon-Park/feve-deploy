<template>
    <v-form 
    ref="form"
    v-model="valid"
    lazy-validation
    class="bg-blueGray-200 p-4 xl:w-6/12">
        <v-col
        cols="12"
        >
        <h1>프로필 정보</h1>
        </v-col>
        
        <v-col
        cols="12"
        >
        <h1>{{profile.USER_ID}}</h1>
        </v-col>

      <hr class="my-4" />

        <v-col
        cols="12"
        >
        <h1>로그인 정보</h1>
        </v-col>
        
        <v-col
        cols="12"
        >
        <v-text-field
            label="이메일 주소"
            v-model="profile.USER_MAIL"
            :readonly="isReadonly"
            :rules="formRule.email"
            required
        ></v-text-field>
        </v-col>

        <v-col
        cols="12"
        >
        <v-text-field
            label="비밀번호"
            type="password"
            v-model="profile.USER_PASSWORD"
            :readonly="isReadonly"
            required
            :rules="formRule.password"
        ></v-text-field>
        </v-col>

      <hr class="my-4" />

        <v-col
        cols="12"
        >
        <h1>개인 정보</h1>
        </v-col>

        <v-col
        cols="12"
        >
        <v-text-field
            label="이름"
            v-model="profile.USER_NAME"
            :readonly="isReadonly"
            required
            :rules="formRule.name"
        ></v-text-field>
        </v-col>

        <v-col
        cols="12"
        >
        <v-text-field
            label="휴대폰 번호"
            v-model="profile.USER_PHONE"
            :readonly="isReadonly"
            required 
            :rules="formRule.phone"
        ></v-text-field>
        </v-col>

      <hr class="my-4" />

        <v-col
        cols="12"
        >
        <h1>배송지 정보</h1>
        </v-col>

        <v-col cols="12">
        <v-text-field
            label="주소"
            v-model="profile.USER_ADDRESS1"
            :readonly="isReadonly"
        ></v-text-field>
        </v-col>

        <v-col cols="12">
        <v-text-field
            label="상세주소"
            v-model="profile.USER_ADDRESS2"
            :readonly="isReadonly"
        ></v-text-field>
        </v-col>

        <v-col cols="12">
        <v-text-field
            label="우편번호"
            v-model="profile.POST_CODE"
            :readonly="isReadonly"
        ></v-text-field>
        </v-col>

        <v-btn
            outlined
            rounded
            text
            @click="onModifyButtonClicked"
        >
            {{buttonText}}
        </v-btn>
    </v-form>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      valid: false,
      profile:{},
      isReadonly:true,
      buttonText:'프로필 수정',
      
      formRule:{
        name: [
            v => !!v || '이름은 필수 입력사항 입니다.',
            v => !(v && v.length >= 30) || '이름은 30자 이상 입력할 수 없습니다.',
            v => !/[~!@#$%^&*()_+|<>?:{}]/.test(v) || '이름에는 특수문자를 사용할 수 없습니다.'
        ],
        password: [
            v => !!v || '패스워드는 필수 입력사항 입니다.',
            v => !(v && v.length >= 30) || '패스워드는 30자 이상 입력할 수 없습니다.',
        ],
        email: [
            v => !!v || '이메일은 필수 입력사항 입니다.',
            v => /.+@.+/.test(v) || '이메일 형식이 아닙니다.',
        ],
        phone: [
            v => !!v || '핸드폰번호는 필수 입력사항 입니다.',
            v => /01[0179]-\d{3,4}-\d{4}/.test(v) || '핸드폰번호 형식이 아닙니다.',
        ],
      },
    }
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile(){
      this.$axios.post(this.$store.getters.ServerUrl + '/mypage/profile', {
        USER_KEY : '1', //로그인과 연동시키기
      })
      .then((result) => {
        console.log(result.data);
        this.profile = result.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },

    onModifyButtonClicked(){
        if(this.isReadonly)
        {
            this.changeState(1);
        }
        else
        {
            this.validate();
            if(!this.valid)
                return;

            this.saveProfile();
        }
    },

    changeState(state)  //state : 0, // 0:보여주기, 1:수정중
    {
        if(state == 0)
        {
            this.isReadonly = true;
            this.buttonText = '프로필 수정';
        }
        else
        {
            this.isReadonly = false;
            this.buttonText = '저장';
        }    
    },
    
    validate () {
        this.$refs.form.validate()
    },
    reset () {
        this.$refs.form.reset()
    },
    resetValidation () {
        this.$refs.form.resetValidation()
    },

    saveProfile(){
        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/profile/save', {
        USER_KEY : '1', //로그인과 연동시키기
        USER_NAME : this.profile.USER_NAME,
        USER_PASSWORD : this.profile.USER_PASSWORD,
        USER_MAIL : this.profile.USER_MAIL,
        USER_PHONE : this.profile.USER_PHONE,
        USER_ADDRESS1 : this.profile.USER_ADDRESS1,
        USER_ADDRESS2 : this.profile.USER_ADDRESS2,
        POST_CODE : this.profile.POST_CODE,
      })
      .then((result) => {
        console.log(result.data);
        if(result.data == 1 || result.data == 0)    // 1: 성공 0:db 변화없음 (저장하려는 값이 동일할때)
        {
            this.changeState(0);
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
};

</script>

<style>
input,
input[readonly="readonly"]{
  background: none !important;
}
</style>
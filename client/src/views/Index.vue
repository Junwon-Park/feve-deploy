<template>
  <div>
    <Slide />
    <div class="mx-auto overflow-hidden pb-20">
      <div class="flex items-center pt-5">
        <div class="w-full px-4 mr-auto ml-auto mt-5">
          <div class="justify-center flex relative items-center flex-col">
            <div class="my-4 w-full flex flex-wrap flex-row">
              <div class="w-full md:w-6/12 xl:w-2/12 text-center mt-8 px-3">
                <div class="py-3 bg-emerald-500 rounded-lg">
                  <p class="text-lg text-white mt-4 font-semibold">#LEGO</p>
                </div>
              </div>
              <div class="w-full md:w-6/12 xl:w-2/12 text-center mt-8 px-3">
                <div class="py-3 bg-orange-500 rounded-lg">
                  <p class="text-lg text-white mt-4 font-semibold">
                    #BEARBRICK
                  </p>
                </div>
              </div>
              <div class="w-full md:w-6/12 xl:w-2/12 text-center mt-8 px-3">
                <div class="py-3 bg-blueGray-200 rounded-lg">
                  <p class="text-lg mt-4 font-semibold">#EVENT</p>
                </div>
              </div>
              <div class="w-full md:w-6/12 xl:w-2/12 text-center mt-8 px-3">
                <div class="py-3 bg-blueGray-200 rounded-lg">
                  <p class="text-lg mt-4 font-semibold">#인스타그램</p>
                </div>
              </div>
              <div class="w-full md:w-6/12 xl:w-2/12 text-center mt-8 px-3">
                <div class="py-3 bg-blueGray-200 rounded-lg">
                  <p class="text-lg mt-4 font-semibold">#배송</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="mt-24 pb-40 relative px-12">
      <div class="relative w-full flex flex-col min-w-0 break-words"></div>
      <div class="flex flex-wrap">
        <div class="w-full px-12 md:px-4">
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            BEST SELLER
          </h3>
          <hr />

          <div class="flex flex-wrap">
            <MainCardProduct
              v-for="(item, idx) in items"
              :key="idx"
              v-bind="item"
              :items="items"
            />
          </div>
        </div>

        <router-link to="/shop" class="mx-auto">
          <v-btn outlined color="#999" class="px-5 mt-10"> 더 보기 </v-btn>
        </router-link>
      </div>

      <div class="flex flex-wrap mt-32">
        <div class="w-full md:w-6/12 px-4 pt-24 md:pt-0">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-xl mx-auto"
            style="
              transform: scale(1) perspective(1040px) rotateY(-11deg)
                rotateX(2deg) rotate(2deg);
            "
            :src="Banner1"
          />
        </div>

        <div class="w-full md:w-6/12 px-4 pt-24 md:pt-0">
          <img
            alt="..."
            class="max-w-full rounded-lg shadow-xl mx-auto"
            style="
              transform: scale(1) perspective(1040px) rotateY(-11deg)
                rotateX(2deg) rotate(2deg);
            "
            :src="Banner2"
          />
        </div>
      </div>

      <div class="flex flex-wrap mt-24">
        <div class="w-full px-12 md:px-4">
          <h3 class="text-3xl mb-2 font-semibold leading-normal">NEW</h3>
          <hr />
          <div class="flex flex-wrap">
            <MainCardProduct
              v-for="(item, idx) in newItems"
              :key="idx"
              v-bind="item"
              :items="newItems"
            />
          </div>
        </div>

        <router-link to="/shop" class="mx-auto">
          <v-btn outlined color="#999" class="px-5 mt-10"> 더 보기 </v-btn>
        </router-link>
      </div>
    </section>

    <section class="pt-5 bg-black overflow-hidden">
      <div class="container mx-auto pb-64">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-12 md:px-4 ml-auto mr-auto">
            <h3
              class="text-3xl mb-2 font-semibold leading-normal text-white pb-5"
            >
              #instagram
            </h3>
            <MainCardStyle />
          </div>
        </div>
      </div>
    </section>

    <section class="pb-16 bg-blueGray-200 relative pt-32">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style="transform: translateZ(0)"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div class="container mx-auto">
        <div
          class="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10"
        >
          <div class="w-full text-center lg:w-8/12">
            <p class="text-4xl text-center">
              <span role="img" aria-label="love">👋🏼👋🏼</span>
            </p>
            <h3 class="font-semibold text-3xl">
              <span class="logo text-2xl font-bold">FEVE</span>는 처음이지?
            </h3>
            <p class="mt-4 text-xl leading-relaxed text-blueGray-500">
              첫 리셀을 <span class="logo text-2xl font-bold">FEVE</span>와
              시작해보세요.
            </p>
            <div class="mt-12">
              <router-link to="/shop">
                <span
                  class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-orange-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  판매하기
                </span>
              </router-link>

              <router-link to="/shop">
                <span
                  class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-600 active:bg-blueGray-200 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  구매하기
                </span>
              </router-link>
            </div>
            <div class="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import patternVue from '@/assets/img/pattern_vue.png';
import componentBtn from '@/assets/img/component-btn.png';
import componentProfileCard from '@/assets/img/component-profile-card.png';
import componentInfoCard from '@/assets/img/component-info-card.png';
import componentInfo2 from '@/assets/img/component-info-2.png';
import componentMenu from '@/assets/img/component-menu.png';
import componentBtnPink from '@/assets/img/component-btn-pink.png';
import documentation from '@/assets/img/documentation.png';
import login from '@/assets/img/login.jpg';
import profile from '@/assets/img/profile.jpg';
import landing from '@/assets/img/landing.jpg';
import axios from 'axios';
import Slide from '@/components/Cards/Slide.vue';
import MainCardProduct from '@/components/Cards/MainCardProduct.vue';
import Banner1 from '@/assets/img/main_ad1.png';
import Banner2 from '@/assets/img/main_ad2.png';
import MainCardStyle from '@/components/Cards/MainCardStyle.vue';

export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentProfileCard,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      documentation,
      Banner1,
      Banner2,
      login,
      profile,
      landing,
      items: [
        {
          PRODUCT_KEY: 0,
          PRODUCT_NAME: '',
          PRODUCT_BRAND: '',
          PRODUCT_CATE: '',
          PRODUCT_ORIPRICE: 0,
          PRODUCT_MNUM: '',
          PRODUCT_PIC: '',
          PRODUCT_DELETE: '',
          PRODUCT_DESC: '',
          SELL_PRICE: 0
        }
      ],
      newItems: [
        {
          PRODUCT_KEY: 0,
          PRODUCT_NAME: '',
          PRODUCT_BRAND: '',
          PRODUCT_CATE: '',
          PRODUCT_ORIPRICE: 0,
          PRODUCT_MNUM: '',
          PRODUCT_PIC: '',
          PRODUCT_DELETE: '',
          PRODUCT_DESC: '',
          SELL_PRICE: 0
        }
      ]
    };
  },
  methods: {
    async checkToken() {
      const checkResult = await axios
        .get(`${this.$store.getters.ServerUrl}/auth/checktoken`, {
          withCredentials: true
        })
        .catch((err) => {
          console.error('Invalid user!!!', err);
          localStorage.setItem('isLogin', false);
          localStorage.setItem('userId', null);
        });
      if (checkResult) {
        const accessToken = checkResult.data.data.accessToken;
        localStorage.setItem('Authorization', accessToken);
      }
    }
  },
  created() {
    if (!(this.$store.state.googleLogin || this.$store.state.isLogin)) {
      localStorage.setItem('isLogin', false);
      localStorage.setItem('Authorization', null);
      localStorage.setItem('userId', null);
      localStorage.setItem('userAdmin', null);
      localStorage.setItem('googleLogin', false);
    }

    if (this.$store.state.googleLogin === 'false') {
      this.checkToken();
    }
    if (
      this.$store.state.googleLogin === 'false' ||
      !this.$store.state.googleLogin
    ) {
      const url = new URL(window.location.href);
      const authorizationCode = url.searchParams.get('code');
      if (authorizationCode) {
        axios
          .post(
            `${this.$store.getters.ServerUrl}/auth/google`,
            {
              authorizationCode
            },
            { headers: { accept: `application/json` } }
          )
          .then((data) => {
            console.log(data.data.data.accessToken);
            console.log(data.data.data.userInfo.name);

            // if (!data.data) {
            //   alert('로그인에 실패했습니다.');
            //   console.log('Login is failed!!!');
            //   return location.reload();
            // } else {
            const userName = data.data.data.userInfo.name;
            const accessToken = data.data.data.accessToken;
            localStorage.setItem('isLogin', true);
            localStorage.setItem('Authorization', accessToken);
            localStorage.setItem('userId', userName);
            localStorage.setItem('userAdmin', 0);
            localStorage.setItem('googleLogin', true);
            return location.reload();
            // }
          })
          .catch((err) => {
            console.error('Access token is undefined', err);
          });
      }
    }

    let that = this;
    this.$axios
      .get('https://localhost:8080/main/loadproduct')
      .then(function (res) {
        that.items = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });

    this.$axios
      .get('https://localhost:8080/main/loadproduct/new')
      .then(function (res) {
        that.newItems = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  },

  components: {
    Slide,
    MainCardProduct,
    MainCardStyle
  }
};
</script>

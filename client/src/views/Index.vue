<template>
  <div>
    <Slide />
<!--    <section class="mt-48 md:mt-40 pb-40 relative">-->
<!--    </section>-->
    <section class="mt-24 pb-40 relative px-12">
      <div class="flex flex-wrap ">
        <div class="w-full md:w-4/12 px-12 md:px-4">
          <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fas fa-sitemap text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            BEST SELLER for문 돌릴 예정
          </h3>
          <hr />
          <MainCardProduct />
        </div>
      </div>

      <div class="flex flex-wrap mt-32">
        <div class="w-full md:w-6/12  px-4 pt-24 md:pt-0">
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

        <div class="w-full md:w-6/12  px-4 pt-24 md:pt-0">
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
        <div class="w-full md:w-4/12 px-12 md:px-4">
          <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fas fa-sitemap text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            NEW  for문 돌릴 예정
          </h3>
          <hr />
          <MainCardProduct />
        </div>
      </div>

      <div class="container mx-auto overflow-hidden pb-20">


        <div class="flex flex-wrap items-center pt-32">
          <div class="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div class="justify-center flex flex-wrap relative">
              <div class="my-4 w-full lg:w-6/12 px-4">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div class="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">Svelte</p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">ReactJS</p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">NextJS</p>
                  </div>
                </a>
              </div>
              <div class="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-yellow-500 shadow-lg rounded-lg text-center p-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">
                      JavaScript
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">Angular</p>
                  </div>
                </a>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
                  target="_blank"
                >
                  <div
                    class="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8"
                  >
                    <img
                      alt="..."
                      class="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                    />
                    <p class="text-lg text-white mt-4 font-semibold">Vue.js</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="justify-center text-center flex flex-wrap mt-24">
        <div class="w-full md:w-6/12 px-12 md:px-4">
          <p class="mt-4 text-xl leading-relaxed text-blueGray-500">
            첫 리셀을 FEVE와 시작해보세요.
          </p>
          <div class="mt-12">
            <router-link to="">
                <span
                    class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  판매하기
                </span>
            </router-link>

            <router-link to="">
                <span
                    class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-orange-500 active:bg-red-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  구매하기
                </span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="block relative z-1 bg-blueGray-600">
      <div class="container mx-auto">
        <div class="justify-center flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4 -mt-24">
            <div class="flex flex-wrap">
              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  Login Page
                </h5>
                <router-link to="/auth/login">
                  <div
                    class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      class="align-middle border-none max-w-full h-auto rounded-lg"
                      :src="login"
                    />
                  </div>
                </router-link>
              </div>

              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  Profile Page
                </h5>
                <router-link to="/profile">
                  <div
                    class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      class="align-middle border-none max-w-full h-auto rounded-lg"
                      :src="profile"
                    />
                  </div>
                </router-link>
              </div>

              <div class="w-full lg:w-4/12 px-4">
                <h5 class="text-xl font-semibold pb-4 text-center">
                  Landing Page
                </h5>
                <router-link to="/landing">
                  <div
                    class="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150"
                  >
                    <img
                      alt="..."
                      class="align-middle border-none max-w-full h-auto rounded-lg"
                      :src="landing"
                    />
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-blueGray-600 overflow-hidden">
      <div class="container mx-auto pb-64">
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
            <div
              class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
            >
              <i class="fas fa-code-branch text-xl"></i>
            </div>
            <h3 class="text-3xl mb-2 font-semibold leading-normal text-white">
              Open Source
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400"
            >
              Since
              <a
                href="https://tailwindcss.com/?ref=creativetim"
                class="text-blueGray-300"
                target="_blank"
              >
                Tailwind CSS
              </a>
              is an open source project we wanted to continue this movement too.
              You can give this version a try to feel the design and also test
              the quality of the code!
            </p>
            <p
              class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400"
            >
              Get it free on Github and please help us spread the news with a
              Star!
            </p>
            <a
              href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
              target="_blank"
              class="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Github Star
            </a>
          </div>

          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
            <i
              class="fab fa-github text-blueGray-700 text-55 absolute -top-150-px -right-100 left-auto opacity-80"
            ></i>
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
              <span role="img" aria-label="love"> 😍 </span>
            </p>
            <h3 class="font-semibold text-3xl">
              Do you love this Starter Kit?
            </h3>
            <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Cause if you do, it can be yours now. Hit the buttons below to
              navigate to get the Free version for your next project. Build a
              new web app or give an old project a new look!
            </p>
            <div class="sm:block flex flex-col mt-10">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-index"
                target="_blank"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <a
                href="https://github.com/creativetimofficial/vue-notus?ref=vn-index"
                target="_blank"
                class="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                <i class="fab fa-github text-lg mr-1"></i>
                <span>Help With a Star</span>
              </a>
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
import Banner1 from '@/assets/img/main_ad1.png'
import Banner2 from '@/assets/img/main_ad2.png'

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
      baseURL: 'http://localhost:8080'
    };
  },
  methods: {
    async checkToken() {
      const checkResult = await axios
        .get(`${this.baseURL}/auth/checktoken`, { withCredentials: true })
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
    this.checkToken();
  },
  components: {
    Slide,
    MainCardProduct,
  }
};
</script>

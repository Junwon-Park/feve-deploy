<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between navbar-expand-lg shadow bg-white"
  >
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <span
            class="logo text-blueGray-800 text-4xl font-bold italic leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
            FEVE
          </span>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fa fa-bars text-lg leading-lg" aria-hidden="true"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center flex-col"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center" v-if="isAdmin">
            <router-link to="/admin">
              <span
                class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
              >
                <span class="lg inline-block ml-2"> 관리자 페이지 </span>
              </span>
            </router-link>
          </li>

          <li class="flex items-center" v-if="!$store.state.isLogin">
            <router-link to="/auth/login">
              <span
                class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
              >
                <span class="lg inline-block ml-2"> 로그인 </span>
              </span>
            </router-link>
          </li>
          <li class="flex items-center" v-else>
            <router-link to="/">
              <span
                class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
                @click="submitLogout"
              >
                <span class="lg inline-block ml-2"> 로그아웃 </span>
              </span>
            </router-link>
          </li>
          <li class="flex items-center" v-if="!$store.state.isLogin">
            <router-link to="/auth/register">
              <span
                class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
              >
                <span class="lg inline-block ml-2"> 회원가입 </span>
              </span>
            </router-link>
          </li>
          <li class="flex items-center" v-if="$store.state.isLogin">
            <router-link to="/mypage">
              <span
                class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
              >
                <span class="lg inline-block ml-2"> 마이페이지 </span>
              </span>
            </router-link>
          </li>
          <li class="flex items-center" v-if="$store.state.isLogin">
            <router-link to="/shop">
              <span
                class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
              >
                <span class="lg inline-block ml-2"> 관심상품 </span>
              </span>
            </router-link>
          </li>
          <li class="flex items-center" v-if="$store.state.isLogin">
            <span class="text-blueGray-800 px-3 py-2 flex items-center text-xs"
              ><span style="font-weight: bold; font-size: 1rem">{{
                $store.state.userId
              }}</span>
              &nbsp;님, 반갑습니다.</span
            >
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="lg flex items-center">
            <router-link to="/style">
              <span
                class="text-blueGray-800 px-3 py-2 flex items-center text-lg uppercase font-bold"
              >
                <span class="lg inline-block ml-2">STYLE</span>
              </span>
            </router-link>
          </li>
          <li class="lg flex items-center">
            <router-link to="/shop">
              <span
                class="text-blueGray-800 px-3 py-2 flex items-center text-lg uppercase font-bold"
              >
                <span class="lg inline-block ml-2">SHOP</span>
              </span>
            </router-link>
          </li>
          <li class="lg flex items-center">
            <router-link to="/Cscenter">
              <span
                class="text-blueGray-800 px-3 py-2 flex items-center text-lg uppercase font-bold"
                href="/cscenter/Cscenter"
              >
                <span class="lg inline-block ml-2">고객센터</span>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';
//import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false,
      isAdmin: JSON.parse(localStorage.getItem('userAdmin'))
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
    async submitLogout() {
      const logout = await axios
        .get(`${this.$store.getters.ServerUrl}/auth/logout`, {
          withCredentials: true
        })
        .catch((err) => {
          console.error('logoutError', err);
        });
      const accessToken = logout.data.data;
      localStorage.setItem('isLogin', false);
      localStorage.setItem('Authorization', accessToken);
      localStorage.setItem('userId', null);
      localStorage.setItem('userAdmin', null);
      localStorage.setItem('userKey', null);

      location.href = `${this.clientBaseURL}`;
    },
    getAdminPage() {
      location.href = `${this.$store.getters.adminPage}`;
    }
  },
  components: {
    //IndexDropdown,
  }
};
</script>

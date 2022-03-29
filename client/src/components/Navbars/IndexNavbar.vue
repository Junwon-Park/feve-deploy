<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow bg-white "
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <span
            class="text-blueGray-800 text-4xl font-bold italic leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
          F E V E
          </span>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1  rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fa fa-bars text-lg leading-lg" aria-hidden="true"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center  flex-col"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <router-link to="/auth/login">
            <span
              class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
            >
              <span class="lg inline-block ml-2">
                로그인
                </span>
            </span>
                </router-link>
          </li>
          <li class="flex items-center">
            <router-link to="/auth/logout">
            <span
              class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
            >
            <span class="lg inline-block ml-2">
                로그아웃
                </span>
            </span>
                </router-link>
          </li>
          <li class="flex items-center">
            <router-link to="/auth/register">
            <span
              class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
            >
            <span class="lg inline-block ml-2">
                회원가입
                </span>
              </span>
                </router-link>
          </li>
            <li class="flex items-center">
              <router-link to="/profile">
            <span
              class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
            >
            <span class="lg inline-block ml-2">
                마이페이지
                </span>
              </span>
                </router-link>
          </li>
            <li class="flex items-center">
            <router-link to="/list2">
            <span
              class="text-blueGray-800 px-3 py-2 flex items-center text-xs uppercase"
            >
            <span class="lg inline-block ml-2">
                관심상품
                </span>
              </span>
              </router-link>
          </li>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="lg flex items-center">
            <router-link to="/list3">

             <span
              class=" text-blueGray-800 px-3 py-2 flex items-center text-lg uppercase font-bold"
            >
              <span class="lg inline-block ml-2">STYLE</span>

            </span>
              </router-link>
          </li>
          <li class="lg flex items-center">
            <router-link to="/list2">
             <span
              class=" text-blueGray-800 px-3 py-2 flex items-center text-lg uppercase font-bold"
            >
              <span class="lg inline-block ml-2">SHOP</span>
            </span>
            </router-link>
          </li>
          <li class="lg flex items-center">
            <router-link to="/Cscenter">
             <span
              class=" text-blueGray-800 px-3 py-2 flex items-center text-lg uppercase font-bold"
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
//import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    //IndexDropdown,
  },
};
</script>

<template>
  <div>
    <a
      class="hover:text-blueGray-500 text-lightBlue-400 px-3 py-2 flex items-center text-xs uppercase font-bold"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      SHOP
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        LEGO
      </span>
      <router-link
        to="/admin/dashboard"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        아키텍처
      </router-link>
      <router-link
        to="/admin/settings"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        캐릭터
      </router-link>
      
      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        BEARBRICK
      </span>
      <router-link
        to="/auth/login"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        베어브릭 모든 상품
      </router-link>


      <!-- <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
       <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        BEARBRICK
      </span>

      <router-link
        to="/auth/login"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Login
      </router-link>
      <router-link
        to="/auth/register"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Register
      </router-link>
      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        No Layout
      </span>
      <router-link
        to="/landing"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Landing
      </router-link>
      <router-link
        to="/profile"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Profile
      </router-link> -->
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>

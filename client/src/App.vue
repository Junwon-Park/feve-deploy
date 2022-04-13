<template>
  <v-app>
    <v-main>
    <navbar v-if="!isAdmin" />
      <AdminSidebar v-else  />
    <router-view />
      <Chat />
    <footer-component
        :class="[{ 'md:ml-64' :isMypage }, {'md:ml-64' :isAdmin}]" />
    </v-main>
  </v-app>
</template>
<script>
import AdminSidebar from '@/components/Sidebar/AdminSidebar';
import Navbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import Chat from "@/components/Chat/Chat.vue"
export default {
  data() {
    return {
      isAdmin: false,
      isMypage: false,
    };
  },
  created(){
    let path =this.$route.path.split('/');
    if(path[1] === 'admin'){
      this.isAdmin = true
      return;
    }

    for(let p of path)
    {
      if(p === 'mypage'){
        this.isMypage = true;
        return;
      }
    }
  },
  components: {
    Navbar,
    FooterComponent,
    AdminSidebar,
    Chat
  },
};
</script>

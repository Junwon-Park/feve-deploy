<template>
  <v-app>
    <v-main>
    <navbar v-if="!isAdmin" />
      <AdminSidebar v-else  />
    <router-view />
    <footer-component />
    </v-main>
  </v-app>
</template>
<script>
import AdminSidebar from '@/components/Sidebar/AdminSidebar';
import Navbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  created(){
    let path =this.$route.path.split('/');
    if(path[1] === 'admin'){
      this.isAdmin = true
    }
  },
  components: {
    Navbar,
    FooterComponent,
    AdminSidebar
  },
};
</script>

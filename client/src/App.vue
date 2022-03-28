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
      //isAdmin: false,
    };
  },
  // created(){
  //   if(this.$route.path === '/admin/'){
  //     this.isAdmin = true
  //   }
  //   console.log(this.$route.path);
  // },
  computed:{
    isAdmin(){
      console.log(this.$route);
      return this.$route.name==='admin'
    }
  },
  components: {
    Navbar,
    FooterComponent,
    AdminSidebar
  },
};
</script>

<template>
  <v-app>
    <v-main>
    <navbar />
    <router-view />
    <footer-component />
    </v-main>
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
export default {
  data() {
    return {

    };
  },
  components: {
    Navbar,
    FooterComponent,
  },
};
</script>

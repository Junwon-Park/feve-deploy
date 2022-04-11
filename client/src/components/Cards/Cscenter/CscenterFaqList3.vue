<template>
  <div
      class="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded"
  >
          <CscenterFaqCards3
          />

  </div>
</template>
<script>

import CscenterFaqCards3 from "@/components/Cards/Cscenter/CscenterFaqCards3.vue";

export default {
  props:{
    title: {
      type: String,
      default: "리스트",
    },
    items: {
      required: true,
    },
  },
  data () {
    return {
    }
  },
  components:{
   CscenterFaqCards3,

  },
  methods: {
  
  },
}
</script>
<style>
  .dropdown{
    position:relative;
    display:inline-block;
  }
  .dropdown-content{
    display:none;
    position:absolute;
    min-width:75px;
    padding:5px;
    box-shadow: 0px 8px 16px 0px rgba(0,  0,  0, 2);
  }
  .dropdown-content a {
    color:black;
    padding:8px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover{background-color: white;}
  .dropdown:hover .dropdown-content{display: block;}
  .dropdown:hover .dropdown-button{background-color:white;}
</style>
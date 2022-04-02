<template>
    <v-tabs  
    >
      <v-tab v-for="item in items" :key="item.tapName" style="text-center;  width:33%; flex-direction: column;" >
        <h6 class="text-h6 font-bold" >{{item.count}}</h6>
        <h6>{{item.tapName}}</h6>
      </v-tab>
    </v-tabs>    
</template>

<script>
export default {
    props:{
        items:Array
    },
    data () {
      return {}
    }
}
</script>

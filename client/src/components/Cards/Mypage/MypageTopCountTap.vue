<template>
    <v-tabs  
    >
      <v-tab v-for="(tapName, i) in tapNames" :key="i" 
      @click="onTapChanged(i)"
      style="text-center;  width:33%; flex-direction: column;" >
        <h6 class="text-h6 font-bold" >{{counts[i]}}</h6>
        <h6>{{tapName}}</h6>
      </v-tab>
    </v-tabs>    
</template>

<script>
export default {
    props:{
        counts:Array,
        tapNames:Array
    },
    data () {
      return {}
    },
    methods: {
      onTapChanged(idx)
      {
        this.$emit("onTapChanged", idx);
      },
    },
}
</script>

<template>
        <tr>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-center"

          >
            {{ USER_ID }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-center"

          >
            <v-btn
                small
                color="black"
                style="color: white !important;"
                v-if="following"
                @click="followStatus">
              팔로우
            </v-btn>
          </td>
        </tr>
</template>

<script>
export default {
  props:{
      USER_ID: {
        type: String,
        default: "abcde"
      },
    follower: {
        type: Boolean,
    },
    following: {
      type: Boolean,
    }
  },
  watch:{
    USER_ID: function(){
      console.log(this.USER_ID)
    }
  },
  data(){
    return{
    }
  },
  components: {

    },
  methods: {
    followStatus(){

    }
  },
  created(){
    console.log("props: ", this.USER_ID)
    console.log("props: ", this.follower)
    console.log("props: ", this.following)
  },
  updated(){
    console.log("props: ", this.USER_ID)
    console.log("props: ", this.follower)
    console.log("props: ", this.following)
  }
  }
</script>

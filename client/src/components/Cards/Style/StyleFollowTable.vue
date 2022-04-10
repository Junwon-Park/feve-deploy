<template>
        <tr>
          <td v-if="!following"
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-center"

          >
            {{ followList.USER_ID }}
          </td>
          <td v-else
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-center"

          >
            {{ followingList.USER_ID }}
          </td>
        </tr>
</template>

<script>
export default {
  props:{
    followingList:{
      type: Object
    },
  followList:{
    type: Object
  },
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
  }
</script>

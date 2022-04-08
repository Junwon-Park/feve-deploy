<template>
      <table class=" w-full bg-transparent border-collapse">
        <thead class="thead-light">
          <tr>
            <th
              class="px-6  border-b-2  text-black  align-middle border border-solid  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
              style="border-color: black"
              v-for="(table, idx) in table" :key="idx"
            >
              {{ table }}

            </th>
          </tr>
       </thead>
        <tbody>
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
                v-if="follower"
                @click="followStatus">
              팔로우
            </v-btn>
          </td>
        </tr>
        </tbody>
      </table>
</template>

<script>
export default {
  props:{
      USER_ID: {
        type: String,
        default: ""
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
      table: ['아이디','상태'],
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
  }
  }
</script>

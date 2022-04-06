<template>
    <div class="grid ">
      <h1>관심 상품</h1>
      
      <mypage-favorite-list-slot 
      v-for="(item, i) in list" :key="i"
      :item="item"
      @onDeleteClicked="onDeleteFavorite(item)"/>

      <div class="text-center">
        <v-pagination
          v-model="curPage"
          :length="totalPage"
          :total-visible="7"
          @input="onPageChanged"
        ></v-pagination>
      </div>
    </div>
</template>

<script>
import MypageFavoriteListSlot from '../../components/Cards/Mypage/MypageFavoriteListSlot.vue';

  export default {
    components:{
      MypageFavoriteListSlot,
    },
    data () {
      return {
        list:[],
        curPage:1,
        totalPage:0,
        slotCountPerPage:10,
        start:0,
        end:10,
      }
    },
    created(){
      this.getFavoriteListCount();
    },
    methods: {
      getFavoriteListCount()
      {
        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/favoriteList/getCount', {
          USER_KEY : '1', //로그인과 연동시키기
        })
        .then((result) => {
          // console.log(result.data);
          // let aa = result.data / this.slotCountPerPage;  
          // console.log(typeof aa, "aa: ", aa);
          this.totalPage = Math.ceil(result.data / this.slotCountPerPage);  
          this.getFavoriteList();
        })
        .catch((error) => {
          console.log(error);
        });
      },

      setIndexs(){
        this.start = (this.curPage-1) * this.slotCountPerPage;
        this.end = this.start + this.slotCountPerPage;
      },

      getFavoriteList(){
        // console.log("this.start : ", this.start);
        // console.log("this.end : ", this.end);

        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/favoriteList', {
          USER_KEY : '1', //로그인과 연동시키기
          LIMIT_START : this.start,
          LIMIT_END : this.end,
        })
        .then((result) => {
          // console.log(result.data);
          this.list = result.data;
        })
        .catch((error) => {
          console.log(error);
        });
      },

      onDeleteFavorite(item){
        // console.log("onDeleteFavorite.name: ", item.PRODUCT_NAME);
        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/favoriteList/delete', {
          FAVORITE_KEY : item.FAVORITE_KEY,
        })
        .then(() => {
          // console.log(result);
          this.getFavoriteList();
        })
        .catch((error) => {
          console.log(error);
        });
      },

      onPageChanged(page){
        // console.log("onPageChanged.page: ", page);
        this.curPage = page;
        this.setIndexs();
        this.getFavoriteList();
      }
    },
  }
</script>"
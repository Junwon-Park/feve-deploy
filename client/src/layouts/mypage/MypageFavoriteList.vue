<template>
    <div class="grid" v-if="list.length > 0">
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
          color="black"
          class="my-4"
        ></v-pagination>
      </div>
    </div>
    <div v-else style="text-align:center; margin-top:4rem;">
      관심상품이 없습니다.
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
        slotStart:0,
        slotCount:10,
      }
    },
    created(){
      this.getFavoriteListCount();
      this.getFavoriteList();
    },
    methods: {
      getUserKey()
      {
        return localStorage.getItem('userKey');
      },

      getFavoriteListCount()
      {
        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/favoriteList/getCount', {
          USER_KEY : this.getUserKey(),
        })
        .then((result) => {
          // console.log(result.data);
          // let aa = result.data / this.slotCountPerPage;  
          // console.log(typeof aa, "aa: ", aa);
          this.totalPage = Math.ceil(result.data / this.slotCountPerPage);  
          this.setIndexs();
        })
        .catch((error) => {
          console.log(error);
        });
      },

      setIndexs(){
        this.slotStart = (this.curPage-1) * this.slotCountPerPage;
      },

      onPageChanged(page){
        // console.log("onPageChanged.page: ", page);
        this.curPage = page;
        this.setIndexs();
        this.getFavoriteList();
      },

      getFavoriteList(){
        // console.log("this.slotStart : ", this.slotStart);
        // console.log("this.slotCount : ", this.slotCount);

        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/favoriteList', {
          USER_KEY : this.getUserKey(),
          LIMIT_START : this.slotStart,
          LIMIT_COUNT : this.slotCount,
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
        // console.log("onDeleteFavorite.name: ", item.FAVORITE_KEY);
        this.$axios.post(this.$store.getters.ServerUrl + '/mypage/favoriteList/delete', {
          FAVORITE_KEY : item.FAVORITE_KEY,
        })
        .then(() => {
          this.curPage = 1;
          this.setIndexs();
          this.getFavoriteListCount();
          this.getFavoriteList();
        })
        .catch((error) => {
          console.log(error);
        });
      },

      
    },
  }
</script>"
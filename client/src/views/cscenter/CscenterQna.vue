<template>
  <div>
    <main class="profile-page">
      <CscenterSidebar />
      <section class="relative py-16  md:ml-64">
      
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg "
          >
            <div class="px-6">
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12 px-4">
                    <div class="container">
                      <div class="w-full mb-12 xl:mb-0 px-4 mt-12" style="min-height: 70vh">
                          <CscenterQnaList v-bind="items" :items="items" :title="title"/>
                          <Pagination />
                      </div>
                       </div>
                      <div class="form-row float-right">
                        <!-- <CscenterQnaModal
                          :dialog="recDialog"
                          :table="table"
                          :title="title"
                          :item="item"
                          :receivedCscenterKey="receivedCscenterKey"
                          :receivedUserid="receivedUserid"
                          @sendDialog="sendDialog"
                          @updateList="updateList"/> -->
                        <v-btn depressed color="yellow" to="/CscenterInsert">
                        문의 작성 하기
                        </v-btn>
                        <!-- <button
                            class="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            @click="fDialog(), sendItems()"
                        >
                          문의하기
                        </button> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
  </div>
</template>
<script>
import CscenterSidebar from "@/components/Sidebar/CscenterSidebar.vue";
import CscenterQnaList from "@/components/Cards/Cscenter/CscenterQnaList.vue";
import Pagination from "@/components/Pagination.vue" ;


export default {
  data() {
    return {
      title: "문의 내역",
      items:
        {
          CSCENTER_KEY: 0,
          CSCENTER_TITLE: '',
          CSCENTER_CONTENTS: '',
          CSCENTER_WDATE: '',
          CSCENTER_STATUS: '',
          CSCENTER_COMMENT: '',
          CSCENTER_COMMENT_WDATE: '',
          USER_KEY: '',
          USER_ID:'',
        },

    }
  },
  components: {
    
    CscenterSidebar,
    CscenterQnaList,
    Pagination,
  },
  // },
  // methods: {
  //   cDialog(){
  //     this.recDialog=true;
  //   },
  //   sendDialog(){
  //     this.recDialog = false
  //   },
  //   sendItems(recC, recU, recUk) {
  //     let that=this;
  //     that.receivedCscenterKey=recC;
  //     that.receivedUserid=recU;
  //     that.receivedUserkey=recUk;

  //     console.log(that.receivedCscenterKey)

  //     this.$axios.post('http://localhost:8080/admin/cscenter/one',{
  //       sendCscenterKey: that.receivedCscenterKey,
  //       sendUserid: that.receivedUserid,
  //       sendUserkey: that.receivedUserkey,
  //     }).then(function(res){
  //       that.item=res.data[0];
  //       console.log("res", res);
  //     }).catch(function(err){
  //       console.log(err);
  //     });
  //   },
  //   updateList(newS){
  //     let that = this;
  //     that.cscenterComment = newS;

  //     this.$axios.post('http://localhost:8080/admin/updateCscenter', {
  //       sendCscenterKey: that.receivedCscenterKey,
  //       cscenterComment: that.cscenterComment,
  //       sendUserkey: that.receivedUserkey,
  //     }).then(function(res){
  //       console.log(res)
  //     })
  //         .catch(function(err){
  //           console.log(err);
  //         });
  //   }
  // },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/cscenter')
        .then(function(res){
          that.items=res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>



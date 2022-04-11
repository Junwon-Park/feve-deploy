<template>
  <v-row justify="center" class="mt-2">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        :table="table"
        :item="item"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="상품사진경로"
                >
                  사진
                </label>

                <form>
                  <input
                      type="file"
                      id="uploadImg"
                      name="image"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="사진경로"
                      @change="handleImage"
                  />
                </form>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              > <v-textarea
                  v-model="Posts.post_contents"
                  filled
                  auto-grow
                  label="내용"
                  rows="4"
                  row-height="30"
                  shaped
              ></v-textarea>
              </v-col>
              <v-col
                  cols="12"
                  sm="12"
                  md="12">
                <h5>#해시태그 <small>(입력 후 엔터 혹은 선택)</small></h5>
                <v-combobox
                    v-model="chips"
                    :items="items"
                    chips
                    clearable
                    multiple
                    prepend-icon="mdi-pound"
                    :elevation="0"
                    solo
                >
                  <template
                      :elevation="0"
                      v-slot:selection="{ attrs, item, select, selected }">
                    <v-chip
                        v-bind="attrs"
                        :input-value="selected"
                        color="orange"
                        text-color="white"
                        close
                        @click="select"
                        @click:close="remove(item)"
                    >
                      <strong>#{{ item }}</strong>
                    </v-chip>
                  </template>
                </v-combobox>
              </v-col>
            </v-row>
          </v-container>
          <small>*내용을 수정한 뒤 저장버튼을 눌러주세요.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="red darken-1"
              text
              @click="$emit('sendDialog')"
          >
            취소
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="saveStyleWrite"
          >
            저장
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    chips: [],
    items: ['Lego', 'BearBrick', 'Architecture', 'Character', 'Vehicle', '100%', '200%', '1000%'],
    dialog: false,
    post_key: 0,
    Posts:{
      post_contents:"",
      post_pic:"",
    }
  }),
  props: {
    dialog:{},
    table: [],
    title:{},
    item:{},
    userInfo:{},
  },

  methods:{
    sendDialog(){
      this.recDialog = true
      //console.log('aa');
    },
    closeDialog(){
      this.dialog=false
    },
    saveStyleWrite(){
      let that = this;
      that.$axios.post('http://localhost:8080/style/addPost',{
        post_pic: that.Posts.post_pic,
        post_contents: that.Posts.post_contents,
        user_key: that.userInfo.USER_KEY,
        hashtag: that.chips
      })
          .then(function( res ){
            //console.log(res.data.POST_KEY)
            that.post_key=res.data.POST_KEY;
            alert("게시글을 등록했습니다.");
            that.$router.go(that.$router.currentRouter);
          })
          .catch(function(err){
            console.log(err);
          });

      let file = this.uploadServerImg[0];
      const formData = new FormData();
      formData.append("image", file);
      this.$axios.post('http://localhost:8080/uploadStyleImage', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      .then(function(){
        //console.log(res)
      })
      .catch(function(err){
        console.log(err)
      })
    },
    handleImage(e){
      this.uploadServerImg = e.target.files;
      let that = this;
      if(this.uploadServerImg) {
        that.Posts.post_pic=this.uploadServerImg[0].name;
      }
      else {
        that.Posts.post_pic = 'default_pic.jpg';
      }
    },
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
  },
  created() {

  },
}
</script>
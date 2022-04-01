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
                  sm="6"
                  md="4"
              >
                <v-text-field
                    :label="table[1]"
                    :value="item.PRODUCT_NAME"
                    v-model="newProductName"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    :label="table[2]"
                    :value="item.PRODUCT_MNUM"
                    v-model="newProductMnum"
                ></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="4"
              >
                <v-text-field
                    :label="table[5]"
                    :value="item.PRODUCT_ORIPRICE"
                    v-model="newProductOriprice"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <label class="text-xs">브랜드</label>
                <select
                    class="w-full px-3 py-3 shadow"
                    @change="secondClassCate($event)"
                    v-model="brandStatus"
                    required
                > <option v-for="( brand, idx ) in product_get_brand" :key="idx" :value="brand['CATEGORY_NAME']">{{  brand['CATEGORY_DESC'] }}</option></select>

              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <label class="text-xs">카테고리</label>
                <select  id="category" class=" w-full px-3 py-3 shadow"  v-model="categoryStatus" disabled >
                  <option  v-for="( cate, idx ) in product_get_cate" :key="idx" :value="cate['CATEGORY_KEY']">{{  cate['CATEGORY_DESC'] }}</option>
                </select>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="상품사진경로"
                >
                  사진
                </label>
                <input
                    type="file"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="사진경로"
                    @change="handleImage"
                />
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="6"
              >
                <label
                    class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="출시일"
                >
                  출시일
                </label>
                <input
                    type="date"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="출시일"
                    v-model="newProductLdate"
                />
              </v-col>

              <v-col
                  cols="12"
                  sm="12"
                  md="12"
              >
                <v-text-field
                    label="상세설명"
                    :value="item.PRODUCT_DESC"
                    v-model="newProductDesc"
                ></v-text-field>
              </v-col>

            </v-row>
          </v-container>
          <small>*내용을 수정한 뒤 저장버튼을 눌러주세요.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="$emit('sendDialog')"
          >
            취소
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="updateModifiedList"
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
    dialog: false,
      brandStatus: "",
      categoryStatus: "",
      newProductName:"",
      newProductMnum:"",
      newProductLdate:"",
      newProductPic:"",
      newProductDesc:"",
      newProductOriprice:"",
    sendProductKey: 0,
    product_get_brand:[],
    product_get_cate: []
  }),
  props: {
    dialog:{},
    table: [],
    title:{},
    item:{}
  },

  methods:{
    sendDialog(){
      this.recDialog = true
    },
    closeDialog(){
      this.dialog=false
    },
    updateModifiedList(){
      let sendProductKey=this.item.PRODUCT_KEY;
      let newProductName=this.newProductName;
      let newProductMnum=this.newProductMnum;
      let newProductLdate=this.newProductLdate;
      let newProductPic=this.newProductPic;
      let newProductDesc=this.newProductDesc;
      let newProductOriprice=this.newProductOriprice;
      let brandStatus=this.brandStatus;
      let categoryStatus=this.categoryStatus;

      this.$emit('updateList',
        sendProductKey,
        newProductName,
        newProductMnum,
        newProductLdate,
        newProductPic,
        newProductDesc,
        newProductOriprice,
        brandStatus,
        categoryStatus
      );
      alert("상품 수정을 완료했습니다.");
      this.$router.go(this.$router.currentRouter);
    },
    secondClassCate( event ){
      console.log(event.target.value);
      let that = this;
      this.$axios.post('http://localhost:8080/category/second', {
        product_brand: event.target.value,
      })
          .then(function(res){
            that.product_get_cate = res.data;
            document.querySelector('#category').disabled=false;
          })
          .catch(function(err){
            console.log(err);
          })
    },
    handleImage(e) {
      let imageFile = e.target.files;
      let that = this;
      if (imageFile) {
        //let url = URL.createObjectURL(imageFile[0]);
        //that.product.product_pic=url;
        that.newProductPic = imageFile[0].name.split('.')[0];
        // console.log(url.split('/')[3]);
      } else {
        //that.product.imgsrc = require('../../assets/img/icon_question.png');
        that.newProductPic = 'icon_question';
      }
    }
  },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/category')
        .then(function(res){
          that.product_get_brand = res.data;
        })
        .catch(function(err){
          console.log(err);
        });

  },
}
</script>
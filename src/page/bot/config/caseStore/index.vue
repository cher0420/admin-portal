<template>
  <div class="yoy-main" >
    <section class="list-item" v-if="indexPage == true">
      <div class="button-style">
        <el-button type="primary" size="mini" @click="createCase()">创建案例</el-button>
        <div class="button-style-input">
          <el-input class='' size='small' placeholder="输入关键词搜索" @keyup.enter.native="search" v-model="searchVal">
          </el-input>
          <div class="search-icon">
            <i class="el-icon-search" @click="search"></i>
          </div>
        </div>


      </div>
      <div class="list-detail"  >

          <div class="list-detail-lis">
            <el-table
              :data="tableData" stripe
              border
              style="width: 100%">
              <el-table-column
                prop="sequence"
                label="序号" width="180"
              >
              </el-table-column>
              <el-table-column
                label="案例标题" width="240">
                <template slot-scope="scope">
                  <div class="case-title" @click="detailLis(scope.row)" >{{ scope.row.title}}</div>

                </template>
              </el-table-column>
              <el-table-column
                prop="classification"
                label="知识分类"
              >
              </el-table-column>
              <el-table-column
                prop="creationDate"
                label="创建时间"
              >
              </el-table-column>
              <el-table-column
                prop="updateDate"
                label="更新时间"
                width="180">
              </el-table-column>
            </el-table>
          </div>



        <div class="pagination-padding">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </section>
    <!-- 详情页-->
    <div v-if="indexPageDetail == true">
      <case-detail :navIndex="propValue" ></case-detail>
    </div>
    <!--  创建页 -->
    <div v-if="createPage == true" class="createCase">
      <create-case :navIndex="navIndex"></create-case>
    </div>
  </div>



</template>



<script>

  import $ from 'jquery';
  import  caseDetail from "./caseDetail";
  import  createCase from "./createCase";
 // import store from '../../../../store/index'
     import {mapActions} from 'vuex';
     import {obj} from "../../../../../static/api";

  export default {
    name: 'caseStore',

    computed:{
      //  各个子组件是否显示
      indexPage(){
        return this.$store.state.caseStore.indexPage
      },
      indexPageDetail(){
        return this.$store.state.caseStore.indexPageDetail
      },
      createPage(){
        return this.$store.state.caseStore.createPage
      }
  },
    components:{
      caseDetail,
      createCase,
    },
    data() {
      return {
        cur_page: "",
        total: 0,
        tableData: [],
        // 搜索
        searchVal: "",
        propValue:"",



      }
    },
    created() {
      this.getData()

    }
    ,
    methods: {
      getData() {
        let that = this;
        let data = {
          cur_page: this.cur_page,
          searchVal: this.searchVal,
        };

        that.tableData = obj.data.projects;
        that.total = 70;
        // $.ajax({
        //   type: "POST",
        //   url: "/api",
        //   data: data,
        //   dataType: "json",
        //   async: true,
        //   success: function (msg) {
        //     that.tableData = msg.data.projects;
        //     that.total = 70;
        //   }
        // })
      },

      // 分页导航
      handleCurrentChange(val) {
        this.cur_page = val;
        this.getData()
        // console.log(val);


      },
      search() {
        this.getData();
        // console.log(this.searchVal)
      },
      ...mapActions(
        ["detailshow","createCaseShow"]
      ),
      detailLis(row){
        console.log("this值",row);

        this.propValue =  row ;
        this.detailshow();
      },
      createCase(){
        this.createCaseShow();
      },



    }

  }
</script>
<style  lang="scss" scoped>
  @import  '../../../../style/index';
  /*@import "../../../../../static/base.css";*/


  .button-style {
    /*padding-left: 40px;*/
    position: relative;
  }

  .button-style button {

    width: 100px;
    height: 32px;
    line-height: 32px;
    padding: 0;
    box-sizing: border-box;
  }

  .button-style .button-style-input {
    margin-left: 10px;
    display: inline-block;
    width: 360px !important;
    height: 32px !important;
    box-sizing: border-box;
    margin-top: -2px;
    position: relative;
  }

  .search-icon {
    cursor: pointer;
    display: inline-block;
    font-size: 17px;
    top: 1px;
    right: 1px;
    position: absolute;
    border-radius: 0 3px 3px 0;
    height: 30px;
    font-size: 17px;
    background: #EAF6FE;
    width: 30px;
    padding-left:6.5px;
    padding-top:3.5px;
    color: #2A8CE7;
    box-sizing: border-box;
  }
.case-title {
  color: #2a8ce7;
  cursor: pointer;
}
.createCase {
  margin: 0 40px;
}

  .list-detail-lis {

  }

  .pagination-padding {
    text-align: center;
    margin: 30px;
    margin-bottom: 0;
  }

  .list-detail {
    padding: 40px 0px;
    padding-top: 20px;
    padding-bottom: 0;
    box-sizing: border-box;
    width: 80%;
  }

</style>


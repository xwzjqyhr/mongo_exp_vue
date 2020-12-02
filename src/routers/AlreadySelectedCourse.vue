<template>
  <div id="app" >
    <div style="width: 400px">
      <el-input placeholder="请输入学号" v-model="sid" class="input-with-select" maxlength="150">
        <el-button slot="append" icon="el-icon-search" @click="getSelectedCourseList"></el-button>
      </el-input>
    </div>


    <el-table :data="selectedCourseList">
      <el-table-column prop="cid" label="课程号" width="150">
        <template slot-scope="scope">
          <el-input  v-model="scope.row.cid"   ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="课程名称" width="150">
        <template slot-scope="scope">
          <el-input type="text"  v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="credit" label="学分"  width="100">
        <template slot-scope="scope">
          <el-input  type="text"  v-model="scope.row.credit"  />
        </template>
      </el-table-column>

      <el-table-column label="退课" align="center" width="100">
        <template slot-scope='scope'>
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteSelectedCourseCourse(scope.$index)"></el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>

</template>

<script>
export default {
  name: "AlreadySelectedCourse",
  data() {
    return {
      sid:"",
      selectedCourseList:[]
    }
  },
  methods:{
    getSelectedCourseList() {
      if(this.sid === "") return ;
      const that = this
      this.$axios.get('/courses/exp5/1',{
        params:{"sid":that.sid}
      })
          .then(function (response) {
            that.selectedCourseList = response.data
            console.log( response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    },
    deleteSelectedCourseCourse(index) {
      const that = this
      const cid = that.selectedCourseList[index].cid;
      console.log(cid)
      this.$axios.delete('/courses/exp5/1',{
        params:{"sid":that.sid,"cid":cid}
      })
          .then(function (response) {
            that.selectedCourseList.splice(index, 1);
            alert("退课成功")
            console.log( response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <el-table :data="courseList">
      <el-table-column prop="_id.cid" label="课程号" width="150">
        <template slot-scope="scope">
          <el-input  v-model="scope.row._id.cid"   ></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="_id.cname" label="课程名称" width="250">
        <template slot-scope="scope">
          <el-input type="text"  v-model="scope.row._id.cname"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="_id.credit" label="学分" width="150">
        <template slot-scope="scope">
          <el-input  v-model="scope.row._id.credit"   ></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="avg_score" label="平均分数"  width="150">
        <template slot-scope="scope">
          <el-input  type="text"  v-model="scope.row.avg_score"  />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Exp6_6",
  data(){
    return {
      courseList:[]
    }
  },
  methods:{
    getStuCountAndAvgScore() {
      const that = this
      this.$axios.get('/courses/exp6/8')
          .then(function (response) {
            console.log( response.data);
            that.courseList = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  },
  mounted() {
    this.getStuCountAndAvgScore()
  }
}
</script>

<style scoped>

</style>

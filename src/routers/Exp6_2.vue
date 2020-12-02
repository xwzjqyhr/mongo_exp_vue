<template>
  <div id="exp6_2">
    <el-table :data="studentList">
      <el-table-column prop="_id.sid" label="学号" width="150">
        <template slot-scope="scope">
          <el-input  v-model="scope.row._id.sid"   ></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="_id.sname" label="姓名" width="150">
        <template slot-scope="scope">
          <el-input type="text"  v-model="scope.row._id.sname"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="_id.sex" label="性别" width="150">
        <template slot-scope="scope">
          <el-input  v-model="scope.row._id.sex"   ></el-input>
        </template>
      </el-table-column>


      <el-table-column prop="avg_score" label="平均分"  width="150">
        <template slot-scope="scope">
          <el-input  type="text"  v-model="scope.row.avg_score"  />
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: "exp6_2",
  data() {
    return {
       studentList:[]
    }
  },
  methods:{
    getMaxElementsByAvgScore() {
      const that = this
      this.$axios.get('/students/exp6/2')
          .then(function (response) {
            console.log( response.data);
            that.studentList = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  },
  mounted() {
    this.getMaxElementsByAvgScore();
  }
}
</script>

<style scoped>

</style>

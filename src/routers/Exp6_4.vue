<template>
  <div id="exp6_4">
    <el-table :data="studentList">
      <el-table-column prop="sid" label="学号" width="150">
        <template slot-scope="scope">
          <el-input  v-model="scope.row.sid"   ></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="sname" label="姓名" width="150">
        <template slot-scope="scope">
          <el-input type="text"  v-model="scope.row.sname"></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="sex" label="性别" width="150">
        <template slot-scope="scope">
          <el-input  v-model="scope.row.sex"   ></el-input>
        </template>
      </el-table-column>

      <el-table-column prop="maxScoreCourseName" label="分数最高课程" width="150">
        <template slot-scope="scope">
          <el-input  v-model="scope.row.maxScoreCourseName"   ></el-input>
        </template>
      </el-table-column>


      <el-table-column prop="maxScore" label="分数"  width="150">
        <template slot-scope="scope">
          <el-input  type="text"  v-model="scope.row.maxScore"  />
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: "exp6_4",
  data() {
    return {
      studentList:[]
    }
  },
  methods:{
    getEveryoneMaxScoreCours() {
      const that = this
      this.$axios.get('/students/exp6/4')
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
    this.getEveryoneMaxScoreCours();
  }
}
</script>

<style scoped>

</style>

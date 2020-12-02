<template>
  <div id="app">
    <el-table :data="courseList">
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

      <el-table-column label="选课" align="center" width="100">
        <template slot-scope='scope'>
          <el-button type="success" @click="addCourse(scope.index)">选课</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: "SelectCourse",
  data() {
    return {
      sid:"200800020101",
      courseList:[]
    }
  },
  methods:{
    getCourses() {
        const that = this
        this.$axios.get('/courses/exp5/2')
            .then(function (response) {
              that.courseList = response.data
              console.log( response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
    },
    addCourse(index) {
      alert("选课成功")
      console.log(index)
    }
  },
  mounted() {
    this.getCourses();
  }
}
</script>

<style scoped>

</style>

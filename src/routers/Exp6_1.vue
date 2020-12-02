<template>
  <div id="exp6_1">
    <el-input   type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}" v-model="courseNames">

    </el-input>
  </div>
</template>

<script>
export default {
  name: "Exp6_1",
    data() {
      return {
        courseNames :""
      }
    },
  methods:{
    getCourseNames() {
        const that = this
        that.courseNames  = ""
        this.$axios.get('/courses/exp6/1')
            .then(function (response) {
              console.log( response.data);
              const courseNameList = response.data;
              const length = courseNameList.length;
              for(var i = 0; i < length; i++) {
                that.courseNames +=i +". "+ courseNameList[i] +"  ";
              }
            })
            .catch(function (error) {
              console.log(error);
            });
    }
  },
  mounted() {
    this.getCourseNames();
  }
}
</script>

<style scoped>

</style>

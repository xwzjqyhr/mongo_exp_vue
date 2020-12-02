<template>
  <div id="app">
      <el-container style="height: 1700px; border: 1px solid #eee;">
        <el-container>
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="[]">
              <el-submenu index="1">
                <template slot="title">
                    实验2
                 </template>
                <el-menu-item index="1-1">
                  <router-link to="/students" tag="div">学生相关</router-link>
                </el-menu-item>
<!--                <el-menu-item index="1-2" >-->
<!--                  <router-link to="/students" tag="div"></router-link>-->
<!--                </el-menu-item>-->
              </el-submenu>

              <el-submenu index="2">
                <template slot="title">实验3</template>
                <el-menu-item index="2-1">
                  <router-link to="/exp3" tag="div">插入数据</router-link>
                </el-menu-item>

              </el-submenu>
              <el-submenu index="3">
                <template slot="title">实验4</template>
                <el-menu-item index="3-1">
                  <router-link to="/updateStudent" tag="div">更新学生信息</router-link>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <router-link to="/updateCourse" tag="div">更新课程信息</router-link>
                </el-menu-item>
                <el-menu-item index="3-3">
                  <router-link to="/updateTeacher" tag="div">更新教师信息</router-link>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">实验5</template>
                <el-menu-item index="4-1">
                  <router-link to="/alreadySelectedCourse" tag="div">已选课表</router-link>
                </el-menu-item>
                <el-menu-item index="4-2">
                  <router-link to="/selectCourse" tag="div">选课</router-link>
                </el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">实验6</template>
                <el-menu-item index="5-1">
                  <router-link to="/exp6/1" tag="div">test1</router-link>
                </el-menu-item>
                <el-menu-item index="5-2">
                  <router-link to="/exp6/2" tag="div">test2</router-link>
                </el-menu-item>
                <el-menu-item index="5-3">
                  <router-link to="/exp6/3" tag="div">test3</router-link>
                </el-menu-item>
                <el-menu-item index="5-4">
                  <router-link to="/exp6/4" tag="div">test4</router-link>
                </el-menu-item>
                <el-menu-item index="5-6">
                  <router-link to="/exp6/6" tag="div">test6</router-link>
                </el-menu-item>
                <el-menu-item index="5-8">
                  <router-link to="/exp6/8" tag="div">test8</router-link>
                </el-menu-item>
                <el-menu-item index="5-9">
                  <router-link to="/exp6/9" tag="div">test9</router-link>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main>
              <router-view> </router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      studentList:[{id:"",sid:"",name:"",sex:"",age:"",birthday:"",dname:"",dclass:""}],
      teacherList:[{id:"",tid:"",name:"",sex:"",age:"",dName:""}],
      courseList:[{id:"",cid:"",name:"",fCid:"",credit:""}],

    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

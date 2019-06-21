<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h2><a href="admin.html">admin Links</a></h2>
    <h2><a href="test.html">test Links</a></h2>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <div class="test">
      市内交通规划
    </div>
  </div>
</template>

<script>
import {utils} from '../../../common'

export default {
  data () {
    return {
      msg: 'Welcome to Index2'
    }
  },
  mounted () {
    console.log(utils)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .b1 {
    padding: 0 50px;
    font-size: 20px;
  }

  .test {
    font-size: 26px;
    display: flex;
    transform: rotate(1deg);
  }
</style>

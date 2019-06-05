<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <h2><a href="admin.html">admin Links</a></h2>
    <h2><a href="test.html">test Links</a></h2>
    <van-button type="default" class="b1">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <div class="test">
      hello
    </div>
  </div>
</template>

<script>
  import utils from '../../../common'

  export default {
  name: 'HelloWorld',
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
  .index {
    width: 50%;
    margin: 0 auto;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .b1 {
    padding: 0 50px;
    font-size: 20px;
  }
  .test {
    font-size: 40px;
  }
</style>

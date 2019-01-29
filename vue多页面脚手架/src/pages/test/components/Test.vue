<template>
  <div class="index">
    <h1>{{ msg }}</h1>

    <div class="test">
      hello test
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Index2'
    }
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

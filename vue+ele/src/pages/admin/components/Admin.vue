<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><a href="index.html">index Links</a></h2>
  </div>
</template>

<script>
import {utils, postData} from '../../../common'

export default {
  data () {
    return {
      msg: 'Welcome to Admin'
    }
  },
  mounted () {
    console.log(utils)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    font-size: 20px;
  }
</style>

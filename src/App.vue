<template>
  <div id="app">
    <hello :hello="hello"></hello>
  </div>
</template>

<script>
  import $ from 'webpack-zepto';
  import Hello from 'components/hello'
  export default {
    name: 'app',
    components: {
      Hello
    },
    mounted(){
      //设置html Rem
      let rootRem = screen.width / 10;
      $('html').css('fontSize', rootRem + 'px');
      $('body').css('fontSize', '0.45rem');
    },
    data(){
      return {
        hello: '欢迎进入cnode论坛'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  html, body, #app {
    padding: 0;
    margin: 0;
    height: 100%;
  }
</style>

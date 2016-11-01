<template>
  <div id="indexRt">
    <router-view></router-view>
  </div>
</template>
<script>
  import $ from 'webpack-zepto';
  import types from './vuex/types';
  export default{
    mounted(){
      //设置html Rem
      let rootRem = screen.width / 10;
      this.$store.dispatch(types.MODIFY_REM,rootRem);
      $('html').css('fontSize', rootRem + 'px');
      $('body').css('fontSize', '0.45rem');
    }
  }
</script>
<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  html, body, #app, #indexRt {
    padding: 0;
    margin: 0;
    height: 100%;
    width:100%;
    overflow: hidden;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>

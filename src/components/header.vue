<template>
  <header class="header-wrap">
    <div class='header-i-1'></div>
    <div class="header-i-2"><slot></slot></div>
    <div class="menu header-i-1">菜单</div>
  </header>
</template>
<script>
  export default{

  }
</script>
<style lang="less">
  @import "./../assets/less/main.less";
  .header-wrap{
    .dis-flex-row-nowrap();
    justify-content: space-between;
    background-color: #ff0000;
    color:#fff;
    height: 44px;
    line-height: 44px;
    .header-i-1{
      flex-basis: 12%;
    }
    .header-i-2{
      flex-basis: 78%;
    }
    .menu{
      background-color: #ffdb13;
    }
  }
</style>

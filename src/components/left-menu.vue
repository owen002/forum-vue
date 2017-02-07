<template>
  <section class="left-bar transition-all" id="leftMenu" :style="translateX">
    <user-info></user-info>
    <div class="left-menus">
      <ul>
        <li  @click="pflow">目录1</li>
        <li>目录2</li>
        <li>目录3</li>
        <li>目录4</li>
        <li>目录5</li>
        <li>目录6</li>
      </ul>
    </div>
  </section>
</template>
<script>
  import userInfo from './userinfo.vue';
  import {mapGetters} from 'vuex';
  import types from './../vuex/types'
  import $ from 'webpack-zepto'

  export default{
    props: ['toggleMask', 'changeOpacityMask','translateX','fProp'],
    computed: {
      ...mapGetters({rootRem: types.GET_REM})
    },
    components: {
      userInfo
    },
    methods:{
      pflow(){
        this.$emit('hiFather',this.childState)
      }
    },
    data(){
      return {
        childState:'i am a child'
      }
    },
    mounted(){
    }
  }
</script>
<style lang="less">
  .left-bar {
    width: 6rem;
    background-color: rgba(255, 205, 36,.74);
    height: 100%;
    overflow-y: scroll;
    position: absolute;
    right: -6rem;
    z-index: 999;
    .left-menus {
      ul {
        margin-top: 1px;
        li {
          height: 1.3rem;
          line-height: 1.3rem;
          background-color: #f77f7f;
          color: #fff;
          border-top: 1px solid #fff;
          border-bottom: 1px solid #fff;
          margin-top: -1px;
        }
      }
    }
  }
</style>

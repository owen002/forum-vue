<template>
  <section class="left-bar transition-all" id="leftMenu" :style="translateX">
    <user-info></user-info>
    <div class="left-menus">
      <ul>
        <li>目录1</li>
        <li>目录2</li>
        <li>目录3</li>
        <li>目录4</li>
        <li>目录5</li>
        <li>目录6</li>
        <li>目录1</li>
        <li>目录2</li>
        <li>目录3</li>
      </ul>
    </div>
    <div class="about">关于</div>
  </section>
</template>
<script>
  import userInfo from './userinfo.vue';
  import {mapGetters} from 'vuex';
  import types from './../vuex/types'
  import $ from 'webpack-zepto'

  export default{
    data(){
      return {
        translateX: ''
      }
    },
    props: ['toggleMask', 'changeOpacityMask'],
    computed: {
      ...mapGetters({rootRem: types.GET_REM})
    },
    components: {
      userInfo
    },
    mounted(){
      let pX = '', max = 6, hidemin = 3;
      $(document).on('touchmove', (e)=> {
        pX = e.touches[0].pageX;
        let lv = pX - 10 * this.rootRem;
        if (lv < -max * this.rootRem) {
          e.stopPropagation();
          return false
        }
        this.translateX = 'transform:translateX(' + lv + 'px)';
        let ablv = Math.abs(lv), percentopac = ((ablv / (max * this.rootRem))*0.5).toFixed(2);
        this.changeOpacityMask(percentopac);
        this.toggleMask('block');
      }).on('touchend', ()=> {
        var transiX = this.translateX.match(/.*\((.*)px\)/);
        if (transiX && transiX.length > 1) {
          transiX = Math.abs(transiX[1]);
          if (transiX > hidemin * this.rootRem) {
            this.translateX = 'transform:translateX(-' + max * this.rootRem + 'px)';
          } else {
            this.translateX = 'transform:translateX(0px)';
            this.toggleMask('none');
          }
        } else {
          this.translateX = 'transform:translateX(0px)';
          this.toggleMask('none');
        }
      })
    },
    beforeRouteEnter(){
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

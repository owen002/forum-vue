<template>
  <section id="listViewWrapper" @touchmove="resolveTouchMove" @touchend="resolveTouchend">
    <div class="mask transition-all" @click="showLeftBar" v-show="maskFlag" v-bind:style="{opacity:opacity}"></div>
    <leftMenu :translateX="translateX"></leftMenu>
    <nv-header :showLeftBar="showLeftBar">列表页面</nv-header>
  </section>
</template>

<script>
  import leftMenu from './left-menu.vue';
  import nvHeader from './header.vue';
  import {mapGetters} from 'vuex';
  import types from '../vuex/types';

  let max = 6, hidemin = 3;
  export default {
    name: 'list',
    data(){
      return {
        translateX: 'transform:translateX(0px)',
        maskFlag:false,
        opacity:'0'
      }
    },
    computed: {
      ...mapGetters({
        rootRem: types.GET_REM
      })
    },
    components: {
      leftMenu,
      nvHeader
    },
    methods: {
      changeOpacityMask(val){
//        document.querySelector('.mask').style.opacity = val;
        this.opacity = val;
      },
      resolveTouchMove(e) {
        let pX = e.touches[0].pageX;
        let lv = pX - 10 * this.rootRem;
        if (lv < -max * this.rootRem) {
          e.stopPropagation();
          return false
        }
        this.translateX = 'transform:translateX(' + lv + 'px)';
        let ablv = Math.abs(lv), percentopac = ((ablv / (max * this.rootRem)) * 0.5).toFixed(2);

        this.changeOpacityMask(percentopac);
        this.maskFlag = true;
      },
      resolveTouchend(){
        var transiX = this.translateX.match(/.*\((.*)px\)/);
        if (transiX && transiX.length > 1) {
          transiX = Math.abs(transiX[1]);
          if (transiX > hidemin * this.rootRem) {
            this.translateX = 'transform:translateX(-' + max * this.rootRem + 'px)';
          } else {
            this.translateX = 'transform:translateX(0px)';
            this.maskFlag = false;
          }
        } else {
          this.translateX = 'transform:translateX(0px)';
          this.maskFlag = false;
        }
      },
      showLeftBar(){
        if (this.translateX == 'transform:translateX(0px)') {
          this.translateX = 'transform:translateX(-' + max * this.rootRem + 'px)';
          this.changeOpacityMask(0.5);
          this.maskFlag = true;
        } else {
          this.translateX = 'transform:translateX(0px)';
          this.maskFlag = false;
        }
      }
    }
  }
</script>
<style>
  .mask {
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 900;
  }

  #listViewWrapper {
    height: 100%;
  }
</style>

<template>
  <section id="listViewWrapper" @touchmove="resolveTouchMove" @touchend="resolveTouchend">
    <div class="mask transition-all" @click="showLeftBar" v-show="maskFlag" v-bind:style="{opacity:opacity}"></div>
    <leftMenu @hiFather="showChildMsg" :translateX="translateX"></leftMenu>
    <nv-header :showLeftBar="showLeftBar">列表页面</nv-header>

    <section id="listWrapper">

      <label style="height:50px;line-height:50px;display: block"><input type="checkbox" id="selectAll" v-model="selectAll"/>全选</label>
      <ul>
        <li v-for="item in articles" class="pos-li">
          <label>
            <input type="checkbox" v-model="item.isSelected">
            <div class="title" v-text="item.title"></div>
            <span v-text="item.desc"></span>
          </label>
          <router-link :to="{'name':'listDetail',params: { lid: item.id }}">文章详情</router-link>
        </li>
      </ul>
    </section>
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
        opacity:'0',
        articles:[
          {id:1,title:'文章1',desc:'好文章',isSelected:false},
          {id:2,title:'文章2',desc:'好文章',isSelected:false},
          {id:3,title:'文章3',desc:'好文章',isSelected:true},
          {id:4,title:'文章4',desc:'好文章',isSelected:false},
          {id:5,title:'文章5',desc:'好文章',isSelected:false}
        ]
      }
    },
    computed: {
      ...mapGetters({
        rootRem: types.GET_REM
      }),
      selectAll:{
          get:function () {
              for(let i of this.articles){
                  if(!i.isSelected){
                      return false;
                  }
              }
              return true;
          },
        set:function (v) {
            for(let i of this.articles){
              i.isSelected = v;
            }
            return v;
        }
      }
    },
    components: {
      leftMenu,
      nvHeader
    },
    methods: {
        showDetail:function () {
            alert('文章详情')
        },
      showChildMsg(msg){
        alert(msg);
      },
      changeOpacityMask(val){
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
<style scoped>
  .mask {
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 900;
  }
  .pos-li{

  }
.title{
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
}
  #listViewWrapper {
    height: 100%;
  }
</style>

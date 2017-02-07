<template>
  <div style="text-align: center">
    <div v-cloak>
      {{testVcloak}}
    </div>

    <router-link :to="{'name':'welcome',query:{name:'hew'}}">欢迎</router-link>
    <br>
    <router-link :to="{'name':'list',params: { user: 123 }}">进入列表</router-link>

    <div>
      <div id="tabs" style="position:fixed;top:200px;">
        <ul>
          <li @click="changeView('tab01')">tab01</li>
          <li @click="changeView('tab02')">tab02</li>
          <li @click="changeView('tab03')">tab03</li>
        </ul>
        <div id="appa" style="border:1px solid #ff0000;width:200px;height:100px; ">
          <component :is="currentView" keep-alive></component>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  //扩展组件tab01
  var tab01 = Vue.extend({
    template: "<div>this is tab01</div>",
  });
  //扩展组件tab02
  var tab02 = Vue.extend({
    template: "<div>this is tab02</div>",
  });
  //扩展组件tab03
  var tab03 = Vue.extend({
    template: "<div>this is tab03</div>",
  });
  export default{
    data:()=>{
      return{
        currentView:'tab01',
        testVcloak:'222'
      }
    },
    methods: {
      changeView(v){
        this.currentView = v;
      }
    },
    components:{
      tab01:tab01,
      tab02:tab02,
      tab03:tab03
    }
  }
</script>
<style scoped>

  #tabs li{
    margin:4px 0;
    border:1px solid #00C853;
  }
</style>

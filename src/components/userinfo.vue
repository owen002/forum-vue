<template>
  <section class="user-section">
    <div class="user-img-div">
      <img src="./../assets/user.png" alt="">
    </div>
    <div class="user-name" v-show="!!userInfo.userid" v-text="userInfo.username"></div>
    <button v-if="!userInfo.userid" class="btn btn-primary" @click="goLogin">
      登录
    </button>
    <button v-if="!!userInfo.userid" class="bg-red btn btn-primary" @click="logOut">
      退出
    </button>
  </section>
</template>
<script>
  import {mapGetters} from 'vuex';
  import types from './../vuex/types';

  export default{
    computed: {
      ...mapGetters({'userInfo': types.GET_USERINFO})
    },
    methods: {
      goLogin(){
          //
        this.$router.push({name:'welcome',params:{user:'222'}});
      },
      logOut(){
        this.$router.replace({name:'welcome'});
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/less/main.less";
  .user-section {
    .user-img-div {
      img {
        width: 2rem;
        border-radius: 1rem;
        margin-top: 0.5rem;
      }
    }
    .user-name {
      font-size: 0.45rem;
      margin-top: 0.2rem;
      color: #032a9c;
    }
  }
</style>

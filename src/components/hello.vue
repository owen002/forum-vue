<template>
  <section class="hellw-comp">
    <div class="header-sec">
      <img class="header-hello-img" src="./../assets/logo.png">
      <router-link :to="{name:'list'}">
        <div class="welcome-state" v-text="hello"></div>
      </router-link>
    </div>
    <div class="wel-date" v-text="webDate"></div>
  </section>
</template>
<script>
  import util from '../lib/util'

  export default{
    data(){
      return {
        dateTitle: '当前时间:',
        dateTime: ''
      }
    },
    computed: {
      webDate: function () {
        return this.dateTitle + ' ' + this.dateTime
      }
    },
    props: ['hello'],
    mounted(){
      this.timeStart.call(this);
    },
    methods: {
      timeStart(){
        this.dateTime = util.formatDate(new Date(), 'YYYY-MM-DD hh:mm:ss');
        setInterval(() => {
          this.dateTime = util.formatDate(new Date(), 'YYYY-MM-DD hh:mm:ss');
        }, 500);
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/less/main.less";
  .hellw-comp {
    .dis-flex-col-nowrap();
    height: 100%;
    justify-content: space-between;
    .header-sec {
      .dis-flex-col-nowrap();
      .header-hello-img {
        width: 6rem;
        margin-left: 2rem;
      }
    }
  }
  .wel-date {
    flex-basis: 10%;
    font-size: 0.35rem;
    color: #828282;
  }
  a{
    text-decoration: none;
    color: #046bd8;
  }
</style>

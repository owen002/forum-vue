<template>
  <section class="hellw-comp">
    <div class="header-sec">
      <img class="header-hello-img" src="./../assets/logo.png">
      <div class="welcome-state" v-text="hello"></div>
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
<style>
  .hellw-comp{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height:100%;
    justify-content: space-between;
  }
  .wel-date{
    flex-basis: 10%;
    font-size: 0.35rem;
    color: #828282;
  }
  .header-hello-img{
    width: 6rem;
    margin-left: 2rem;
  }
  .header-sec{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
</style>

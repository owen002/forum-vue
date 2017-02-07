<template>
  <nv-hello :hello="hello"></nv-hello>
</template>

<script>
  import nvHello from 'components/hello';
  import types from './vuex/types';
  import {mapActions} from 'vuex';
  export default {
    name: 'app',
    components: {
      nvHello
    },
    mounted(){
      setTimeout(() => {
        this.hello = '不欢迎你进入！！！！是不可能的'
      }, 2000);
      this.$nextTick(function () {
        const userid = this.$route.query.userid;
        var userinfo = {
          username: userid,
          age: '11',
          userid: userid
        }
        if (userid) {
          this.setUserinfo(userinfo);
        } else {
          this.setUserinfo({});
        }
      });
    },
    data(){
      return {
        hello: '欢迎进入论坛'
      }
    },
    methods: {
      ...mapActions({
        setUserinfo: types.SET_USERINFO
      })
    }
  }
</script>

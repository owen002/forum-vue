<template>
  <nv-hello :hello="hello"></nv-hello>
</template>

<script>
  import nvHello from 'components/hello'
  export default {
    name: 'app',
    components: {
      nvHello
    },
    mounted(){
      setTimeout(() => {
        this.hello = '不欢迎你进入！！！！是不可能的'
      },5000)
    },
    data(){
      return {
        hello: '欢迎进入论坛'
      }
    }
  }
</script>

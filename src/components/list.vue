<template>
  <section>
    <div class="mask transition-all"></div>
    <leftMenu :toggleMask="toggleMask" :changeOpacityMask="changeOpacityMask"></leftMenu>
    <nv-header>列表页面</nv-header>
  </section>
</template>

<script>
  import leftMenu from './left-menu.vue';
  import nvHeader from './header.vue';

  export default {
    name: 'list',
    components: {
      leftMenu,
      nvHeader
    },
    methods: {
      toggleMask: (state)=> {
        if (document.querySelector('.mask').style.display != state)
          document.querySelector('.mask').style.display = state;
      },
      changeOpacityMask: (val) => {
        document.querySelector('.mask').style.opacity = val;
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
    display: none;
  }
</style>

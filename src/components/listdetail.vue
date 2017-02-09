<template>
    <article v-html="content" style="padding:50px 20px;"></article>
</template>

<script>
    import $ from 'webpack-zepto';

    var listDetail = {
        1:'我是文章11111111111',
        2:'我是文章2',
        3:'我是文章3',
        4:'我是文章4',
        5:'我是文章5',
        6:'我是文章6',
        7:'我是文章7'
    }
    export default {
        data() {
            return{
                content:''
            }
        },
        mounted() {
            var lid = this.$route.params.lid;
            console.log(lid)
            this.content = listDetail[lid];
        },
        methods: {

        }
    };
</script>

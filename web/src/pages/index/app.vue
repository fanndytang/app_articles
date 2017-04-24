<template>
    <div>
        <header></header>
     <!--   <demo></demo>-->
        <aa></aa>
    </div>
</template>

<script>
    import demo from './components/index.vue'
    import aa from './components/article.vue'
    import header from '../public/components/header-serach.vue'
    export default {
        components: {
            header: header,
            demo: demo,
            aa: aa
        }
    }
</script>
<template>
    <div>
        <header></header>
        <demo></demo>
    </div>
</template>

<script>
    import demo from './components/index.vue'
    import header from '../public/components/header-serach.vue'
    export default {
        components: {
            header: header,
            demo: demo
        }
    }
</script>
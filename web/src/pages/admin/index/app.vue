<template>
  <div>
    <heade></heade>
    <left></left>
    <article_add></article_add>
    <foot></foot>
  </div>
</template>

<script>
    import heade from '../components/header.vue';
    import left from '../components/aside.vue';
    import article_add from './components/article_add.vue';
    import foot from '../components/footer.vue';
    export default {
        components: {
            heade: heade,
            left: left,
            article_add: article_add,
            foot: foot
        }
    };
</script>

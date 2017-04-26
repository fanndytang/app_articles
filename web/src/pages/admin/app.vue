<template>
  <div>
    <heade></heade>
    <left></left>
    <index></index>
    <foot></foot>
  </div>
</template>

<script>
    import heade from './components/header.vue'
    import left from './components/aside.vue'
    import index from './components/index.vue'
    import foot from './components/footer.vue'
    export default {
        components: {
            heade: heade,
            left: left,
            index: index,
            foot: foot
        }
    };
</script>

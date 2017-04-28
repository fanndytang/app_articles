<template>
    <div>
        <h1>{{title}}</h1>
        <div>{{content}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '标题',
                content: '详情'
            }
        },
        mounted: function() {
            let self = this;
            self.$http.get('/admin/index/show_article').then(data=>{
              //  self.list = data.data.data;
            });
        }
    }
</script>
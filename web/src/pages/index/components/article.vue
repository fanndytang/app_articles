<template>
    <div>
        文章
        <div v-for="item in list">
            <h1>{{item.title}}</h1>
            <div>{{item.content}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        mounted: function() {
            let self = this;
            self.$http.get('/admin/index/show_article').then(data=>{
                self.list = data.data.data;
            });
        }
    }
</script>
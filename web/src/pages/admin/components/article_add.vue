<template>
    <article class="article article-add">
        <form class="form-horizontal">
            <div class="form-group">
                <label class="col-md-2 text-center">标题</label>
                <div class="col-md-8">
                    <input v-model="title" type="text" class="form-control" placeholder="请输入标题" />
                </div>
            </div>
            <div class="form-group">
                <label class="col-md-2 text-center">内容</label>
                <div class="col-md-8">
                    <textarea v-model="content" rows="3" class="form-control" placeholder="请输入内容" />
                </div>
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-primary" v-on:click="subForm">确认</button>
                <button type="button" class="btn btn-default">取消</button>
            </div>
        </form>
    </article>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            subForm: function() {
                console.log(this.title)
                let data = {
                    title: this.title,
                    content: this.content
                };
                this.$http.post('/admin/index/add_article', data).then(data=>{

                });
            }
        }
    }
</script>
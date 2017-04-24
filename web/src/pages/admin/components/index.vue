<template>
    <div>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label class="mui-col-sm-2">标题</label>
                <input v-model="title" type="text" class="mui-col-sm-10" placeholder="请输入标题" />
            </div>
            <div class="mui-input-row">
                <label class="mui-col-sm-2">内容</label>
                <textarea v-model="content" rows="3" class="mui-col-sm-10" placeholder="请输入内容" />
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn mui-btn-primary" v-on:click="subForm">确认</button>
                <button type="button" class="mui-btn mui-btn-danger">取消</button>
            </div>
        </form>
    </div>
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
<template>
    <aside class="aside">
        <div class="logo">
           logo
        </div>

        <ul class="menu list-unstyled">
            <li class="item" role="button" v-for="item in menu" v-on:mouseenter="showList(item)" v-on:mouseleave="hideList(item)">
                {{item.title}}
                <ul class="second list-unstyled" v-if="item.showSecond">
                    <li class="tool" role="button" v-for="list in item.list">{{list.title}}</li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        title: '文章管理',
                        showSecond: false,
                        list: [
                            {title: '添加文章'},
                            {title: '查看文章'}
                        ]
                    },
                    {
                        title: '文章管理',
                        showSecond: false,
                        list: [
                            {title: '添加文章'},
                            {title: '查看文章'}
                        ]
                    }
                ]
            }
        },
        methods: {
            showList: function(item) {
                item.showSecond = true;
            },
            hideList: function(item) {
                item.showSecond = false;
            }
        }
    }
</script>
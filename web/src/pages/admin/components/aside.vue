<template>
    <aside class="aside">
        <div class="logo">



            <div class="switch">
                <input type="checkbox" />
            </div>
        </div>

        <ul class="menu list-unstyled" id="asideMenu">
            <li class="item" role="button" v-for="item in menu" v-on:click="openMenu($event)">
                {{item.title}}
                <ul class="second list-unstyled">
                    <li class="tool" role="button" v-for="list in item.list" v-on:click="toggleMenu($event)">{{list.title}}</li>
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
                            {title: '查看文章'},
                            {title: '查看文章'},
                            {title: '查看文章'},
                            {title: '查看文章'},
                            {title: '查看文章'},
                            {title: '查看文章'},
                            {title: '查看文章'},
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
        mounted: function() {
            $('#asideMenu .item .second').slideUp();
        },
        methods: {
           openMenu: function(e) {   //  展开关闭二级菜单
               let $this = $(e.target);
               if(!$this.parent('#asideMenu').length) return false;
               if($this.find('.second').is(':visible')) {
                   $this.removeClass('active').find('.second').slideUp('fast');
               }else {
                   $this.addClass('active').find('.second').slideDown('fast');
                   $this.siblings('.item').removeClass('active').find('.second').slideUp('fast');
               }
           },
           toggleMenu: function(e) { //  点击菜单相关操作
               $(e.target).addClass('active').siblings('.tool').removeClass('active')
                   .closest('.item').siblings('.item').find('.tool.active').removeClass('active');
           }
        }
    }
</script>
<template>
    <div>
        <!-- page集合的容器，里面放多个平行的.page，其他.page作为内联页面由路由控制展示 -->
        <div class="page-group">
            <!-- 单个page ,第一个.page默认被展示-->
            <div class="page">
                <!-- 标题栏 -->
                <header class="bar bar-nav">
                    <a class="icon icon-me pull-left open-panel"></a>
                    <h1 class="title">标题</h1>
                </header>

                <!-- 工具栏 -->
                <nav class="bar bar-tab">
                    <a class="tab-item external active" href="#">
                        <span class="icon icon-home"></span>
                        <span class="tab-label">首页</span>
                    </a>
                    <a class="tab-item external" href="#">
                        <span class="icon icon-star"></span>
                        <span class="tab-label">收藏</span>
                    </a>
                    <a class="tab-item external" href="#">
                        <span class="icon icon-settings"></span>
                        <span class="tab-label">设置</span>
                    </a>
                </nav>

                <!-- 这里是页面内容区 -->
                <div class="content">
                    <div class="content-block">
                        <div class="card"  v-for="item in list">
                            <a v-bind:href="'/home/article/detail.html?id=' + item.id">
                                <div class="card-header">{{item.title}}</div>
                                <div class="card-content">
                                    <div class="card-content-inner">{{item.content}}</div>
                                </div>
                                <div class="card-footer"><img class="" v-bind:src="item.src" /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- popup, panel 等放在这里 -->
        <div class="panel-overlay"></div>
        <!-- Left Panel with Reveal effect -->
        <div class="panel panel-left panel-reveal">
            <div class="content-block">
                <p>这是一个侧栏</p>
                <p></p>
                <!-- Click on link with "close-panel" class will close panel -->
                <p><a href="#" class="close-panel">关闭</a></p>
            </div>
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
           $.init()
        }
    }
</script>
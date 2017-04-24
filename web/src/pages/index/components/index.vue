<template>
    <div class="mui-content" >
        <div></div>

        <div class="mui-slider">
            <div class="mui-slider-group">
                <div class="mui-slider-item" v-for="item in slides"><a :href="item.link"><img :src="item.path" alt=""></a></div>
            </div>
            <div class="mui-slider-indicator">
                <div v-for="item in slides" class="mui-indicator" :class="item.active"></div>
            </div>
        </div>

      <div class="mui-row mui-text-center category category_1">
            <a class="mui-col-xs-3 item" v-for="item in category_1" :href="item.link">
                <div class="icon"><span class="mui-icon" :class="item.icon"></span></div>
                <h5 class="name">{{item.name}}</h5>
            </a>
        </div>

             <div class="mui-row mui-text-center category category_2">
           <a class="mui-col-xs-3" v-for="item in category_2" :href="item.link"><img :src="item.path" alt=""></a>
       </div>

      <div class="mui-row banner"><img class="mui-col-xs-12" :src="banner_list_1.path" alt=""></div>

             <div class="mui-row mui-text-center category category_3">
               <div class="mui-col-xs-12 title"><span class="mui-icon mui-icon-compose"></span> {{category_3.title}}</div>
             <!--  <a class="mui-col-xs-5" :href="category_3.main.link"><img :src="category_3.main.path" alt=""></a>-->
               <div class="mui-col-xs-7 mui-row">
                   <a class="mui-col-xs-6" v-for="item in category_3.list" :href="item.link"><img :src="item.path" alt=""></a>
               </div>
           </div>

               <div class="mui-row mui-text-center category category_4">
                      <div class="mui-col-xs-12 title">
                          <span class="mui-icon mui-icon-compose"></span> {{category_4.title}}
                          <a :href="category_4.more" class="more">更多 ></a>
                      </div>
                      <a v-for="item in category_4.list" :href="item.link" class="mui-col-xs-6"><img :src="item.path" alt=""></a>
                  </div>

                <div class="mui-row banner"><img class="mui-col-xs-12" :src="banner_list_2.path" alt=""></div>

                   <div class="mui-row mui-text-center category category_5">
                       <div class="mui-col-xs-12 title">
                           <span class="mui-icon mui-icon-compose"></span> {{category_5.title}}
                           <a :href="category_5.more" class="more">更多 ></a>
                       </div>
                       <a v-for="item in category_5.list" :href="item.link" class="mui-col-xs-6"><img :src="item.path" alt=""></a>
                   </div>

                   <div class="mui-row banner"><img class="mui-col-xs-12" :src="banner_list_3.path" alt=""></div>

                   <div class="mui-row mui-text-center category category_6">
                       <div class="mui-col-xs-12 title">
                           <span class="mui-icon mui-icon-compose"></span> {{category_6.title}}
                       </div>
                       <a v-for="item in category_6.list" :href="item.link" class="mui-col-xs-6"><img :src="item.path" alt=""></a>
                   </div>
    </div>
</template>

<script>
    export default {
        data() {
            let datas = {};
            datas.slides = [];
            datas.category_1 = [];
            datas.category_2 = [];
            datas.category_3 = {};
            datas.category_4 = {};
            datas.category_5 = {};
            datas.category_6 = {};
            datas.banner_list_1 = {};
            datas.banner_list_2 = {};
            datas.banner_list_3 = {};
            return datas;
        },
        mounted() {
            let self = this;
            this.$http.post('/home/index/api').then(data=>{
                let cache = data.data.data;
                self.slides = cache.slides;
                self.slides[0].active = 'mui-active';
                self.category_1 = cache.c1;
                self.category_2 = cache.c2;
                self.category_3 = cache.c3;
                self.category_4 = cache.c4;
                self.category_5 = cache.c5;
                self.category_6 = cache.c6;
                self.banner_list_1 = {
                    path: cache.banner[0].path,
                    link: cache.banner[0].link
                };
                self.banner_list_2 = {
                    path: cache.banner[1].path,
                    link: cache.banner[1].link
                };
                self.banner_list_3 = {
                    path: cache.banner[2].path,
                    link: cache.banner[2].link
                };
            });
        }
    }
</script>
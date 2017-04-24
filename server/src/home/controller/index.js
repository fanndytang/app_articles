'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  async apiAction() {
      let model = this.model('Images');
     /* let lists = await model.where({
          group: ['IN', ['index_banner','index_category_1','index_category_2','index_category_3','index_category_3_main','index_category_3_title','index_category_4','index_category_4_title','index_category_5','index_category_5_title','index_category_6','index_category_6_title','index_banner_list']]
      }).select();*/
     // let lists = await model.select();

      let slides = await model.where({group: "index_banner"}).select();
      let c1 = await model.where({group: "index_category_1"}).select();
      let c2 = await model.where({group: "index_category_2"}).select();
      let main = await model.where({group: "index_category_3_main"}).select();
      let c3 = {
          title: await model.where({group: "index_category_3_title"}).select(),
          main: {
              link: main[0].link,
              path: main[0].path
          },
          list: await model.where({group: "index_category_3"}).select()
      };
      c3.title = c3.title[0].text;
      let c4 = {
          title: await model.where({group: "index_category_4_title"}).select(),
          list: await model.where({group: "index_category_4"}).select()
      };
      c4.title = c4.title[0].text;
      let c5 = {
          title: await model.where({group: "index_category_5_title"}).select(),
          list: await model.where({group: "index_category_5"}).select()
      };
      c5.title = c5.title[0].text;
      let c6 = {
          title: await model.where({group: "index_category_6_title"}).select(),
          list: await model.where({group: "index_category_6"}).select()
      };
      c6.title = c6.title[0].text;
      let banner = await model.where({group: "index_banner_list"}).select();
      let result = {
          slides: slides,
          c1: c1,
          c2: c2,
          c3: c3,
          c4: c4,
          c5: c5,
          c6: c6,
          banner: banner
      };
     this.success(result);
  }
}


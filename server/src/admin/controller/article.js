'use strict';
import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */

  adindexAction(){
    //auto render template file index_index.html
    return this.display();
  }

    //  添加文章
    async addArticleAction() {
        let model = this.model('article');
        let insertId = await model.add({
            title: this.http._post.title,
            content: this.http._post.content
        });
        this.success(1);
    }



}



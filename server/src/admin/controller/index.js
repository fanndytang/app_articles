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

    async addArticleAction() {
      let model = this.model('article');
      let insertId = await model.add({
          title: this.http._post.title,
          content: this.http._post.content
      });
      this.success(1);
    }

    async showArticleAction() {
        let model = this.model('article');
        let insertId = await model.select();
        this.success(insertId);
    }

}



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
    detailAction() {
        return this.display();
    }
    //  显示文章
    async showArticleAction() {
        let model = this.model('article');
        let insertId = await model.select();
        this.success(insertId);
    }


}


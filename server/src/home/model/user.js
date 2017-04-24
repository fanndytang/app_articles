'use strict';
/**
 * model
 */
export default class extends think.model.mongo {
    async userAction(){
        let test = await this.model('mytest').select();
        console.log(test)
        return test;
    }
}
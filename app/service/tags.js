'use strict';
const Service = require('egg').Service;
class TagsService extends Service {
    async list() {
        const tags = await this.app.mysql.select('tags', {
            limit: 10, // 返回数据量
            offset: 0, // 数据偏移量
          });
          // console.log(articles)
          return tags;
    }
}
module.exports = TagsService
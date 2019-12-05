'use strict';
const Service = require('egg').Service;
class ArticleService extends Service {
  async list() {

    const articles = await this.app.mysql.select('articles', {
      limit: 10, // 返回数据量
      offset: 0, // 数据偏移量
    });
    // console.log(articles)
    return articles;
  }
}
module.exports = ArticleService;

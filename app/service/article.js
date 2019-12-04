'use strict';
const Service = require('egg').Service;
class ArticleService extends Service {
  async list() {

    const articles = await this.app.mysql.get('articles');
    return { articles };
  }
}
module.exports = ArticleService;

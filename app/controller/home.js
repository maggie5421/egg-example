'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    // const dataList = {
    //   list: [
    //     { id: 1, title: 'this is news 1', url: '/news/1' },
    //     { id: 2, title: 'this is news 2', url: '/news/2' }
    //   ]
    // };
    // await this.ctx.render('news/list.tpl', dataList);
    const ctx = this.ctx;
    const articles = await ctx.service.article.list();
    // console.log(articles.articles)
    ctx.body = articles.articles;
  }
}

module.exports = HomeController;

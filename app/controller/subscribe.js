'use strict';

const Controller = require('egg').Controller;

class SubscribeController extends Controller {
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
    const tags = await ctx.service.tags.list();
    // console.log(tags)
    await this.ctx.render('subscribe/list.tpl', {tags});
  }
}

module.exports = SubscribeController;

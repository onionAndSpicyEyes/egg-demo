/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-08-28 21:16:48
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */
'use strict';
// eslint-disable-next-line array-bracket-spacing
const Controller = require('egg').Controller;
class Res {
  constructor(msg, code) {
    this.msg = msg;
    this.code = code;

  }
}
class ResData extends Res {
  constructor(msg, code, data) {
    super();
    this.msg = msg;
    this.code = code;
    this.data = data;
  }
}
class HomeController extends Controller {
  async put() {
    const { ctx } = this;
    const user = ctx.request.body;
    if (!user.name || !user.password) {
      ctx.body = new Res(403, '参数不正确');
      return;
    }
    const res = await ctx.service.user.put(user);
    ctx.body = new Res(...res);
  }
  async get() {
    const { ctx } = this;
    const userInfo = await ctx.service.user.get(ctx.query.name);
    ctx.body = new ResData(...userInfo);
  }
  async delete() {
    const { ctx } = this;
    const user = ctx.request.body;
    if (!user.name) {
      ctx.body = new Res(403, '参数不正确');
      return;
    }
    const res = await ctx.service.user.delete(user);
    ctx.body = new Res(...res);
  }
  async post() {
    const { ctx } = this;
    const user = ctx.request.body;
    if (!user.name || !user.password) {
      ctx.body = new Res(403, '参数不正确');
      return;
    }
    const res = await ctx.service.user.post(ctx.request.body);
    ctx.body = new Res(...res);
  }
}

module.exports = HomeController;

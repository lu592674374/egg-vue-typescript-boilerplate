import { Controller } from 'egg';
import * as Model from '../../mocks/article/list';

export default class AppController extends Controller {
  public async index() {
    await this.ctx.render('app/app.js', {
      url: this.ctx.url.replace(/\/app/, ''),
    });
  }

  public async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  public async detail() {
    const id = this.ctx.query.id;
    this.ctx.body = Model.getDetail(id);
  }
}

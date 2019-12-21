'use strict';

const Controller = require('egg').Controller;

class LogController extends Controller {
    async createLog() {
        const { ctx, service } = this;
        console.log(ctx.request.body);
        const log = ctx.request.body;
        const result = await service.log.createLog(log);
        ctx.response.set('Content-Type', 'application/json; charset=utf-8');
        if (result) {
            ctx.body = JSON.stringify({ status: 0, msg: null });
        } else {
            ctx.body = JSON.stringify({ status: 1, msg: 'create error' });
        }
    }
}

module.exports = LogController;

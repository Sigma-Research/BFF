'use strict';

const Service = require('egg').Service;

class LogService extends Service {
    async createLog(log) {
        const result = await this.app.mysql.insert('logs', log);
        console.log(result);
        return result.affectedRows === 1;
    }
}

module.exports = LogService;

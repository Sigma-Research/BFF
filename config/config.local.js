'use strict';

exports.mysql = {
    client: {
        host: '127.0.0.1',
        port: '3306',
        user: 'app_logger',
        password: 'app_logger123',
        database: 'app_log',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
};

exports.security = {
    csrf: {
        enable: false,
    },
};

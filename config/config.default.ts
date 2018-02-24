import { Application, EggAppConfig } from 'egg';
import * as fs from 'fs';
import * as path from 'path';

export default (app: EggAppConfig) => {
  const exports: any = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico')),
  };

  exports.view = {
    cache: false,
  };

  exports.vuessr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html'),
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(app.baseDir, 'logs'),
  };

  exports.static = {
    dir: path.join(app.baseDir, 'public'),
    prefix: '/public/',
  };

  exports.keys = '123456';

  exports.middleware = [
    'access',
  ];

  return exports;
};

/*
 * @file dataEntry: 标题
 * @Author       : zhangwc
 * @type         : 文件类型
 * @Date         : 2022-08-28 21:16:48
 * @notes        : 备注说明注意事项等
 * @lists        : 内容概览
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1661692605347_7489';

  // add your middleware config here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.static = {
    prefix: '/',
    dir: process.cwd() + '/public',
  };
  config.rundir = process.cwd() + '/run';
  return {
    ...config,
    ...userConfig,
  };
};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/user', controller.user.get);
  router.delete('/user', controller.user.delete);
  router.put('/user', controller.user.put);
  router.post('/user', controller.user.post);
};

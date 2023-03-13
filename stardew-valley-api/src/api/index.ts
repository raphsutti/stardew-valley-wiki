import Router from '@koa/router';

import { healthCheckHandler } from './healthCheck';
import { villagerRouter } from './villagers';

export const router = new Router()
  .get('/health', healthCheckHandler)
  .use('/villagers', villagerRouter.routes());

import Router from '@koa/router';

import { getVillagersHandler } from './getVillagers';

export const villagerRouter = new Router().get('/', getVillagersHandler);

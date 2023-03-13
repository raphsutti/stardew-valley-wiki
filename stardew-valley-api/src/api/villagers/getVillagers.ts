import * as storage from 'src/storage/villagers';
import { Middleware } from 'src/types/koa';

export const getVillagersHandler: Middleware = async (ctx) => {
  const villagers = await storage.readVillagers();

  ctx.status = 201;
  ctx.body = villagers;
};

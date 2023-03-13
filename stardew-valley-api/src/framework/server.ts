import Koa from 'koa';
import compose from 'koa-compose';
import {
  ErrorMiddleware,
  // SecureHeaders,
  VersionMiddleware,
} from 'seek-koala';

import { config } from 'src/config';

const version = VersionMiddleware.create({
  name: config.name,
  version: config.version,
});

export const createApp = <State, Context>(
  ...middleware: Koa.Middleware<State, Context>[]
) =>
  new Koa()
    // TODO: consider using a middleware that adds secure HTTP headers.
    // https://github.com/seek-oss/koala/tree/master/src/secureHeaders
    // https://github.com/venables/koa-helmet
    // .use(SecureHeaders.middleware)
    .use(ErrorMiddleware.handle)
    .use(version)
    .use(compose(middleware));

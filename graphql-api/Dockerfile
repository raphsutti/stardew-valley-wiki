FROM node:16-alpine

WORKDIR /workdir

COPY package.json yarn.lock /workdir/

RUN yarn install --frozen-lockfile --ignore-optional --non-interactive

COPY . /workdir

RUN yarn build

ENV NODE_OPTIONS=--enable-source-maps

CMD yarn start

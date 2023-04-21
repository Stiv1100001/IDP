###################
# BUILD FOR PRODUCTION
###################

FROM node:18 As build
RUN corepack prepare pnpm@latest --activate 

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./
COPY --chown=node:node package.json ./

RUN corepack pnpm fetch --prod
RUN corepack pnpm install

COPY --chown=node:node . .

RUN corepack pnpm build

ENV NODE_ENV production

RUN corepack pnpm prune --prod

USER node

###################
# PRODUCTION
###################

FROM node:18-alpine As production

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD [ "node", "dist/main.js" ]

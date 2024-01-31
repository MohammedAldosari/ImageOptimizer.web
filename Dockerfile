### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:21-alpine as builder

RUN npm install -g pnpm

WORKDIR /home/ng-app

RUN chown -R node:node /home/ng-app

USER node

COPY --chown=node:node package*.json ./
COPY --chown=node:node pnpm-lock.yaml ./

RUN pnpm install --no-frozen-lockfile

COPY --chown=node:node . .

RUN pnpm run build


### STAGE 2: Setup ###
FROM devforth/spa-to-http:latest

COPY --from=builder /home/ng-app/dist/ .

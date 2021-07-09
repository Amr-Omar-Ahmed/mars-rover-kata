FROM node:12 as base

WORKDIR /app

COPY package.json ./

RUN npm i

COPY . .

FROM base as test
ENV NODE_ENV=test
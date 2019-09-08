FROM node:11 AS build

WORKDIR /usr/app

ADD package*.json ./

ADD . .

RUN npm install

RUN npm run build

FROM nginx:stable

COPY --from=build usr/app/dist/ /usr/share/nginx/html
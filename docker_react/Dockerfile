FROM node:16.17.0-bullseye
WORKDIR /code
# 先にpackage.jsonとpackage-lock.jsonをマウントさせる
COPY ./app/package*.json /code
RUN npm install

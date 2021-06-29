FROM node:16-alpine3.11

RUN npm install -g @vue/cli

COPY . /home/node/app
WORKDIR /home/node/app

USER node

CMD ["/bin/sh", "-c", "npm i ; npm run build"]

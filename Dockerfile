FROM node:17-alpine
EXPOSE 8080

WORKDIR /app
RUN apk add --no-cache g++ make python3 xsel

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
RUN yarn add serve

COPY . ./
RUN NODE_OPTIONS=--openssl-legacy-provider yarn run build

CMD ["serve", "-s", "build", "-l", "8080"]
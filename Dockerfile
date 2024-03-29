FROM node:18-alpine
EXPOSE 8080

WORKDIR /app
RUN apk add --no-cache g++ make python3 xsel

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install
RUN yarn global add serve

COPY . ./
RUN yarn run build

CMD ["serve", "-s", "dist", "-l", "8080"]
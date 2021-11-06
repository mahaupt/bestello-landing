FROM node:17-alpine
EXPOSE 8080

WORKDIR /app
RUN apk add --no-cache g++ make python3 xsel

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install -g serve

COPY . ./
RUN NODE_OPTIONS=--openssl-legacy-provider npm run build

CMD ["serve", "-s", "build", "-l", "8080"]
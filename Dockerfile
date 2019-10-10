FROM node:12-alpine

WORKDIR /usr/app

EXPOSE 8000

COPY package.json package-lock*.json ./

RUN npm i npm@latest -g

RUN npm install && npm cache clean --force

COPY . .

CMD ["npm", "run", "dev"]
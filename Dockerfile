FROM node:carbon

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3004

EXPOSE 5432

CMD [ "npm", "start" ]
FROM node
EXPOSE 6060

RUN mkdir -p ./app
WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/
RUN npm i
COPY . .

CMD ["npm", "run", "serve"]
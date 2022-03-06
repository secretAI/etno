FROM node

RUN mkdir -p ./app
WORKDIR /app
COPY . .

RUN npm i
CMD ["npm", "run", "serve"]

EXPOSE 6060
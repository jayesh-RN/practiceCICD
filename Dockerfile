FROM node:18

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]



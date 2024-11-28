# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

EXPOSE 3000

# Command to start the server
CMD ["node", "index.js"]



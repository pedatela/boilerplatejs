FROM node:lts-alpine3.15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD [ "node", "src/server.js" ]
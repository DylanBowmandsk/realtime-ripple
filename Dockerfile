FROM node:12.18
ENV NODE_ENV=production
WORKDIR /App
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "npm", "start" ]
# Use a Node.js base image
FROM node:18-alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


FROM node:18-alpine
LABEL authors="october1234"
WORKDIR /app

COPY --from=builder /app/build /app/build

EXPOSE 3000

CMD ["npm", "start"]

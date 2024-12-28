# Use a Node.js base image
FROM node:23-alpine as builder
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build


FROM node:23-alpine
LABEL authors="october1234"
WORKDIR /app

COPY --from=builder /app/build /app/build
COPY --from=builder /app/next.config.js ./

EXPOSE 3000

CMD ["npm", "start"]

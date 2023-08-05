# Stage 1
FROM node:14-alpine as build-step

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx

COPY --from=build-step /app/dist/frontend /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf


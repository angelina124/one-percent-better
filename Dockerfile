# base image
FROM node:alpine as builder

# set working directory
WORKDIR .

# add `/node_modules/.bin` to $PATH

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY . .

RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent
RUN npm run build

FROM node:alpine as builder
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]

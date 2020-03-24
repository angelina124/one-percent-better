# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR .

# add `/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY . .

RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent

EXPOSE 3001

# start app
CMD ["npm", "start"]

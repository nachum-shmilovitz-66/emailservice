FROM node:12.16-alpine as attbuilder

RUN mkdir -p /build

COPY ./package.json /build/

WORKDIR /build
RUN npm set registry http://artifacts.cloud.attentigroup.com:8081/repository/npm-attentigroup/
RUN npm install

# Bundle app source
COPY . /build

# Build app for production
RUN npm run-script build

FROM node:12.16-alpine
# user with username node is provided from the official node image
ENV user node
# Run the image as a non-root user
USER $user

# Create app directory
RUN mkdir -p /home/$user/src
WORKDIR /home/$user/src
LABEL Name="Location service"
LABEL Version="1.0.0.0"

COPY --from=attbuilder /build ./

EXPOSE 5000

ENV NODE_ENV production

CMD ["node", "./dist/server.js"]
# Image source
FROM node:lts-alpine AS base

# Docker working directory
WORKDIR /app

# Copying file into APP directory of docker
COPY ./package*.json /app/

# Then install the NPM module
RUN npm build & npm install --frozen-lockfile

# Copy current directory to APP folder
COPY . /app/

EXPOSE 4200 
EXPOSE 1433
EXPOSE 6379

CMD ["npm", "run", "start:dev"]
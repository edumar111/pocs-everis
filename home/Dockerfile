FROM node:8.9.4

MAINTAINER everis
RUN mkdir -p /app/
ADD /public /app/public
COPY server.js /app/server.js
COPY package.json /app/package.json
WORKDIR /app
RUN npm install
CMD ["node", "server.js" ]

# docker build -t edumar111/home-digitallab:v1.1.0 -f Dockerfile .
# docker push edumar111/home-digitallab:v1.1.0

# docker run  -itd  --name home-digitallab -p 3000:3000   edumar111/home-digitallab:v1.1.0
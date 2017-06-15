FROM nginx
MAINTAINER Niels Boecker

COPY dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/

FROM nginx:alpine

# Copy the static files to the nginx directory
COPY ./public /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d/default.conf

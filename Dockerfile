FROM nginx

# Copy the static files to the nginx directory
COPY ./public /usr/share/nginx/html

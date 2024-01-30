FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
RUN ln -s /usr/share/nginx/html/src/assets/css /usr/share/nginx/html/css \
    && ln -s /usr/share/nginx/html/src/assets/images /usr/share/nginx/html/images


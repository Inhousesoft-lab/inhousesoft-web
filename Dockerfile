FROM nginx:latest
VOLUME /home/nginx
COPY ./build /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/default.conf
ADD ./nginx/default.conf /etc/nginx/conf.d/default.conf
# docker run --name mysql3307 \
#   -e MYSQL_ROOT_PASSWORD=root \
#   -e MYSQL_DATABASE=rentmap \
#   -e MYSQL_USER=admin \
#   -e MYSQL_PASSWORD=admin \
#   -p 3307:3307 \
#   -v ~/mysql_data:/var/lib/mysql \
#   -d mysql:latest


FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=rentmap
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin

EXPOSE 3306

COPY init.sql /docker-entrypoint-initdb.d/
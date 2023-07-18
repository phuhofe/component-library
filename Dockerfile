FROM busybox
COPY dist/ /app
WORKDIR /app
CMD httpd -f -p 8080

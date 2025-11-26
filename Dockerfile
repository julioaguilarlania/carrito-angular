FROM nginx:alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx dist/carrito-angular/browser /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT [ "nginx" ]
CMD ["-g", "daemon off;"]

# docker build -t carrito-angular:version .
# docker run --name frontend -p ####:80 -d carrito-angular:version
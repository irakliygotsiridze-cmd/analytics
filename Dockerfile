FROM nginxinc/nginx-unprivileged:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html dashboards.html research.html glossary.html team.html faq.html \
     styles.css \
     i18n.js search.js data.js render.js qr.js \
     /usr/share/nginx/html/

EXPOSE 8080


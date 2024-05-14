COPY nginx.conf /etc/nginx/conf.d/
COPY ./app /myapp
COPY ./requirements.txt /
COPY ./supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN pip install -r /requirements.txt
RUN mkdir -p /var/log/supervisor
RUN mkdir -p /var/log/boxadapter

EXPOSE 80

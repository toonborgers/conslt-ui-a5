FROM node:9.3.0

USER node 

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install -g @angular/cli

USER root

WORKDIR /opt/app

EXPOSE 4200

CMD ["/bin/bash"]

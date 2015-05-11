# Build
#    docker build -t chamerling/lazyguy-monitoring .

FROM node:0.10.36

MAINTAINER Christophe Hamerling <chamerling@linagora.com>

# Cache NPM install of package.json has not been changed
# cf http://www.clock.co.uk/blog/a-guide-on-how-to-cache-npm-install-with-docker
ADD package.json /src/package.json
RUN cd /src && npm install --production --unsafe-perm

ADD . /src

EXPOSE 3000

WORKDIR /src
CMD ["npm", "start"]

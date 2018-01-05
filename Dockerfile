FROM madnificent/ember:2.17.0 as builder

MAINTAINER Erika Pauwels <aad.versteden@redpencil.io>

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN ember build -prod


FROM semtech/ember-proxy-service:1.3.0
COPY --from=builder /app/dist /app

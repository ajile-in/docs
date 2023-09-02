---
title: NATS Messaging
description: NATS Messaging
---

## Create NATS config `nats-server.conf`

```yaml
port: 4222
max_payload: 4194304  # 4 MB in bytes
websocket:
  port: 443
  no_tls: true 

```

## Create `docker-compose`

``` yaml
version: '3'
services:
  nats:
    container_name: nats
    image: nats
    command: ["-c", "/nats-server.conf"]
    ports:
      - '4222:4222'
      - '6222:6222'
      - '8222:8222'
    volumes:
      - ./nats-server.conf:/nats-server.conf:ro

```

## Start NATS Server

```yaml
docker compose up
```
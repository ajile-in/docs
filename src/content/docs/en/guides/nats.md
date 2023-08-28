---
title: Local Setup
description: A reference page in my new CREDEBL docs site.
---

## Create nats config file

```yaml
port: 4222
max_payload: 4194304  # 4 MB in bytes
websocket:
  port: 443
  no_tls: true 
```
## Create docker compose 
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
## Strat NATS
```yaml
Docker compose up
```
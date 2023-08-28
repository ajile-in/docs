---
title: Local Setup using NPM
description: A reference page in my new CREDEBL docs site.
---


## Backend 

Clones the CREDEBL repository:
 ```bash
   git clone https://github.com/credebl/credebl-platform.git 
   cd credebl-platform
 ```
  
Create a .env file and set the required environment variables as per the .env.example.To start the API gateway and microservices. 

Start the services:
 ```bash
   docker compose up -d
```
Access the Dockerize Backend by navigating to 
 ```bash
  http://localhost:5000
```
## Frontend 

Clone the CREDEBL Studio repository:
 ```bash
  git clone https://github.com/credebl/studio.git
  cd studio
```
Create a .env file and set the required environment variables as per the .env.example.To start the API gateway and microservices. 

Build docker image
 ```bash
  docker build -t UI .
 ```
Start frontend
 ```bash
  docker run -d -p 8085:8085 --env-file .env --name UI-App UI
 ```
Access the Dockerize Frontend by navigating to 
```bash
 http://localhost:8085
```



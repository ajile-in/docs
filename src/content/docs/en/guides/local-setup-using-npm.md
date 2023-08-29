---
title: Local Setup
description: A reference page in my new CREDEBL docs site.
---

## Backend 
   
Clones the CREDEBL repository:
  ```bash
   git clone https://github.com/credebl/credebl-platform.git 
   cd credebl-platform
 ```
  
Create a .env file and set the required environment variables as per the .env example.To start the API gateway and microservices 
 ```bash
  npm i
  npm run start
```
To start a specific microservice, for example, user
 ```bash
  npm run start user
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

Install dependencies and start the frontend:
 ```bash
  npm i
  npm run start
```

Access the Dockerize Frontend by navigating to 
```bash
 http://localhost:3000
```


## Using Swagger to Access Credeble-platform

If you're running Docker locally, access the CREDEBL platform Swagger Dashboard through the API gateway on port 5000.
```bash 
http://localhost:5000/api
```

---

**Note:** For specific instructions on setting up the Authentication Tool and Communication Tool, refer to the respective sections above.

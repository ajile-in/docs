---
title: Local Setup
description: A reference page in my new CREDEBL docs site.
---

## Platform API

Clone the platform repository:

```bash
   git clone https://github.com/credebl/platform.git 
   cd platform
```
  
Create a .env file and set the required environment variables as per the .env example.To start the API gateway and micro-services.

```bash
  npm i
  npm run start
```

To start a specific microservice, for example, user

```bash
  npm run start user
```

Access the dockerized Platform API by navigating to:

 ```bash
  http://localhost:5000
```

## Studio UI

Clone the studio repository:

```bash
  git clone https://github.com/credebl/studio.git
  cd studio
```

Create a .env file and set the required environment variables as per the .env.example.To start the API gateway and microservices. 

Install dependencies and start the Studio UI:

 ```bash
  npm i
  npm run start
```

Access the Studio UI by navigating to:

```bash
 http://localhost:3000
```

## Using swagger to access platform API

If you're running docker locally, access the CREDEBL platform swagger dashboard through the API gateway on port 5000.

```bash
http://localhost:5000/api
```

---

**Note:** For specific instructions on setting up the Authentication Tool and Communication Tool, refer to the respective sections above.

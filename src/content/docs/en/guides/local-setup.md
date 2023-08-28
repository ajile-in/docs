---
title: Local Setup
description: A reference page in my new CREDEBL docs site.
---

### Setting Up CREDEBL

Welcome to the manual document that will walk you through the process of configuring CREDEBL on your local machine


## Prerequisites

At the base of the CREDEBL Platform consist of Prerequisite Softwares. 

Before you begin with the project, make sure the following software's are installed on your machine.


**Node.js and npm:** 

Install [Node.js(v18)](https://nodejs.org/) or type the below commands for Ubuntu to complete the installation process.

`sudo apt update`

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`

`source ~/.bashrc`

`nvm install 18`

`nvm use 18`

**Git:** 

Install the latest version of [git](https://git-scm.com/) if it is not already installed.


**Docker:** 

Install the latest version of [Docker](https://docs.docker.com/engine/install) 0r type the below commands for Ubuntu to complete the installation process. if it is not already installed.




**Docker Compose:** 

Install the **latest version** of [Docker-Compose](https://docs.docker.com/compose/install).

**Nats:** 

Download and install [nats](https://docs.nats.io/).

**Authentication and Database:** 

The CREDEBL Platform, being open source , mandates user authentication and utilizes a database for storing agent wallets and platform data.Supabase is used as a database service.

To set up authentication and the database server, you have the option to either utilize [supabase](https://supabase.com/docs/guides/self-hosting/docker) or take advantage of the [Supabase SaaS service](https://supabase.com/).

**SendGrid:** 

Create a [SendGrid account](https://sendgrid.com/), generate an API key, and grant necessary permissions for sending emails.

## Initial Setup

There are two available methods for the setup process: Using NPM or Docker.

In this document, we will cover both the setup.

## Setting up the Backend with NPM
   
   1. Clones the Credebl repository
   
 `git clone https://github.com/credebl/credebl-platform.git`  

 `cd credebl-platform`
  
  2. Create a .env file and set the required environment variables as per the .env example.To start the API gateway and microservices 

   `npm i`

   `npm run start`

  3. To start a specific microservice, for example, user
  `npm run start user`

  4. Access the backend by navigating to `http://localhost:5000`.

## Setting up the Backend with Docker

1. Clones the Credebl repository:
   
 `git clone https://github.com/credebl/credebl-platform.git`  

 `cd credebl-platform`
  
2. Create a .env file and set the required environment variables as per the .env.example.To start the API gateway and microservices. 

3. Start the services:

`docker compose up -d`

## Using Swagger to Access Credeble-platform

If you're running Docker locally, access the CREDEBL platform Swagger Dashboard through the API gateway on port 5000: `http://localhost:5000/api`.

## Setting up the Frontend with NPM

1. Clones the Credebl Studio repository:

`git clone https://github.com/credebl/studio.git`
`cd studio`

2. Create a .env file and set the required environment variables as per the .env.example.To start the API gateway and microservices. 

3. Install dependencies and start the frontend:

`npm i`
`npm run start`

4. Access the Frontend by navigating to `http://localhost:3000`.

## Setting up the Frontend with Docker

1. Clone the Credebl Studio repository:

`git clone https://github.com/credebl/studio.git`
`cd studio`

2. Create a .env file and set the required environment variables as per the .env.example.To start the API gateway and microservices. 

3. build docker image

`docker build -t UI .`

4. Start frontend
`docker run -d -p 8085:8085 --env-file .env --name UI-App UI`

5. Access the Dockerize Frontend by navigating to `http://localhost:8085`





---

**Note:** For specific instructions on setting up the Authentication Tool and Communication Tool, refer to the respective sections above.

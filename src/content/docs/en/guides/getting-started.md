---
title: Getting Started 
description: A reference page in my new CREDEBL docs site.
---

### Setting Up CREDEBL

Welcome to the manual document that will walk you through the process of configuring CREDEBL on your local machine

## Initial Setup

There are two available methods for the setup process: Using [NPM](/en/guides/local-setup-using-npm/) or [Docker](/en/guides/local-setup-using-docker/).

In this document, we will cover both the setup.
## Prerequisites

At the base of the CREDEBL Platform consist of Prerequisite Softwares. 

Before you begin with the project, make sure the following software's are installed on your machine.


**Node.js and npm:**  use node 18 version

**Git:** Install [git](https://git-scm.com/) if it is not already installed.

**Docker:** Install the latest version of [Docker](https://docs.docker.com/engine/install) 

**Docker Compose:**  Install the **latest version** of [Docker-Compose](https://docs.docker.com/compose/install).

**NATS:** Download and install [NATS](/en/guides/nats/).

**Authentication and Database** 

The CREDEBL Platform, being open source , mandates user authentication and utilizes a database for storing agent wallets and platform data.Supabase is used as a database service.

To set up authentication and the database server, you have the option to either utilize [supabase](https://supabase.com/docs/guides/self-hosting/docker) or take advantage of the [Supabase SaaS service](https://supabase.com/).

**SendGrid** 

Create a [SendGrid account](https://sendgrid.com/), generate an API key, and grant necessary permissions for sending emails.

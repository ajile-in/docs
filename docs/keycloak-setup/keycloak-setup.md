---
sidebar_position: 1
---

# Keycloak setup using docker
- <a name="_heading=h.30j0zll"></a>Keycloak as docker image by the following:

```
docker pull jboss/keycloak:12.0.4
```
- <a name="_heading=h.1fob9te"></a>Run the docker image by the following command:

```
  docker run --name myKeyCloak -p 8089:8080 -e KEYCLOAK\_USER=admin -e KEYCLOAK\_PASSWORD=admin -d jboss/keycloak:12.0.4 
```

- You will get: <http://localhost:8089/auth/> test it on browser.

## <a name="_heading=h.3znysh7"></a>After login to Keycloak server:
  - Go to **administration console**
  - Login using username: admin,  password: admin.
  - Go to master and add a new realm named as “credebl-platform”.
  - Go to the client and add a new client as a “adminClient”.
  - Select Access Type “confidential”
  - Set Service Accounts Enabled to ON mode.
  - Set Direct Access Grants Enabled to ON mode.
  - Add “http://localhost:8089/\*” in \* Valid Redirect URIs .
  - Add “<http://localhost:8089/>” in Root URL.
  - Add “http://localhost:8089/” in Admin URL.
  - Add “<http://localhost:8089/>” in Web Origins.

  - Goto **Advanced setting** and 
    - add **2 hrs** in access token lifespan, 
    - 999 days in Client Session Idle and 
    - 10 days in Client Session Max


- Click on the **Save** button.


## <a name="_heading=h.m023c4x7hdho"></a>Service Account Roles Settings:

- Select `realm-management` in the Client Roles dropdown
- Select below roles from the Available Roles and move to Assigned roles
1. Create-client
1. Manage-client
1. Manage-users
1. Query-clients
1. Query-users
1. View-clients
1. view-users

## <a name="_heading=h.2dz0ul9wmuyq"></a>Add users manually.

- Go to **users**.
- Add username: “<platform.admin@vomoto.com>” and email “<platform.admin@vomoto.com>”
- Enable user and email click on save.
- Change the password in credential section for user login.
- Update the Keycloak userId in users table in local database.
- Also update client secret key in .env file and which you will get in credential section adminClient in client section.
- And test the flow by login to platform admin.





## setup

To setup the environment to work on localhost you need to declare a file named `.env` with the following content:

```
MONGODB_USER=<your database username>
MONGODB_PASSWORD=<your database password>
MONGODB_HOST=<your database host>
MONGODB_PORT=<your database port>
MONGODB_DATABASE=<your database name>
```

## Deploy

### Database.

The database is deployed in mongoatlas

### Backend

The backend is deployed in heroku.

- Install the heroku client
- Log in `heroku login`
- Create the app in heroku `heroku create <app-name>`
- Set the environment variables with the `heroku config:set MONGODB_DATABASE=m03` for all the environment variables (check 1password)
- Connect github repository
  - Create a production branch
  - Connect the deploy with the branch manually

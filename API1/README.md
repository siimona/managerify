# Running the app with and without docker
## Docker build & start

```bash
# docker env build
$ docker-compose build

# docker env start
$ docker-compose up

# remove docker container (services & networks)
$ docker-compose down
```

## Start without docker

```bash
# docker env build
$ npm run start:dev
```
## Migration

```bash
# generate migration
$ (docker-compose exec nestjs)npm run migration:generate:{database_type} --n FirstMigration 

# run migration
$ (docker-compose exec nestjs)npm run migration:run:{database_type}
```

## Fixtures

```bash
# populate db
$ (docker-compose exec nestjs) npm run fixtures:{database_type}
```

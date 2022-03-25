## Development
Environment
- Node Version 16.13.2
- YArn Version 1.22.17

```bash
# install dependencies
yarn install

# start mongo db container
docker compose --env-file .env.docker.dev -f docker-compose.dev.yml up

# start dev server
yarn dev

```

## Production
```bash
docker compose --env-file .env.docker.prod up
```
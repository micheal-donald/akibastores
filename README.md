# Medusa2 Marketplace demo

This is a demo project which demoes how to create a multivendor marketplace demo using Medusa2

## How to run 

```
docker compose up
```

```
cd medusa-marketplace-demo
yarn
cp .env.template .env
npx medusa db:setup --db marketplace
yarn dev
```


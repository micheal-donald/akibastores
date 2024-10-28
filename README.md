# Medusa2 Marketplace demo

This is a demo project which demoes how to create a multivendor marketplace demo using [Medusa 2.0](https://medusajs.com/)

![1_EMHanavMVUIrwCw4_ROoiw](https://github.com/user-attachments/assets/c2cee973-7704-4843-8da4-8c5e877cdc8e)


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


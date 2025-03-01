#!/bin/bash
set -euxo pipefail
echo "Starting AkibaStores Marketplace..."
docker-compose up -d postgres
echo "Waiting for Postgres to start..."
sleep 5
docker-compose up -d medusa
echo "Waiting for Medusa to start..."
sleep 10
docker-compose up -d storefront
echo "All services started!"
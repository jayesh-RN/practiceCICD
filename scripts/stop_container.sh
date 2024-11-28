#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

CONTAINER_ID=$(docker ps -q --filter "publish=3000")

if [ -n "$CONTAINER_ID" ]; then
  echo "Stopping container with ID: $CONTAINER_ID"
  docker stop "$CONTAINER_ID"
else
  echo "No container found running on port 3000."
fi

#!/bin/bash

# Function to display usage
usage() {
    echo "Usage: $0"
    echo "This script builds and deploys a Docker container based on user input."
    exit 1
}

# Function to show loading animation
loading_animation() {
    local pid=$1
    local delay=0.75
    local spin='/-\|'

    while ps -p $pid > /dev/null; do
        for i in $(seq 0 3); do
            echo -ne "\r${spin:i:1} Deploying..."
            sleep $delay
        done
    done
    echo -ne "\rDone!        \n"
}

# Get user input for Docker configuration
read -p "Enter Docker image name: " IMAGE_NAME
read -p "Enter Docker container name: " CONTAINER_NAME
read -p "Enter Dockerfile path (default is .): " DOCKERFILE_PATH
DOCKERFILE_PATH=${DOCKERFILE_PATH:-.}  # Default to current directory if empty
read -p "Enter image tag (default is v1): " TAG
TAG=${TAG:-v1}  # Default to v1 if empty
read -p "Enter port to expose (default is 3000): " PORT
PORT=${PORT:-3000}  # Default to 3000 if empty

# Build the Docker image in the background with loading animation
{
    docker build -t "$IMAGE_NAME:$TAG" -f "$DOCKERFILE_PATH/Dockerfile" "$DOCKERFILE_PATH"
} &

# Get the process ID of the last command (docker build)
loading_animation $!

# Check if the build was successful and notify user
if [ $? -eq 0 ]; then
    echo "Docker image built successfully: $IMAGE_NAME:$TAG"
else
    echo "Error: Docker build failed."
    exit 1
fi

# Remove any existing container with the same name (optional)
if [ "$(docker ps -aq -f name="$CONTAINER_NAME")" ]; then
    echo "Removing existing container: $CONTAINER_NAME"
    docker rm -f "$CONTAINER_NAME"
fi

# Run the Docker container in the background with loading animation
{
    docker run -d -p "$PORT:3000" --name "$CONTAINER_NAME" "$IMAGE_NAME:$TAG"
} &

# Get the process ID of the last command (docker run)
loading_animation $!

# Check if the run was successful and notify user
if [ $? -eq 0 ]; then
    echo "Docker container started successfully: $CONTAINER_NAME"
else
    echo "Error: Failed to start Docker container."
    exit 1
fi

echo "All operations completed successfully!"
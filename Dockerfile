# Use an official Node.js runtime as a parent image for building
FROM node:18-alpine AS builder

# Install necessary packages
RUN apk add --no-cache libc6-compat

# Set the working directory to /app
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy all other project files to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Multi-stage build process to create a lightweight production image
FROM node:18-alpine

# Install dumb-init and create a non-root user
RUN apk update && apk add --no-cache dumb-init && adduser -D nextuser

# Set work directory as app
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --chown=nextuser:nextuser --from=builder /app/public ./public
COPY --chown=nextuser:nextuser --from=builder /app/.next/standalone ./
COPY --chown=nextuser:nextuser --from=builder /app/.next/static ./.next/static

# Set non-root user
USER nextuser

# Expose the application port
EXPOSE 3000

# Set environment variables for production
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production

# Start the application using dumb-init to handle PID 1 properly
CMD ["dumb-init", "node", "server.js"]
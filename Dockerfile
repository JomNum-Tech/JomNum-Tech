# Use the official Node.js image as the base image for the build stage
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install production dependencies only
RUN npm install 

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller base image for the production stage
FROM node:18-alpine AS production

# Set the working directory inside the container
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies for the final image
RUN npm install 

# Expose port 3000 to allow access to the application
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
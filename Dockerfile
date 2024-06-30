# Stage 1: Build the application
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using a lightweight web server
FROM nginx:alpine

# Remove default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d

# Copy the build output to Nginx's web root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx is listening on
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

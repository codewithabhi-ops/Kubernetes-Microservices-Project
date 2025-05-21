# Use Node.js LTS base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy rest of the code
COPY . .

# Expose port
EXPOSE 3001

# Start the service
CMD ["npm", "start"]


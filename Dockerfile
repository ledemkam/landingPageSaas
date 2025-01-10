FROM node:22-alpine3.20

# Set working directory for all build stages.
WORKDIR /app

# Copy package.json so that package manager commands can be used.
COPY package*.json ./

# install dependencies
RUN npm install

# Copy the rest of the application files.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5173

# Run the application.
CMD npm run dev
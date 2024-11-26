# Example Node Image
FROM node:22.11-alpine


RUN npm install --global pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and lock file for dependency installation
COPY package.json pnpm-lock.yaml ./


# Install all dependencies, including devDependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application using TypeScript and Vite
RUN pnpm run build

# Expose the port the app will run on
EXPOSE 4173

# Set the default command to serve the built app using Vite's preview mode
CMD ["pnpm", "preview"]

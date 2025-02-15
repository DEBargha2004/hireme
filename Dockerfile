# Use the latest Node.js image for the builder stage
FROM node:22-alpine3.21 AS builder

# Set environment variables for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Update Corepack to the latest version and enable pnpm
RUN npm install -g corepack@latest && corepack enable pnpm

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the project (if applicable)
RUN pnpm build

# Use a lightweight Node.js image for the final production stage
FROM node:22-alpine3.21 AS production

# Set environment variables for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Update Corepack and enable pnpm in the production stage
RUN npm install -g corepack@latest && corepack enable pnpm

# Set working directory
WORKDIR /app

# Copy built files and node_modules from builder
COPY --from=builder /app .

# Expose the necessary port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]
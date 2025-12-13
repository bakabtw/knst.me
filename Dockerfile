# Build stage - Install dependencies and build static export
FROM node:24-alpine AS builder

WORKDIR /app

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Install dependencies
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
  elif [ -f package-lock.json ]; then npm ci; \
  else echo "No lockfile found. Please use a lockfile." && exit 1; fi

# Copy the rest of the app and build
COPY . .

# Build static export
RUN npm run build


# Production stage
FROM node:24-alpine AS production

WORKDIR /app

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Copy built files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

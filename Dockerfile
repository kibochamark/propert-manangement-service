FROM node:24.18-alpine3.24 AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml tsconfig.json ./
COPY prisma.config.ts ./
COPY prisma ./prisma
COPY src ./src

RUN npm -g install pnpm@9

# Force pnpm to hoist dependencies into a traditional flat structure
RUN pnpm config set node-linker hoisted

RUN pnpm install

RUN npx prisma generate && npx prisma db push

# Fix: Explicitly target the current root package for the build script
RUN pnpm --filter . run build

# --- Room 2: The Clean Delivery Truck (Runner) ---
FROM node:24.18-alpine3.24 AS runner

WORKDIR /app

# Install pnpm in the runner so we can install production dependencies cleanly
RUN npm -g install pnpm@9

RUN pnpm config set node-linker hoisted
# Copy package files so we can install production-only dependencies
COPY package.json pnpm-lock.yaml ./

# Install only production dependencies (avoids broken symlinks from builder)
RUN pnpm install --prod --frozen-lockfile

# Copy compiled build output and generated files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/generated ./generated

EXPOSE 5000

ENTRYPOINT ["node", "dist/src/main.js"]
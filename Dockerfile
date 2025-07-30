# Stage 1: Build the application
FROM oven/bun:1.2.8 AS builder
WORKDIR /app

COPY package.json bun.lock ./

RUN --mount=type=cache,target=/root/.bun bun install --frozen-lockfile 

COPY . .

RUN bun run build

# Stage 2: Start the application production
FROM oven/bun:1.2.8 AS production

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json /app/next.config.ts /app/.env.production /app/bun.lock ./

RUN --mount=type=cache,target=/root/.bun bun install --frozen-lockfile --production

EXPOSE 3000
CMD ["bun", "run", "start"]

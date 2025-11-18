FROM node:20-bullseye

RUN apt-get update \
    && apt-get install -y --no-install-recommends python3 make g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV NODE_ENV=development \
    EXPO_NO_TELEMETRY=1 \
    EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0 \
    CHOKIDAR_USEPOLLING=1 \
    WATCHPACK_POLLING=true \
    CI=false \
    npm_config_update_notifier=false

COPY package.json package-lock.json* ./
RUN npm ci \
    && npm cache clean --force

COPY . .

EXPOSE 8081 19000 19001 19002

CMD ["npm", "run", "start", "--", "--lan", "--port", "8081"]

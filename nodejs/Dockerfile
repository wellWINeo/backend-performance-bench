FROM node:18-alpine AS BUILDER
WORKDIR /build
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS FINAL
WORKDIR /app
COPY --from=BUILDER /build/dist ./dist
COPY --from=BUILDER /build/node_modules node_modules
COPY --from=BUILDER /build/package*.json .

ENV NODE_OPTIONS="--experimental-specifier-resolution=node"

CMD [ "npm", "run", "serve" ]

FROM node:20-alpine3.19 as development 
WORKDIR /app/backend
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine3.19 as production
ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app/backend
COPY package*.json .
RUN npm ci --only-production
COPY --from=development /app/backend/dist ./dist
CMD ["node", "dist/src/server.js"]
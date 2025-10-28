# Docker Deployment Guide

## Development Mode

### Ports:
- **Backend**: http://localhost:3000
- **Frontend**: http://localhost:5174
- **MySQL**: localhost:3306

### Commands:
```bash
# Start all services
docker-compose up -d

# Start with rebuild
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

---

## Production Mode

### Ports:
- **Backend**: http://localhost:3001
- **Frontend**: http://localhost:5174
- **MySQL**: localhost:3307 (mapped from 3306)

### Commands:
```bash
# Start production services
docker-compose -f docker-compose.prod.yml up -d

# Start with rebuild
docker-compose -f docker-compose.prod.yml up -d --build

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop services
docker-compose -f docker-compose.prod.yml down

# Stop and remove volumes
docker-compose -f docker-compose.prod.yml down -v
```

---

## Database Migrations

### Development:
```bash
# Inside backend container
docker exec -it sf-backend npm run build
docker exec -it sf-backend npm run migration:run
```

### Production:
```bash
# Inside backend container
docker exec -it sf-backend-prod npm run migration:run
```

---

## Environment Variables

### Backend (.env):
```env
NODE_ENV=production
PORT=3001
DB_HOST=mysql
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root123
DB_DATABASE=sergio_ferrari
```

### Frontend:
```env
NODE_ENV=production
PORT=5174
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

## Container Names:

### Development:
- `sf-backend` - Backend NestJS
- `sf-frontend` - Frontend Next.js
- `sf-mysql` - MySQL Database

### Production:
- `sf-backend-prod` - Backend NestJS
- `sf-frontend-prod` - Frontend Next.js
- `sf-mysql-prod` - MySQL Database

---

## Network:
- **Development**: `sf-network`
- **Production**: `sf-network-prod`

---

## Volumes:
- **Development**: `mysql-data`
- **Production**: `mysql-data-prod`

---

## Troubleshooting:

### Port conflicts:
If you get port conflicts, stop development services first:
```bash
docker-compose down
```

### Database connection issues:
Check MySQL health:
```bash
docker-compose -f docker-compose.prod.yml logs mysql
```

### Rebuild everything:
```bash
docker-compose -f docker-compose.prod.yml down -v
docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d
```

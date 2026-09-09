# docker-git-lab

Projeto da aula prática de Docker e Git.

## Fase 1 — Dockerfile Ubuntu

A imagem `ping-tool:1.0` usa Ubuntu 22.04 e instala `iputils-ping`.

### Build

```bash
docker build -t ping-tool:1.0 .
```

### Execução

```bash
docker run -it --rm ping-tool:1.0
```

Dentro do container:

```bash
ping -c 4 8.8.8.8
ping -c 4 google.com
exit
```

## Fase 2 — Nginx

O diretório `web/` contém um site estático servido pelo Nginx Alpine.

### Build

```bash
cd web
docker build -t web-server:1.0 .
```

### Execução com conteúdo dentro da imagem

```bash
docker run -d -p 8080:80 --name meu-site web-server:1.0
```

Acesse `http://localhost:8080`.

### Bind Mount para desenvolvimento

No diretório `web/`:

```bash
docker run -d -p 8080:80 \
  -v "$(pwd)/site:/usr/share/nginx/html" \
  --name site-dev nginx:1.27-alpine
```

No PowerShell, a mesma ideia pode ser escrita como:

```powershell
docker run -d -p 8080:80 -v "${PWD}/site:/usr/share/nginx/html" --name site-dev nginx:1.27-alpine
```

Altere `site/index.html` ou `site/style.css` e atualize o navegador para observar a alteração sem rebuild.

## Docker Compose — PostgreSQL + pgAdmin

O arquivo `docker-compose.yml` cria dois serviços na mesma rede Docker:

- `postgres`: banco PostgreSQL;
- `pgadmin`: interface web para administrar o PostgreSQL.

### Subir os serviços

```bash
docker compose up -d
```

### Verificar

```bash
docker compose ps
docker network inspect docker-git-lab-rede
```

Abra o pgAdmin em `http://localhost:5050`.

Login:

- E-mail: `admin@admin.com`
- Senha: `admin`

Ao cadastrar o servidor PostgreSQL no pgAdmin, use:

- Host: `postgres`
- Port: `5432`
- Database: `auladb`
- Username: `postgres`
- Password: `postgres`

O ponto importante é que o pgAdmin deve usar `postgres` como host, e não `localhost`, porque os dois containers se comunicam pela rede Docker.

### Parar

```bash
docker compose down
```

Para remover também o volume do banco:

```bash
docker compose down -v
```

# API-Node

API em Node.js para gerenciar videos e recursos relacionados — projeto exemplo que demonstra como construir uma API RESTful usando Express, organização de rotas, conexão com banco de dados e boas práticas básicas.

## Funcionalidades

- Endpoints REST para CRUD de videos (Create, Read, Update, Delete)
- Validação básica de entrada
- Tratamento de erros padronizado
- Conexão com banco de dados (PostgreSQL)
- Scripts para desenvolvimento e produção

## Tecnologias

- Node.js
- Express
- 
## Requisitos

- Node.js v14+ (recomendado: a versão LTS mais recente)
- npm ou yarn
- Banco de dados PostgreSQL.

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/mariaclaraferr2007/API-Node.git
   cd API-Node
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```
3. Teste

   ctrl + clique nas rotas (routes.http)

## Scripts úteis

- `npm start` — inicia a aplicação em modo produção
- `npm run dev` — inicia a aplicação em modo desenvolvimento 

## Como executar (desenvolvimento)

```bash
npm run dev
# ou
yarn dev
```

## Endpoints 

- GET /videos
  - Lista todos os videos

- GET /videos/:id
  - Retorna os dados de um video pelo id

- POST /videos
  - Cria um novo video

- PUT /videos/:id
  - Atualiza os dados de um video

- DELETE /videos/:id
  - Remove um video

Retorne sempre status HTTP apropriados (200/201/204/400/404/500) e mensagens de erro claras.

## Banco de dados

- PostgreSQL (Sequelize/Knex): adicione `DATABASE_URL` ou parâmetros (HOST, USER, PASSWORD, DB) e rode migrações se houver.

## Boas práticas e melhorias

- Adicionar validação com celebrate/Joi ou express-validator
- Implementar paginação e filtros nos endpoints de listagem
- Criar testes automatizados para endpoints críticos
- Registrar logs (winston, pino) e configurar um ambiente de produção
- Documentar a API com OpenAPI/Swagger

## Autor

Maria Clara Ferreira Lopes (mariaclaraferr2007)

## Contato

- GitHub: https://github.com/mariaclaraferr2007
- Email: (mariaclaraferreiralopes82@gmail.com)

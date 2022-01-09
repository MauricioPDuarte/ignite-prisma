<h1 align="center">📦 Aplicação para entregadores - Node.js e Prisma</h1>
<p align="center">
  Back-end de uma aplicação para entregadores utilizando o Prisma.io.
</p>
<br>

<br>
<br>

## 📘 Construído com 

* [Node.js](https://nodejs.org/en/) - Um interpretador JavaScript runtime construído sobre o Chrome's V8 JavaScript engine.
* [Prisma.io](https://www.prisma.io/) - Uma biblioteca ORM.
* [Express](https://expressjs.com/) - Estrutura da web para o Node.js.
* [Yarn](https://yarnpkg.com/) - Gerenciamento de dependência rápido, confiável e seguro.

<br>

**📦 Dependências**

- Prisma-client
- Express
- Bcrypt
- Jsonwebtoken
- Express-async-errors

**📦 Dependências desenvolvedor**

- Typescript
- Ts-node-dev
- Prisma

## ⚙ Configuração

> To get started...

### Etapa 1

- **Opção 1**
    ```shell
        $ git clone https://github.com/MauricioPDuarte/ignite-prisma.git
        $ yarn install
     ```

### Etapa 2

- Altere a conexao com o banco de dados no arquivo .env.
```shell
DATABASE_URL="postgresql://postgres:root@localhost:5432/prisma_deliveries?schema=public"
```

### Etapa 3
```shell
$ yarn dev
```


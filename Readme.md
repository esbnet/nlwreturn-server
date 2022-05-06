# App FeedGet 

Um pequeno widget para acesso aos feeds em um aplicativo. Com ele é possível enviar uma mensagem via email com a captura da tela e também armazenar estas informações em um banco de dados.

## Tecnologias

- React 
- Typescript
- Express
- Prisma
- Nodemailer
- Cors
- Jest

## Instalação
```
git clone https://github.com/esbnet/nlwreturn-server.git
npm install
```

## Configuração Persistência

Com o ORM Prisma, é possível configurar a persistência de dados para diversos tipos de banco de dados, dentre eles: `postgres, mysql, mongo, mongodb, sqlite, etc.`

Para configurar o ORM, é necessário que você crie um arquivo de configuração no diretório root com o nome `.env` e adicione as seguintes variáveis: `DATABASE_URL="file:./dev.db"` para utilizar o SQLite. Para outros bancos seguir a documentação Prisma: [https://www.prisma.io/docs/concepts/database-connectors](https://www.prisma.io/docs/concepts/database-connectors)

Para outros bancos é necessário configurar o `provider` no arquivo `prisma/schema`:

```

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```



No arquivo ./prisma/schema.prisma, é necessário que você adicione as seguintes variáveis: `DATABASE_URL="file:./dev.db"`
```
git clone https://github.com/esbnet/nlwreturn-server.git
npm install
npm run dev
```

## Execução
```
git clone https://github.com/esbnet/nlwreturn-server.git
npm install
npm run dev





## Execução do teste
```
npm run test
```
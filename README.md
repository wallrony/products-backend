# Meus Produtos - API Rest (Backend)

Autor: Wallisson Rony de M. N.

Este é um repositório que apresenta um CRUD simples para manipulação de produtos. Este projeto tem alguns projetos relacionados, como o repositório com o projeto <a href="https://github.com/wallrony/products-frontend" target="_blank">Frontend WEB</a> e o repositório com o projeto <a href="https://github.com/wallrony/products-mobile" target="_blank">Mobile</a>.

O projeto tem como principal objetivo apresentar o CRUD de produtos, entidade essa que a seguinte estrutura:

```json
{
  "name": "Nome do produto",
  "price": "Preço do produto",
  "image_path": "Link da imagem do produto (facultativo)"
}
```

### Features Implementadas

- Criação do banco de dados via migrations;
- Adição de seeds para o banco de dados;
- Roteamento de endpoints;
- Listagem de produtos;
- Adição de um produto (nome, preço e imagem);
- Alteração de um produto (nome, preço e imagem);
- Exclusão de um produto por id;
- Organização de camadas da aplicação:
- 1. Handler;
- 2. Service;
- 3. Facade;
- 4. Repository;

## Como Executar?

Primeiramente, o banco de dados utilizado foi o MySQL, logo, caso pretenda utilizar de forma local, sem nenhum banco de dados já online e ainda não tenha configurado um servidor MySQL de forma local, sugiro baixar e instalar o XAMPP e iniciar o servidor MySQL. Na configuração do arquivo .env, é só utilizar os mesmos valores presentes no arquivo .env.example (passo 4 da lista de passos abaixo).

- Dê um git clone do repositório para obtê-lo por completo;
- Entre na pasta do projeto;
- Execute `yarn` ou `npm install` para instalar todas as dependências do projeto;
- Crie o arquivo .env seguindo o modelo apresentado no arquivo .env.example, preenchendo as variáveis com seus devidos valores;
- Execute `yarn knex:migrate` ou `npm run knex:migrate` para executar as migrations e criar o banco de dados;
- Execute `yarn knex:seed` ou `npm run knex:seed` para inserir produtos padrão no banco de dados;
- Em caso de erro com a comunicação com o banco de dados, verifique os valores das variáveis presentes no .env;
- Execute `yarn dev` ou `npm run dev` para iniciar a aplicação em modo de desenvolvimento (com respawn, sempre atualizando a cada alteração em qualquer arquivo do projeto) ou `yarn start` ou `npm run start` para executar a aplicação de forma crua (sem respawn).

E é isso, você está executando a aplicação backend do projeto de produtos!

Qualquer dúvida, crie uma issue que te responderei assim que possível!

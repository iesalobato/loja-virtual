# Loja virtual
Aplicação WEB para uma loja virtual com a utilização dos frameworks Angular e AdonisJS.

## Features
1. Cadastrar, editar e excluir produtos
2. Exibir os produtos para compra

## Estrutura
1. loja-frontend: código-fonte do front-end da aplicação desenvolvido em Angular
2. loja-backend: código-fonte do back-end da aplicação desenvolvido em AdonisJS

## Pré-requisitos
Antes de começar, é necessário ter instalado em sua máquina a ferramenta Node.js (https://nodejs.org/en/download/). Assim, será possível instalar os frameworks utilizados para o desenvolvimento.
1. Angular: npm install -g @angular/cli
2. AdonisJS: npm install -g @adonisjs/cli

## Rodar o projeto
### Download do projeto
1. git clone https://github.com/iesalobato/loja-virtual.git 
2. git checkout master (para utilizar o branch master)

### Front-end
1. cd loja-frontend
2. npm install --save-dev @angular-devkit/build-angular
3. npm start (comando utilizado para iniciar o frontend do projeto)

### Back-end
1. cd loja-backend
2. npm i @adonisjs/ignitor
3. Fazer uma cópia do arquivo .env.example e renomea-lo para .env
4. Configurar a conexão com o banco de dados no arquivo .env
5. adonis migration:run
6. adonis serve --dev (comando utilizado para iniciar o servidor do projeto)

### Nota
A imagem dos produtos não está sendo exibida na tela por conta de erro na aplicação.

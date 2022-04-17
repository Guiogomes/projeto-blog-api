#### Projeto Blogs-api

Projeto realizado para o curso de desenvolvimento web da escola Trybe.
Projeto focado na construção de uma API de blogs.

#### Tecnologias utilizadas

- O projeto faz uso de Node.js e express para construção da API e sequelize, ORM de implementação de MySql.
- Como premissa o projeto tenta implementar a arquitetura MSC, pecando na utilização do service, ponto a ser melhorado.
- Uso de jwt para autenticação de login.

#### Iniciando o projeto

- Para ser possível navegar pelo projeto é necessário a instalação de suas 
dependências, para isso utilize o comando:

    npm install
    
- Para realizar requisições localmente e preencher previamente o banco de dados use os sequintes comandos, respectivamente:

    npm run debug (inicializa servidor local)
    npm run prestart (cria e preenche o banco de dados)

#### Pastas e divisão

- Config: guarda a forma de conexão entre banco de dados e backend;
- Controllers: responsável pelos endpoints da aplicação, realizando CRUD em uma api de Blogs;
- Mddlewares: responsável pelas validações das informações coletadas pelos endpoints;
- Models: implementa as querys de consulta e armazenamento de informação do banco de dados;
- Routes: define as rotas para consulta dos endpoints;
- Seeders: salva informações no banco de dados para testes da aplicação. O seeder é elemento compositivo do ORM sequelize.
OBS: A pasta de testes e os arquivos trybe.yml e yarn.lock serão apagados, pois são de propriedade intelectual da Trybe.
OBS 2: É melhoria prevista para aplicação a construção de testes de integração e testes unitários das camadas.


 #### Partes desenvolvidas e partes fornecidas

 Seeders, package.json  e public fornecidos pela Trybe.
 Implementação de código feita completamente por mim.

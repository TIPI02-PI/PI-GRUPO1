# 📚 Sobre o PI l
Tema Gerador: Tecnologias para Transformar Realidade: desenvolvendo soluções digitais para a comunidade.

Nome Projeto: A decidir.

Nome Integrantes:
Arlei B. dos Santos
Andre C. Torres
Gabriel do N. M. Guembla
Grazielly G. Lacerda
Sthefany da C. Moreira


Tema de Interesse
O tema primordial escolhido pela nossa equipe foi uma plataforma online para junção de livros obrigatórios – de preferência em domínio público – para vestibulares com a implementação de uma inteligência artificial para auxiliar nas dúvidas e confusões que surgem ao decorrer dos estudos, já que pensamos ser importante facilitar a vida desses estudantes. Principalmente, aqueles com menores condições monetárias para investir nas obras solicitadas pelas bancas, e com pouco acesso a orientações de qualidade. 
Desta forma, trazendo flexibilidade e praticidade para os candidatos, deixando tudo organizado em um só lugar.

#Sobre o código criado

## 📚 API - Sistema de Livros e Cadastros

## 📖 Sobre o Projeto
Esta API RESTful foi desenvolvida em Node.js utilizando Express e banco de dados MySQL. O sistema gerencia o catálogo de livros de estudo e o cadastro de usuários, implementando autenticação segura por meio de JSON Web Tokens (JWT) e criptografia/validação de permissões de perfil.

## 🛠️ Tecnologias Utilizadas
- **Runtime:** Node.js (com suporte a ES Modules)
- **Framework:** Express.js
- **Banco de Dados:** MySQL / MariaDB
- **Segurança & Utilitários:** `jsonwebtoken` (JWT), `dotenv` para variáveis de ambiente

## 🗄️ Estrutura e Configuração (.env)
O sistema requer um arquivo `.env` na raiz do projeto configurado com os parâmetros de conexão do banco e a chave de acesso do token:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=siteLivros
DB_PORT=4000

JWT_SECRET= chavedeacesso

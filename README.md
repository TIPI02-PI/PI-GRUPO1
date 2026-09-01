# 📚 Plataforma de Livros para Vestibulares

Tema Gerador: Tecnologias para Transformar Realidade: desenvolvendo soluções digitais para a comunidade.


# 📚 API RESTful - Sistema de Livros e Cadastros

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

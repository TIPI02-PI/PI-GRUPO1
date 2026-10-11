# 📚 Sobre o PI 
Tema Gerador: Tecnologias para Transformar Realidade: desenvolvendo soluções digitais para a comunidade.

Nome Projeto: A decidir.

Nome Integrantes:

-Andre C. Torres

-Gabriel do N. M. Guembla

-Grazielly G. Lacerda

-Sthefany da C. Moreira


Tema de Interesse
O tema primordial escolhido pela nossa equipe foi uma plataforma online para junção de livros obrigatórios – de preferência em domínio público – para vestibulares com a implementação de uma inteligência artificial para auxiliar nas dúvidas e confusões que surgem ao decorrer dos estudos, já que pensamos ser importante facilitar a vida desses estudantes. Principalmente, aqueles com menores condições monetárias para investir nas obras solicitadas pelas bancas, e com pouco acesso a orientações de qualidade. 
Desta forma, trazendo flexibilidade e praticidade para os candidatos, deixando tudo organizado em um só lugar.

-----------------------------------------------------------------

# 💻 Sobre o código criado

### API - Sistema de Livros e Cadastros


### INTRODUÇÃO
O presente trabalho tem como objetivo documentar as funcionalidades do
módulo de Cadastro do sistema, especificando as operações disponíveis — Login, Listar
Cadastros, Buscar Cadastro por ID, Cadastrar Cadastro, Atualizar Cadastro e Excluir
Cadastro — bem como os critérios de acesso associados a cada uma delas.
Considerando que o sistema manipula dados sensíveis, todas as funcionalidades exigem
autenticação prévia, sendo o controle de acesso diferenciado conforme o perfil do
usuário. Operações de consulta que envolvem dados sigilosos (Listar Cadastros e Buscar
Cadastro por ID), bem como a exclusão de registros, são restritas exclusivamente a
usuários com perfil de Administrador, garantindo maior segurança e evitando ações
indevidas por parte de usuários comuns. Já as operações de criação e atualização de
cadastro podem ser realizadas por qualquer usuário devidamente autenticado, desde
que possua perfil e senha previamente cadastrados.
Dessa forma, este documento busca apresentar de maneira clara a relação entre cada
funcionalidade do sistema, a necessidade (ou não) de autenticação e o nível de
permissão exigido para sua execução, servindo como referência para o entendimento
das regras de negócio e da política de controle de acesso adotada.

### PLANEJAMENTO

Diz-se a respeito da execução das funcionalidades hoje presentes no projeto ( acesso ao
conteúdo, login ).
- Login
- Listar Cadastros
- Buscar Cadastro por Id
- Cadastrar Cadastro
- Atualizar Cadastro
- Excluir Cadastro

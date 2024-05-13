# Projeto VetClinic

O Projeto VetClinic é uma aplicação para gerenciar tutores e pets em uma clínica veterinária. Ele permite aos usuários criar, visualizar, atualizar e remover informações sobre tutores e seus respectivos pets.

## 🚀 Começando

Para começar a usar o Projeto VetClinic, siga estas etapas:

### 📋 Pré-requisitos

Antes de começar, você precisará ter o Node.js e o npm instalados em sua máquina.

### 🔧 Instalação

- Clone este repositório para o seu ambiente local.
- Instale as dependências do projeto com o comando:

```
npm install
```

## ⚙️ Executando o Projeto

Para executar o Projeto VetClinic, execute o seguinte comando:

```
npm start
```

O servidor será iniciado na porta 3001.

## Rotas

O Projeto VetClinic expõe as seguintes rotas:

- GET /tutors: Retorna uma lista de todos os tutores e seus respectivos pets.
- POST /pets/:tutorId: Cria um novo pet associado a um tutor específico.
- POST /tutors: Cria um novo tutor.
- PUT /tutor/:id: Atualiza as informações de um tutor existente.
- PUT /pet/:petId/tutor/:tutorId: Atualiza as informações de um pet e de seu tutor associado.
- DELETE /tutor/:id: Exclui um tutor específico.
- DELETE /pet/:petId/tutor/:tutorId: Exclui um pet específico.

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

- Node.js - Ambiente de execução JavaScript
- Express.js - Framework web para Node.js
- Sequelize - ORM para Node.js
- SQLite - Sistema de gerenciamento de banco de dados

## ✒️ Autores

O Projeto VetClinic foi desenvolvido por:

- **Stéfani dos Santos Dias** - _Desenvolvimento Inicial_ - [GitHub](https://github.com/linkParaPerfil)

Com o auxílio dos instrutores do programa de estágios da Compass e respectivos colegas de squad.

## 📄 Licença

Este projeto está licenciado sob a MIT License.

## 🎁 Expressões de gratidão

Agradeço profundamente:

- Time 7: Pelo apoio, encorajamento e suporte diante as dificuldades.
- Instrutores da Compass: Pelo apoio técnico e orientação.

Cada um de vocês foi fundamental para esta primeira versão da VetClinic. Obrigado por tudo!

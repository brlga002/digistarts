# digistarts

Teste para vaga Desenvolvedor Home Office na Digistarts

## Tabela de Conteudo

<!--ts-->
   * [Tabela de Conteudo](#tabela-de-conteudo)
   * [Descrição](#Descrição)   
   * [Pre Requisitos](#pré-requisitos)
   * [Rodando o Back End](#rodando-o-back-end)
   * [Estrutura de Arquivos](#estrutura-de-arquivos)
   * [Tests](#testes)
   * [Tecnologias](#tecnologias)   
   * [License](#license)      
   * [Autor](#autor)
<!--te-->

## Descrição

Problema da operação entre números binários:
Faça um programa capaz de operar dois números de 0-255 informados em binário.
A resposta deve ser dada também em binário.
Deve-se aceitar os operadores abaixo:
+,-,\*,/,%

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Rodando o Back End

```bash
# Clone este repositório
$ git clone https://github.com/brlga002/digistarts.git

# Acesse a pasta do projeto no terminal/cmd
$ cd digistarts

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Ou execute aplicação em modo de produção
$ npm run start

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

## Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
digistarts
├── .eslintrc.json
├── .gitignore
├── Insomnia_routers.json
├── jest.config.js
├── package.json
├── prettier.config.js
├── README.md
├── src
│   ├── app.js
│   ├── controllers
│   │   └── mathController.js
│   ├── index.js
│   ├── middleware
│   │   └── allowDigits.js
│   ├── routes
│   │   └── mathRouter.js
│   └── utils
│       └── leftPad.js
├── tests
│   ├── integration
│   │   ├── messagesErro.spec.js
│   │   └── operations.spec.js
│   └── unit
│       └── gerateLeftPad.spec.js
└── .vscode
    └── settings.json

```
## Testes

```bash
# Clone este repositório
$ git clone https://github.com/brlga002/digistarts.git

```

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Celebrate](https://github.com/arb/celebrate)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [SuperTest](https://www.npmjs.com/package/supertest)
- [Insomnia Core](https://insomnia.rest/download/)

## License

MIT License

Copyright (c) <2020> <Gabriel Lima>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Autor

---

<a href="https://github.com/brlga002">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/22845294?s=460&u=60e45878447fa5b46c2a5572134f69b8d5c92d91&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gabriel Fernandes</b></sub></a> <a href="https://github.com/brlga002" title="Gabriel">🚀</a>

Feito com ❤️ por Gabriel Fernandes 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-lima-983701141)](https://www.linkedin.com/in/gabriel-lima-983701141)
[![Gmail Badge](https://img.shields.io/badge/-gabriel@devmanaus.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabriel@devmanaus.com)](mailto:gabriel@devmanaus.com)
[WhatsApp](https://api.whatsapp.com/send?phone=5592991755655&text=Ola%2C%20gabriel%20vi%20seu%20numero%20no%20github.)

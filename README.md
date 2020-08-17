# digistarts

Teste para vaga Desenvolvedor Home Office na Digistarts

## Tabela de Conteudo

<!--ts-->

- [Tabela de Conteudo](#tabela-de-conteudo)
- [Descrição](#Descrição)
- [Pre Requisitos](#pré-requisitos)
- [Rodando o Back End](#rodando-o-back-end)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Tests](#testes)
- [Demonstração da aplicação](#demonstração-da-aplicação)
  - [Rotas](#rotas)
  - [Exemplo de resposta](#exemplo-de-resposta)
  - [Mensagens de Erro](#mensagens-de-erro)
- [Tecnologias](#tecnologias)
- [License](#license)
- [Autor](#autor)
<!--te-->

## Descrição

Problema da operação entre números binários:
Faça um programa capaz de operar dois números de 0-255 informados em binário.
A resposta deve ser dada também em binário.
Deve-se aceitar os operadores abaixo:
+,-,\*,/,%

<h1 align="center">
  <img alt="problema" title="#problema" src="./github/problema.png" />
</h1>

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


```

## Testes

Para executar os testes unitários e de integração rode o comando:

```bash
$ npm test
```

## Demonstração da aplicação

Esta API aceita o método POST solicitação para se comunicar e códigos de resposta HTTP para identificar o status e os erros.

Todas as respostas vêm em JSON padrão.

Todas as solicitações devem incluir um content-typede application/json e o corpo deve ser um JSON válido.

Para testar o endpoint iniciar um servidor local <http://localhost:3000> ou ultilizar o servidor online <https://digistarts.herokuapp.com>.

Na raiz do projeto existe o arquivo Insomnia_routers.json com exemplo de todas as rotas [Insomnia Core](https://insomnia.rest/download/).

### Rotas

A url do servidor será chamada no exemplo de Rotas abaixo de base_url

- base_url/soma
  Retorna soma entre dois números binários
- base_url/subtracao
  Retorna subtração entre dois números binários
- base_url/multiplicacao
  Retorna multiplicação entre dois números binários
- base_url/divisao
  Retorna sodivisão ma entre dois números binários
- base_url/resto
  Retorna resto da divisão entre dois números binários

Todas as rotas exigem os campos fistNumber e secondNumber. Exemplo de JOSN válido:

```bash
{
	"fistNumber":"10000000",
	"secondNumber":"100000000"
}
```

### Exemplo de resposta:

Respota da solicitação na rota base_url/soma.

Corpo da solicitação:

```bash
{
"fistNumber":"00000001",
"secondNumber":"00000011"
}
```

Resposta:

```bash
{
	"00000100"
}
```

### Mensagens de Erro:

Quando não informado um JSON válido

```bash
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "\"fistNumber\" is required",
  "validation": {
    "source": "body",
    "keys": [
      "fistNumber"
    ]
  }
}
```

Quando fistNumber não é um binário:

```bash
{
  "error": "the fistNumber must be a binary"
}
```

Quando secondNumber não é um binário:

```bash
{
  "error": "the secondNumber must be a binary"
}
```

Quando fistNumber e um numero que não esta entre 0 e 255:

```bash
{
  "error": "the fistNumber must be 0 to 255"
}
```

Quando secondNumber e um numero que não esta entre 0 e 255:

```bash
{
  "error": "the secondNumber must be 0 to 255"
}
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

Copyright (c) <2020> <Gabriel Fernandes Lima>

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

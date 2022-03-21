const deckReact = [
  {
    id: 1,
    question: "O que é JSX?",
    response: "É um sintaxe que junta o JavaScript com XML.",
  },
  {
    id: 2,
    question: "O React é __",
    response: "uma biblioteca JavaScript para construção de interfaces",
  },
  {
    id: 3,
    question: "Componentes devem iniciar com __",
    response: "letra maiúscula",
  },
  {
    id: 4,
    question: "Podemos colocar __ dentro do JSX",
    response: "expressões",
  },
  {
    id: 5,
    question: "O ReactDOM nos ajuda __",
    response: "interagindo com a DOM para colocar componentes React na mesma",
  },
  {
    id: 6,
    question: "Usamos o npm para __",
    response: "gerenciar os pacotes necessários e suas dependências",
  },
  {
    id: 7,
    question: "Usamos props para __",
    response: "passar diferentes informações para componentes",
  },
  {
    id: 8,
    question: "Usamos estado (state) para __",
    response:
      "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
  },
];

const deckJS = [
  {
    id: 1,
    question: "O que é ECMAScript?",
    response:
      "É uma especificação da qual as engines se baseam para interpretar o JavaScript",
  },
  {
    id: 2,
    question: "O que é var, const e let?",
    response:
      "São palavras reservadas usadas na declaração de variáveis em JavaScript",
  },
  {
    id: 3,
    question: "O que faz o 'use-strict' em JS?",
    response:
      "Ele habilita o modo restrito do interpretador de JS, detectando assim problemas mais facilmente no código.",
  },
];

const deckLinux = [
  {
    id: 1,
    question: "O que faz o comando 'cd'?",
    response:
      "Esse comando é usado para mudar de diretório, a partir do diretório atual.",
  },
  {
    id: 2,
    question: "O que faz o comando 'mkdir'?",
    response: "Esse comando é usado para criar um diretório.",
  },
  {
    id: 3,
    question: "O que faz o comando 'touch'?",
    response: "Esse comando é usado para cria um arquivo.",
  },
];

export { deckReact, deckJS, deckLinux };

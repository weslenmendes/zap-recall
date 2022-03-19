import { useState } from "react";

import { Header } from "../components/Header";
import { Card } from "../components/Cards/Card";
import { Footer } from "../components/Footer";

const deck1 = [
  {
    id: 1,
    question: "O que é JSX?",
    response: "É um sintaxe que junta o JavaScript com XML.",
  },
  {
    id: 2,
    question: "O que é JSX?",
    response: "É um sintaxe que junta o JavaScript com XML.",
  },
  {
    id: 3,
    question: "O que é JSX?",
    response: "É um sintaxe que junta o JavaScript com XML.",
  },
  {
    id: 4,
    question: "O que é JSX?",
    response: "É um sintaxe que junta o JavaScript com XML.",
  },
  {
    id: 5,
    question: "O que é JSX?",
    response: "É um sintaxe que junta o JavaScript com XML.",
  },
];

const Home = ({ changeScreen }) => {
  const [icons, setIcons] = useState([]);

  const addIcon = (icon) => {
    setIcons([...icons, icon]);
  };

  return (
    <>
      <section
        className={icons.length === deck1.length ? "home finished" : "home"}
      >
        <Header />
        <section className="cards">
          {deck1.map(({ id, question, response }) => (
            <Card
              key={id}
              id={id}
              question={question}
              response={response}
              changeIcons={addIcon}
            />
          ))}
        </section>
      </section>
      <Footer
        icons={icons}
        cardsMade={icons.length}
        totalCards={deck1.length}
      />
    </>
  );
};

export { Home };

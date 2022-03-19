import { Card } from "./Card";

import "./style.css";

const Cards = ({ deck, changeIcons, changeScore }) => {
  return (
    <section className="cards">
      {deck.map(({ id, question, response }, index) => (
        <Card
          key={id}
          id={index + 1}
          question={question}
          response={response}
          changeIcons={changeIcons}
          changeScore={changeScore}
        />
      ))}
    </section>
  );
};

export { Cards };

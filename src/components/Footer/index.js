import React from "react";

import { Button } from "./../Button";

import "./style.css";

import PartyEmoji from "../../assets/images/party.png";
import SadEmoji from "../../assets/images/sad.png";

const Footer = ({
  icons,
  cardsMade,
  totalCards,
  changeScreen,
  score,
  changeGoal,
  goal,
}) => {
  const handleClick = () => {
    changeGoal("");
    changeScreen("welcome");
  };

  if (cardsMade === totalCards) {
    const content1 = (
      <React.Fragment>
        <div>
          <img src={PartyEmoji} draggable="false" alt="" />
          <p className="title">Parabéns</p>
        </div>
        <p className="msg">Você não esqueceu de nenhum flashcard!</p>
      </React.Fragment>
    );

    const content2 = (
      <React.Fragment>
        <div>
          <img src={SadEmoji} draggable="false" alt="" />
          <p className="title">Putz...</p>
        </div>
        <p className="msg">
          Ainda faltam alguns... <br />
          Mas não desanime!
        </p>
      </React.Fragment>
    );

    return (
      <footer className="finished">
        <div className="result">
          {score.forgot > 0 || score.remembered < goal ? content2 : content1}
        </div>
        <p>
          {cardsMade}/{totalCards} CONCLUÍDOS{" "}
        </p>
        <div>
          {icons.map((src, index) => (
            <img key={index} src={src} alt="" draggable="false" />
          ))}
        </div>
        <Button
          className="btn restart"
          content="REINICIAR RECALL"
          onClick={handleClick}
        />
      </footer>
    );
  }

  return (
    <footer>
      <p>
        {cardsMade}/{totalCards} CONCLUÍDOS{" "}
      </p>
      <div>
        {icons.map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </div>
    </footer>
  );
};

export { Footer };

import React from "react";

import "./style.css";

import PartyEmoji from "../../assets/party.png";
import SadEmoji from "../../assets/sad.png";

const Footer = ({ icons, cardsMade = 0, totalCards = 4, restart, score }) => {
  if (cardsMade === totalCards) {
    const content1 = (
      <React.Fragment>
        <div>
          <img src={PartyEmoji} alt="" />
          <p className="title">Parabéns</p>
        </div>
        <p className="msg">Você não esqueceu de nenhum flashcard!</p>
      </React.Fragment>
    );

    const content2 = (
      <React.Fragment>
        <div>
          <img src={SadEmoji} alt="" />
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
        <div className="result">{score.forgot > 0 ? content2 : content1}</div>
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

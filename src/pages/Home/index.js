import React, { useState } from "react";

import "./style.css";

import { Header } from "./../../components/Header";
import { Cards } from "./../../components/Cards";
import { Footer } from "./../../components/Footer";

import { shuffleDeck } from "../../utils";

const initialState = {
  forgot: 0,
  almostForgot: 0,
  remembered: 0,
};

const Home = ({ changeScreen, deck }) => {
  const [icons, setIcons] = useState([]);
  const [score, setScore] = useState(initialState);

  if (icons.length === 0) {
    shuffleDeck(deck);
  }

  const sectionClass = icons.length === deck.length ? "home finished" : "home";

  const addIcon = (icon) => {
    setIcons([...icons, icon]);
  };

  const changeScore = (color) => {
    if (color === "red") {
      const newForgot = score.forgot + 1;
      const newState = { ...score, forgot: newForgot };
      setScore(newState);
    } else if (color === "yellow") {
      const newAlmostForgot = score.almostForgot + 1;
      const newState = { ...score, almostForgot: newAlmostForgot };
      setScore(newState);
    } else {
      const newRemembered = score.remembered + 1;
      const newState = { ...score, remembered: newRemembered };
      setScore(newState);
    }
  };

  return (
    <React.Fragment>
      <section className={sectionClass}>
        <Header />
        <Cards 
          deck={deck} 
          changeIcons={addIcon} 
          changeScore={changeScore} 
        />
      </section>
      <Footer
        icons={icons}
        cardsMade={icons.length}
        totalCards={deck.length}
        score={score}
        restart={changeScreen}
      />
    </React.Fragment>
  );
};

export { Home };

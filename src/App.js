import { useState } from "react";

import "./styles/reset.css";
import "./styles/global.css";

import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";

import { deckReact } from "./data";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [deck, setDeck] = useState(deckReact);
  const [goal, setGoal] = useState("");

  const changeScreen = (screen) => {
    setScreen(screen);
  };

  const changeDeck = (deck) => {
    setDeck(deck);
  };

  const changeGoal = (value) => {
    setGoal(value);
  };

  return screen === "welcome" ? (
    <Welcome
      changeScreen={changeScreen}
      changeDeck={changeDeck}
      changeGoal={changeGoal}
      goal={goal}
      maxOfCards={deck.length}
    />
  ) : (
    <Home
      changeScreen={changeScreen}
      changeGoal={changeGoal}
      deck={deckReact}
      goal={goal}
    />
  );
}

export default App;

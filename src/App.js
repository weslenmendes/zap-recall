import { useState } from "react";

import "./styles/reset.css";
import "./styles/global.css";

import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";

import { deckJS, deckLinux, deckReact } from "./data";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [deck, setDeck] = useState({});
  const [goal, setGoal] = useState("");

  const changeScreen = (screen) => {
    setScreen(screen);
  };

  const changeDeck = (nameOfDeck) => {
    switch (nameOfDeck) {
      case "react":
        setDeck(deckReact);
        break;
      case "javascript":
        setDeck(deckJS);
        break;
      case "linux":
        setDeck(deckLinux);
        break;
      default:
        return;
    }
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
      deck={deck}
      maxOfCards={deck.length}
    />
  ) : (
    <Home
      changeScreen={changeScreen}
      changeGoal={changeGoal}
      deck={deck}
      goal={goal}
    />
  );
}

export default App;

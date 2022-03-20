import { useState } from "react";

import "./styles/reset.css";
import "./styles/global.css";

import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";

import { deckReact } from "./data";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [goal, setGoal] = useState(1);

  const changeGoal = (value) => {
    setGoal(value);
  };

  const changeScreen = (screen) => {
    setScreen(screen);
  };

  return screen === "welcome" ? (
    <Welcome changeScreen={changeScreen} goal={goal} changeGoal={changeGoal} />
  ) : (
    <Home
      changeScreen={changeScreen}
      deck={deckReact}
      goal={goal}
      changeGoal={changeGoal}
    />
  );
}

export default App;

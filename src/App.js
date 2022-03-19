import { useState } from "react";

import "./styles/reset.css";
import "./styles/global.css";

import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";

import { deckReact } from "./data";

function App() {
  const [screen, setScreen] = useState("welcome");

  const changeScreen = (screen) => {
    setScreen(screen);
  };

  return screen === "welcome" ? (
    <Welcome changeScreen={changeScreen} />
  ) : (
    <Home changeScreen={changeScreen} deck={deckReact} />
  );
}

export default App;

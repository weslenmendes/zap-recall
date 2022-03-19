import { useState } from "react";

import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";

function App() {
  const [screen, setScreen] = useState("welcome");

  const changeScreen = (screen) => {
    setScreen(screen);
  };

  return screen === "welcome" ? (
    <Welcome changeScreen={changeScreen} />
  ) : (
    <Home changeScreen={changeScreen} />
  );
}

export default App;

import "./style.css";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import Logo from "../../assets/images/logo.png";

const Welcome = ({ changeScreen, changeGoal, goal, maxOfCards }) => {
  return (
    <section className="welcome-page">
      <header>
        <img src={Logo} draggable="false" alt="ZapRecall" />
        <h1 className="title">ZapRecall</h1>
        <Input changeGoal={changeGoal} goal={goal} max={maxOfCards} />
        <Button
          content="Iniciar Recall!"
          onClick={() => changeScreen("home")}
          disabled={goal < 1}
        />
      </header>
    </section>
  );
};

export { Welcome };

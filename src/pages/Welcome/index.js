import "./style.css";

import { Button } from "../../components/Button";

import Logo from "../../assets/images/logo.png";

const Welcome = ({ changeScreen }) => {
  return (
    <section className="welcome-page">
      <header>
        <img src={Logo} alt="ZapRecall" />
        <h1 className="title">ZapRecall</h1>
        <Button
          content="Iniciar Recall!"
          onClick={() => changeScreen("home")}
        />
      </header>
    </section>
  );
};

export { Welcome };

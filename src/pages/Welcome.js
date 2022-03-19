import { Button } from "../components/Button";

const Welcome = ({ changeScreen }) => {
  return (
    <section className="welcome-page">
      <header>
        <img src="assets/images/logo.png" alt="ZapRecall" />
        <h1 className="title">ZapRecall</h1>
        <Button
          content="Iniciar Recall!"
          onClick={() => {
            changeScreen("home");
          }}
        />
      </header>
    </section>
  );
};

export { Welcome };

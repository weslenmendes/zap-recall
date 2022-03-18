import { Header } from "../components/Header";
import { Card } from "../components/Cards/Card";

const Home = () => {
  return (
    <>
      <section className="home">
        <Header />
        <section className="cards">
          <Card
            question="O que é JSX?"
            response="É um sintaxe que junta o JavaScript com XML."
          />
          <Card
            question="O que é JSX?"
            response="É um sintaxe que junta o JavaScript com XML."
          />
          <Card
            question="O que é JSX?"
            response="É um sintaxe que junta o JavaScript com XML."
          />
          <Card
            question="Três pratos de trigo para tres tigres trixtesldkoakokowqkqwoko"
            response="É um sintaxe que junta o JavaScript com XML."
          />
          <Card
            question="O que é JSX?"
            response="É um sintaxe que junta o JavaScript com XML."
          />
        </section>
      </section>
    </>
  );
};

export { Home };

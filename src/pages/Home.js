import { Header } from "../components/Header";
import { Card } from "../components/Cards/Card";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
      <section className="home">
        <Header />
        <section className="cards">
          <Card
            id="1"
            question="O que é JSX?"
            response="É um sintaxe que junta o JavaScript com XML."
          />
          <Card
            id="2"
            question="O que é JSX?"
            response="É um sintaxe que junta o JavaScript com XML."
          />
          <Card
            id="3"
            question="O que é JSX?"
            response="É um sintaxe que junta o JavaScript com XML."
          />
          <Card
            id="4"
            question="Três pratos de trigo para tres tigres trixtesldkoakokowqkqwoko"
            response="É um sintaxe que junta o JavaScript com XML."
          />
          <Card
            id="5"
            question="O que é JSX?"
            response="É um sintaxe que junta o JavaScript com XML."
          />
        </section>
      </section>
      <Footer />
    </>
  );
};

export { Home };

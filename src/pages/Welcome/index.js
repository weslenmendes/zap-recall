import "./style.css";

import { Form } from "../../components/Form";

import Logo from "../../assets/images/logo.png";

const Welcome = ({
  changeScreen,
  changeGoal,
  goal,
  changeDeck,
  maxOfCards,
}) => {
  return (
    <section className="welcome-page">
      <header>
        <img src={Logo} draggable="false" alt="ZapRecall" />
        <h1 className="title">ZapRecall</h1>
      </header>
      <Form
        changeGoal={changeGoal}
        changeDeck={changeDeck}
        changeScreen={changeScreen}
        maxOfCards={maxOfCards}
        goal={goal}
      />
    </section>
  );
};

export { Welcome };

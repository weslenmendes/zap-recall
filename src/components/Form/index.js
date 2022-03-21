import { useState } from "react";

import "./style.css";

const Form = ({
  changeScreen,
  changeDeck,
  changeGoal,
  goal = "",
  maxOfCards,
}) => {
  const [showInput, setShowInput] = useState(false);

  const handleInput = (value) => {
    const parsedValue = +value;
    const min = 1,
      max = maxOfCards;

    if (parsedValue === 0 || Number.isNaN(parsedValue)) {
      changeGoal("");
      return;
    }

    if (parsedValue < min || parsedValue > max) {
      changeGoal("");
      alert(`Por favor, digite um número entre ${min} e ${max}`);
      return;
    }

    changeGoal(value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "select" && value === "") {
      setShowInput(false);
      return;
    }

    if (name === "select") {
      changeDeck(value);
      changeGoal("");
      setShowInput(true);
    } else if (name === "input") {
      handleInput(value);
    }

    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeScreen("home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="select-container">
        <select name="select" onChange={handleChange}>
          <option value="">Escolha seu deck</option>
          <option value="react">React</option>
          <option value="javascript">JavaScript</option>
          <option value="linux">Linux</option>
        </select>
      </div>
      <div>
        {showInput && (
          <input
            type="number"
            name="input"
            value={goal}
            onChange={handleChange}
            placeholder="Digite sua meta de zaps..."
            min={1}
            max={maxOfCards}
          />
        )}
      </div>
      <button className="btn" disabled={goal < 1}>
        Iniciar Recall!
      </button>
    </form>
  );
};

export { Form };

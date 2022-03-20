import "./style.css";

const Input = ({ changeGoal, goal, min = 1, max }) => {
  const handleChange = (e) => {
    const value = +e.target.value;

    if (value === 0) {
      changeGoal("");
      return;
    }

    if (value < min || value > max) {
      changeGoal("");
      alert(`Por favor, digite um número entre ${min} e ${max}`);
      return;
    }

    changeGoal(value);
  };

  return (
    <input
      type="number"
      placeholder="Digite sua meta de zaps..."
      onChange={handleChange}
      value={goal}
      min={min}
      max={max}
    />
  );
};

export { Input };

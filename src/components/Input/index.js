import "./style.css";

const Input = ({ changeGoal, goal, min, max }) => {
  return (
    <input
      type="number"
      placeholder="Digite sua meta de zaps..."
      onChange={(e) => changeGoal(+e.target.value)}
      value={goal}
      min={min}
      max={max}
    />
  );
};

export { Input };

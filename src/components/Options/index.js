import { Button } from "../Button";

const allOptions = [
  { id: 1, className: "btn red", content: "Não lembrei", color: "red" },
  {
    id: 2,
    className: "btn yellow",
    content: "Quase não lembrei",
    color: "yellow",
  },
  { id: 3, className: "btn green", content: "Zap!", color: "green" },
];

const Options = ({ handleResponse, changeScore }) => {
  const handleClick = (color) => {
    handleResponse(color);
    changeScore(color);
  };

  return (
    <div className="options">
      {allOptions.map(({ id, className, content, color }) => (
        <Button
          key={id}
          className={className}
          content={content}
          onClick={() => handleClick(color)}
        />
      ))}
    </div>
  );
};

export { Options };

import "./style.css";

const Button = ({ className = "btn", content, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
};

export { Button };

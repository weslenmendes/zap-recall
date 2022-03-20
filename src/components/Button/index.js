import "./style.css";

const Button = ({ className = "btn", content, onClick, disabled = false }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export { Button };

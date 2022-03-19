import "./style.css";

const Button = ({ content, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {content}
    </button>
  );
};

export { Button };

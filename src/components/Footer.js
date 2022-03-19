const Footer = ({ cardsMade = 0, totalCards = 4 }) => {
  return (
    <footer>
      <p>
        {cardsMade}/{totalCards} CONCLUÍDOS{" "}
      </p>
      <div className="yellow-fill">
        <img src="assets/help-circle.svg" className="yellow-fill" alt="" />
        <img src="assets/close-circle.svg" className="yellow-fill" alt="" />
        <img src="assets/checkmark-circle.svg" className="yellow-fill" alt="" />
      </div>
    </footer>
  );
};

export { Footer };

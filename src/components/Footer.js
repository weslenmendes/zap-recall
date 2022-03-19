const Footer = ({ icons, cardsMade = 0, totalCards = 4 }) => {
  if (cardsMade === totalCards) {
    const isForgot = icons.includes("assets/close-circle.svg");

    const content1 = (
      <>
        <div>
          <img src="assets/party.png" alt="" />
          <p className="title">Parabéns</p>
        </div>
        <p className="msg">Você não esqueceu de nenhum flashcard!</p>
      </>
    );

    const content2 = (
      <>
        <div>
          <img src="assets/sad.png" alt="" />
          <p className="title">Putz...</p>
        </div>
        <p className="msg">
          Ainda faltam alguns... <br />
          Mas não desanime!
        </p>
      </>
    );

    return (
      <footer className="finished">
        <div className="result">{isForgot ? content2 : content1}</div>
        <p>
          {cardsMade}/{totalCards} CONCLUÍDOS{" "}
        </p>
        <div>
          {icons.map((src, index) => (
            <img key={`${src}${index}`} src={src} alt="" />
          ))}
        </div>
      </footer>
    );
  }

  return (
    <footer>
      <p>
        {cardsMade}/{totalCards} CONCLUÍDOS{" "}
      </p>
      <div>
        {icons.map((src) => (
          <img key={src} src={src} alt="" />
        ))}
      </div>
    </footer>
  );
};

export { Footer };

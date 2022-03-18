import { useState } from "react";

const initialState = { start: false, showResponse: false };

const Card = ({ question, response }) => {
  const [status, setStatus] = useState(initialState);

  if (!status.start) {
    return (
      <article className="card">
        <p>Pergunta 1</p>
        <div
          className="action-btn"
          onClick={() => setStatus({ ...status, start: true })}
        >
          <img src="assets/play-outline.svg" alt="" />
        </div>
      </article>
    );
  }

  return (
    <article className="card show">
      {!status.showResponse ? (
        <section className="front">
          <p>{question}</p>
          <div onClick={() => setStatus({ ...status, showResponse: true })}>
            <img src="assets/rotate.svg" alt="" />
          </div>
        </section>
      ) : (
        <section className="back">
          <p>{response}</p>
          <div className="options">
            <button class="btn red">Não lembrei</button>
            <button class="btn yellow">Quase não lembrei</button>
            <button class="btn green">Zap!</button>
          </div>
        </section>
      )}
    </article>
  );
};

export { Card };

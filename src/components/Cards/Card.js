import { useState } from "react";

const initialState = { start: false, showResponse: false };

const Card = ({ id, question, response, changeIcons }) => {
  const [status, setStatus] = useState(initialState);
  const [responded, setResponded] = useState({
    titleClass: "",
    imageSrc: "assets/play-outline.svg",
  });

  const handleResponse = (buttonColor) => {
    setStatus({ ...status, start: false });
    if (buttonColor === "red") {
      const newState = {
        titleClass: "no-remember",
        imageSrc: "assets/close-circle.svg",
      };
      setResponded(newState);
      changeIcons(newState.imageSrc);
    } else if (buttonColor === "yellow") {
      const newState = {
        titleClass: "almost-remember",
        imageSrc: "assets/help-circle.svg",
      };
      setResponded(newState);
      changeIcons(newState.imageSrc);
    } else {
      const newState = {
        titleClass: "remember",
        imageSrc: "assets/checkmark-circle.svg",
      };
      setResponded(newState);
      changeIcons(newState.imageSrc);
    }
  };

  const changeStatus = () => {
    setStatus({ ...status, start: true });
  };

  if (!status.start) {
    const cardClass = status.showResponse ? "card responded" : "card";

    return (
      <article className={cardClass}>
        <p className={responded.titleClass}>Pergunta {id}</p>

        {status.showResponse ? (
          <div className="action-btn">
            <img src={responded.imageSrc} alt="" />
          </div>
        ) : (
          <div className="action-btn" onClick={changeStatus}>
            <img src={responded.imageSrc} alt="" />
          </div>
        )}
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
            <button className="btn red" onClick={() => handleResponse("red")}>
              Não lembrei
            </button>
            <button
              className="btn yellow"
              onClick={() => handleResponse("yellow")}
            >
              Quase não lembrei
            </button>
            <button
              className="btn green"
              onClick={() => handleResponse("green")}
            >
              Zap!
            </button>
          </div>
        </section>
      )}
    </article>
  );
};

export { Card };

import { useState } from "react";

import { Options } from "../Options";

import PlayIcon from "../../assets/play-outline.svg";
import CloseIcon from "../../assets/close-circle.svg";
import HelpIcon from "../../assets/help-circle.svg";
import CheckIcon from "../../assets/checkmark-circle.svg";
import RotateIcon from "../../assets/rotate.svg";

const statusInitialState = { start: false, showResponse: false };
const respondedInitialState = {
  titleClass: "",
  imageSrc: PlayIcon,
};

const Card = ({ id, question, response, changeIcons, changeScore }) => {
  const [status, setStatus] = useState(statusInitialState);
  const [responded, setResponded] = useState(respondedInitialState);

  const handleResponse = (buttonColor) => {
    const newStateOfStatus = { ...status, start: false };
    setStatus(newStateOfStatus);

    if (buttonColor === "red") {
      const newStateOfResponded = {
        titleClass: "no-remember",
        imageSrc: CloseIcon,
      };
      setResponded(newStateOfResponded);
      changeIcons(newStateOfResponded.imageSrc);
    } else if (buttonColor === "yellow") {
      const newStateOfResponded = {
        titleClass: "almost-remember",
        imageSrc: HelpIcon,
      };
      setResponded(newStateOfResponded);
      changeIcons(newStateOfResponded.imageSrc);
    } else {
      const newStateOfResponded = {
        titleClass: "remember",
        imageSrc: CheckIcon,
      };
      setResponded(newStateOfResponded);
      changeIcons(newStateOfResponded.imageSrc);
    }
  };

  const changeStatus = () => {
    const newState = { ...status, start: true };
    setStatus(newState);
  };

  if (!status.start) {
    const cardClass = status.showResponse ? "card responded" : "card";

    const { titleClass, imageSrc } = responded;

    return (
      <article className={cardClass}>
        <p className={titleClass}>Pergunta {id}</p>

        {status.showResponse ? (
          <div className="action-btn">
            <img src={imageSrc} alt="" />
          </div>
        ) : (
          <div className="action-btn" onClick={changeStatus}>
            <img src={imageSrc} alt="" />
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
            <img src={RotateIcon} alt="" />
          </div>
        </section>
      ) : (
        <section className="back">
          <p>{response}</p>
          <Options handleResponse={handleResponse} changeScore={changeScore} />
        </section>
      )}
    </article>
  );
};

export { Card };

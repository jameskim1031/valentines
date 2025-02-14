import React, { useState, useRef } from "react";
import "./TwentyFive.css";
import dudu from "../Images/dudu.jpeg";
import { useNavigate } from "react-router-dom";
import bubududu from "../Images/bubududu.jpeg";

function TwentyFive() {
  let navigate = useNavigate();
  const [buttonSize, setButtonSize] = useState(30);
  const [saidYes, setSaidYes] = useState(false);
  const noButtonRef = useRef(null);
  const [canMove, setCanMove] = useState(true);
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "0",
    left: "55%",
  });

  const getRandomPosition = () => {
    const randomTop = Math.floor(Math.random() * 200) - 50;
    const randomLeft = Math.floor(Math.random() * 200) - 50;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  const handleNoClick = () => {
    setNoButtonPosition(getRandomPosition());
  };

  const handleMouseMove = (event) => {
    if (!noButtonRef.current || !canMove) return;

    const rect = noButtonRef.current.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      (mouseX - buttonX) ** 2 + (mouseY - buttonY) ** 2
    );

    if (distance < 100) {
      setNoButtonPosition(getRandomPosition());
      setCanMove(false);

      setTimeout(() => {
        setCanMove(true);
      }, 300);
    }
  };

  const handleYesClick = () => {
    setSaidYes(true);
  };

  return (
    <div className="twenty-five" onMouseMove={handleMouseMove}>
      {!saidYes && (
        <>
          <h1 className="twenty-five-message">Will you be my valentine?</h1>
          <img src={dudu} alt="Sticker" className="twenty-five-sticker" />
          <div className="twenty-five-buttons">
            <button
              onClick={handleYesClick}
              style={{ width: `${buttonSize}px`, height: `${buttonSize}px` }}
              className={`twenty-five-yes-button`}
            >
              Yes
            </button>
            <button className="twenty-five-empty-button"></button>
            <button
              className="twenty-five-no-button"
              ref={noButtonRef}
              style={{
                top: noButtonPosition.top,
                left: noButtonPosition.left,
                transition: "top 0.2s ease, left 0.2s ease",
              }}
              onClick={handleNoClick}
            >
              No
            </button>
          </div>
        </>
      )}
      {saidYes && (
        <>
          <img
            src={bubududu}
            alt="Sticker"
            className="twenty-five-yesSticker"
          />
          <div className="twenty-five-yes-message">
            <h3>Hehe thank you for being my Valentine</h3>
            <h3>I love you Chloe! - JJ</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default TwentyFive;

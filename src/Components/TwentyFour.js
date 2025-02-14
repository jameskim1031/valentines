import React, { useState } from "react";
import "./TwentyFour.css";
import dudu from "../Images/dudu.jpeg";
import { useNavigate } from "react-router-dom";
import bubududu from "../Images/bubududu.jpeg";

function TwentyFour() {
  let navigate = useNavigate();
  const [buttonSize, setButtonSize] = useState(30);
  const [saidYes, setSaidYes] = useState(false);

  const handleNoClick = () => {
    setButtonSize(buttonSize + 20);
  };

  const handleYesClick = () => {
    setSaidYes(true);
  };

  return (
    <div className="twenty-four">
      {!saidYes && (
        <>
          <h1 className="twenty-four-message">Will you be my valentine?</h1>
          <img src={dudu} alt="Sticker" className="twenty-four-sticker" />{" "}
          <div className="twenty-four-buttons">
            <button
              onClick={handleYesClick}
              style={{ width: `${buttonSize}px`, height: `${buttonSize}px` }}
              className={`twenty-four-yes-button`}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="twenty-four-no-button">
              No
            </button>
          </div>
        </>
      )}
      {saidYes && (
        <>
          <img src={bubududu} alt="Sticker" className="yesSticker" />
          <h3>hehe i love you Chloe my one and only valentine</h3>
        </>
      )}
    </div>
  );
}

export default TwentyFour;

import React, { useState } from "react";
import "./TwentySix.css";
import dudu from "../Images/dudu.jpeg";
import bubududu from "../Images/bubududu.jpeg";

function TwentySix() {
  const [saidYes, setSaidYes] = useState(false);
  const [dialogDepth, setDialogDepth] = useState(0);
  const [dialogOffsets, setDialogOffsets] = useState([]);

  const getRandomOffset = (depth) => {
    const range = 30 + depth * 4; // slightly more chaos per layer
    return {
      x: Math.floor(Math.random() * range * 2) - range,
      y: Math.floor(Math.random() * range * 2) - range,
    };
  };

  const handleMainYesClick = () => {
    setSaidYes(true);
  };

  const handleMainNoClick = () => {
    // Start recursion with FIRST dialog offset
    setDialogOffsets([getRandomOffset(0)]);
    setDialogDepth(1);
  };

  const handleDialogYes = () => {
    // Add an offset ONLY for the new dialog (top layer)
    setDialogOffsets((prev) => [...prev, getRandomOffset(prev.length)]);
    setDialogDepth((d) => d + 1);
  };

  const handleDialogNo = () => {
    // Close all dialogs
    setDialogDepth(0);
    setDialogOffsets([]);
  };

  return (
    <div className="twenty-six">
      {!saidYes && (
        <>
          <h1 className="twenty-six-message">Will you be my valentine?</h1>
          <img src={dudu} alt="Sticker" className="twenty-six-sticker" />

          <div className="twenty-six-buttons">
            <button
              onClick={handleMainYesClick}
              className="twenty-six-yes-button"
            >
              Yes
            </button>

            <button
              onClick={handleMainNoClick}
              className="twenty-six-no-button"
            >
              No
            </button>
          </div>
        </>
      )}

      {saidYes && (
        <>
          <img src={bubududu} alt="Sticker" className="twenty-six-yesSticker" />
          <div className="twenty-six-yes-message">
            <h3>Hehe thank you for being my Valentine</h3>
            <h3>I love you Chloe! - JJ</h3>
          </div>
        </>
      )}

      {dialogDepth > 0 && (
        <div className="jj-modal-overlay">
          {Array.from({ length: dialogDepth }).map((_, idx) => {
            const isTop = idx === dialogDepth - 1;
            const offset = dialogOffsets[idx] ?? { x: 0, y: 0 };

            return (
              <div
                key={idx}
                className="jj-modal warning-modal"
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px)`,
                  pointerEvents: isTop ? "auto" : "none",
                }}
              >
                <div className="warning-bar">⚠️ WARNING ⚠️</div>

                <h2 className="jj-modal-title">
                  Are you{" "}
                  {idx > 0
                    ? Array(2 ** (idx - 1))
                        .fill("rly")
                        .join(" ")
                    : ""}{" "}
                  sure?
                </h2>

                <div className="jj-modal-actions">
                  <button className="jj-modal-yes" onClick={handleDialogYes}>
                    Yes
                  </button>
                  <button className="jj-modal-no" onClick={handleDialogNo}>
                    No
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default TwentySix;

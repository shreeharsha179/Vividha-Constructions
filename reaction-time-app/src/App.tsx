import React, { useState, useRef, useEffect } from "react";
import "./App.css";

// Define the possible game states
type GameState = "start" | "wait" | "click";

const ReactionTimeGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>("start");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setGameState("wait");
    setReactionTime(null);
    // Wait for a random time (2-5 seconds) before changing color
    const delay = Math.floor(Math.random() * 3000) + 2000;

    timeoutRef.current = setTimeout(() => {
      setGameState("click");
      startTimeRef.current = performance.now(); // Capture start time with high precision
    }, delay);
  };

  const handleClick = () => {
    if (gameState === "start") {
      startGame();
    } else if (gameState === "wait") {
      // User clicked too early
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setGameState("start");
      setReactionTime(0); // Indicate a failed attempt
    } else if (gameState === "click") {
      // User clicked when ready
      const endTime = performance.now();
      const timeElapsed = endTime - startTimeRef.current;
      setReactionTime(Math.round(timeElapsed));
      setGameState("start");
    }
  };

  // Cleanup function to clear the timeout if the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const getMessage = () => {
    if (gameState === "start") return "Click to Start";
    if (gameState === "wait") return "Wait for Green...";
    if (gameState === "click") return "Click NOW!";
    return "";
  };

  return (
    <div className="game-container" onClick={handleClick}>
      <div className={`game-box ${gameState}`}>
        <p className="message">{getMessage()}</p>
        {reactionTime !== null && (
          <div className="result">
            {reactionTime === 0 ? (
              <p>You clicked too early! Try again.</p>
            ) : (
              <p>
                Your reaction time: <strong>{reactionTime} ms</strong>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReactionTimeGame;

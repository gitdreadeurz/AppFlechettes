import React, { useState } from "react";
import EndGame from "./pages/EndGame";
import Config from "./pages/Config";

export default function App() {
  const [screen, setScreen] = useState("end");

  const result = {
    winner: "Simon",
    startingScore: 501,
    checkoutType: "double",
    totalRounds: 12,
    playersStats: [
      {
        name: "Simon",
        turns: 12,
        totalScored: 501,
        remainingScore: 0,
        averagePerTurn: 41.8,
      },
      {
        name: "Alex",
        turns: 12,
        totalScored: 438,
        remainingScore: 63,
        averagePerTurn: 36.5,
      },
      {
        name: "Léo",
        turns: 12,
        totalScored: 401,
        remainingScore: 100,
        averagePerTurn: 33.4,
      },
    ],
  };

  const handleReplay = () => {
    console.log("Rejouer avec les mêmes paramètres");
    setScreen("game");
  };

  const handleNewGame = () => {
    console.log("Retour à la configuration");
    setScreen("home");
  };

  if (screen === "end") {
    return (
      <EndGame
        result={result}
        onReplay={handleReplay}
        onNewGame={handleNewGame}
      />
    );
  }

  if (screen === "game") {
    return (
      <div style={placeholderStyles.page}>
        <h1>Écran de jeu</h1>
      </div>
    );
  }

  return (
    <div style={placeholderStyles.page}>
      <Config />
    </div>
  );
}

const placeholderStyles = {
  page: {
    minHeight: "100vh",
    background: "#0D1B2A",
    color: "#F1FAEE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, sans-serif",
  },
};

}



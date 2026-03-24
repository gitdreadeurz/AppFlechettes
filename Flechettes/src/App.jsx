import React, { useState } from "react";
import EndGame from "./pages/EndGame";
import Config from "./pages/Config";
import GamePage from "./pages/GamePage";

/**
 * Composant racine de l'application de fléchettes.
 * Il agit comme un routeur simple en gérant l'affichage
 * des différents écrans via un état local.
 */
export default function App() {
  // État de l'écran courant : "home" | "game" | "end"
  const [screen, setScreen] = useState("home");

  // Configuration de la partie en cours (définie depuis l'écran Config)
  const [gameConfig, setGameConfig] = useState(null);

  // --- Données de résultat fictives (à remplacer par les vraies données de jeu) ---
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

  // Relance une partie avec la même configuration (retour à l'écran de jeu)
  const handleReplay = () => {
    console.log("Rejouer avec les mêmes paramètres");
    setScreen("game");
  };

  // Retourne à l'écran d'accueil / configuration pour une nouvelle partie
  const handleNewGame = () => {
    console.log("Retour à la configuration");
    setScreen("home");
  };

  const handleEndGame = () => {
    console.log("Fin de partie");
    setScreen("end");
  };

  /**
   * Callback appelé par le composant Config une fois la partie configurée.
   * Sauvegarde la config et navigue vers l'écran de jeu.
   * @param {Object} config - Les paramètres choisis par l'utilisateur
   */
  const handleGameStart = (config) => {
    setGameConfig(config);
    setScreen("game");
  };

  // Affiche l'écran de fin de partie avec les statistiques
  if (screen === "end") {
    return (
      <EndGame
        result={result}
        onReplay={handleReplay}
        onNewGame={handleNewGame}
      />
    );
  }

  // Affiche l'écran de jeu avec la configuration sélectionnée
  if (screen === "game") {
    return (
      <div style={placeholderStyles.page}>
        <GamePage config={gameConfig} 
        handleEndGame={handleEndGame}
        />
      </div>
    );
  }

  // Écran par défaut : configuration / accueil
  return (
    <div style={placeholderStyles.page}>
      <Config setGameConfig={handleGameStart} />
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
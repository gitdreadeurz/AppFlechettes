import React from "react";

export default function EndGame({ result, onReplay, onNewGame }) {
  if (!result) return null;

  const {
    winner,
    startingScore,
    checkoutType,
    totalRounds,
    playersStats = [],
  } = result;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <section style={styles.hero}>
          <p style={styles.overline}>Fin de partie</p>
          <h1 style={styles.winnerName}>{winner}</h1>
          <p style={styles.winnerText}>remporte la partie</p>
        </section>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>Résumé de la partie</h2>

          <div style={styles.summaryGrid}>
            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Score de départ</span>
              <strong style={styles.summaryValue}>{startingScore}</strong>
            </div>

            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Type de sortie</span>
              <strong style={styles.summaryValue}>
                {checkoutType === "double" ? "Double obligatoire" : "Simple"}
              </strong>
            </div>

            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Nombre de tours</span>
              <strong style={styles.summaryValue}>{totalRounds}</strong>
            </div>

            <div style={styles.summaryItem}>
              <span style={styles.summaryLabel}>Vainqueur</span>
              <strong style={styles.summaryValue}>{winner}</strong>
            </div>
          </div>
        </section>

        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>Statistiques des joueurs</h2>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Joueur</th>
                  <th style={styles.th}>Tours</th>
                  <th style={styles.th}>Points marqués</th>
                  <th style={styles.th}>Score restant</th>
                  <th style={styles.th}>Moyenne / tour</th>
                </tr>
              </thead>
              <tbody>
                {playersStats.map((player) => (
                  <tr
                    key={player.name}
                    style={player.name === winner ? styles.winnerRow : undefined}
                  >
                    <td style={styles.td}>{player.name}</td>
                    <td style={styles.td}>{player.turns}</td>
                    <td style={styles.td}>{player.totalScored}</td>
                    <td style={styles.td}>{player.remainingScore}</td>
                    <td style={styles.td}>{player.averagePerTurn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div style={styles.actions}>
          <button style={styles.primaryButton} onClick={onReplay}>
            Rejouer
          </button>

          <button style={styles.secondaryButton} onClick={onNewGame}>
            Nouvelle partie
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0D1B2A",
    color: "#F1FAEE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    fontFamily: "Inter, sans-serif",
  },
  container: {
    width: "100%",
    maxWidth: "900px",
    display: "grid",
    gap: "18px",
  },
  hero: {
    background: "linear-gradient(135deg, #E63946, #b91c2b)",
    borderRadius: "24px",
    padding: "28px",
    textAlign: "center",
    boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
  },
  overline: {
    margin: 0,
    fontSize: "0.95rem",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },
  winnerName: {
    margin: "10px 0 6px",
    fontSize: "2.4rem",
    fontWeight: 800,
  },
  winnerText: {
    margin: 0,
    fontSize: "1rem",
  },
  card: {
    background: "#1B2838",
    borderRadius: "20px",
    padding: "22px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  },
  sectionTitle: {
    marginTop: 0,
    marginBottom: "16px",
    fontSize: "1.3rem",
    fontWeight: 800,
  },
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "12px",
  },
  summaryItem: {
    background: "#102030",
    borderRadius: "14px",
    padding: "16px",
  },
  summaryLabel: {
    display: "block",
    color: "#c9d6df",
    marginBottom: "6px",
    fontSize: "0.92rem",
  },
  summaryValue: {
    color: "#F1FAEE",
    fontSize: "1.08rem",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    textAlign: "left",
    padding: "12px",
    borderBottom: "1px solid #31465c",
    color: "#c9d6df",
    fontSize: "0.95rem",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #26384a",
  },
  winnerRow: {
    background: "rgba(230, 57, 70, 0.12)",
  },
  actions: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  primaryButton: {
    border: "none",
    background: "#E63946",
    color: "#fff",
    padding: "14px 18px",
    borderRadius: "12px",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
  },
  secondaryButton: {
    border: "1px solid #4a6078",
    background: "#1B2838",
    color: "#F1FAEE",
    padding: "14px 18px",
    borderRadius: "12px",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
  },
};
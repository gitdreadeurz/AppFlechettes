import React, { useState } from "react";

const EndGame = ({ resultat, onReplay, onNewGame }) => {
  const [expandedPlayer, setExpandedPlayer] = useState(null);

  if (!resultat) return null;

  const joueurs = [
    { nom: resultat.Joueur1, histo: resultat.HistoJoueur1 },
    { nom: resultat.Joueur2, histo: resultat.HistoJoueur2 },
    { nom: resultat.Joueur3, histo: resultat.HistoJoueur3 },
    { nom: resultat.Joueur4, histo: resultat.HistoJoueur4 },
  ].filter((j) => j.nom && j.nom.trim() !== "");

  const calcStats = (histo) => {
    const total = histo.reduce((acc, val) => acc + val, 0);
    const tours = histo.length;
    const moyenne = tours > 0 ? (total / tours).toFixed(1) : 0;
    const meilleurTour = tours > 0 ? Math.max(...histo) : 0;
    return { total, tours, moyenne, meilleurTour };
  };

  // Tri : gagnant en premier, puis par total décroissant
  const joueursTriés = [...joueurs].sort((a, b) => {
    if (a.nom === resultat.Gagnant) return -1;
    if (b.nom === resultat.Gagnant) return 1;
    return calcStats(b.histo).total - calcStats(a.histo).total;
  });

  const styles = {
    page: {
      height: "100vh",
      background: "#0D1B2A",
      color: "#F1FAEE",
      fontFamily: "'Courier New', monospace",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px 20px 16px",
      boxSizing: "border-box",
      overflow: "hidden",
    },
    winnerSection: {
      textAlign: "center",
      marginBottom: "12px",
      animation: "fadeInDown 0.6s ease",
      flexShrink: 0,
    },
    crownIcon: {
      fontSize: "28px",
      display: "block",
      marginBottom: "4px",
    },
    winnerLabel: {
      fontSize: "15px",
      letterSpacing: "6px",
      textTransform: "uppercase",
      color: "#E9C46A",
      marginBottom: "4px",
    },
    winnerName: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#E9C46A",
      textShadow: "0 0 30px rgba(233,196,106,0.4)",
      margin: "0 0 4px 0",
      letterSpacing: "2px",
    },
    divider: {
      width: "60px",
      height: "2px",
      background: "linear-gradient(90deg, transparent, #E9C46A, transparent)",
      margin: "8px auto",
    },
    tableContainer: {
      width: "100%",
      maxWidth: "700px",
      marginBottom: "12px",
      flexShrink: 0,
    },
    tableTitle: {
      fontSize: "15px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      color: "#A8DADC",
      marginBottom: "8px",
      textAlign: "center",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "15px",
    },
    th: {
      padding: "6px 16px",
      textAlign: "left",
      fontSize: "10px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "#457B9D",
      borderBottom: "1px solid rgba(69,123,157,0.3)",
    },
    trWinner: {
      background: "rgba(233,196,106,0.07)",
      borderLeft: "3px solid #E9C46A",
    },
    trNormal: {
      borderLeft: "3px solid transparent",
    },
    td: {
      padding: "8px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    },
    tdName: {
      fontWeight: "bold",
      letterSpacing: "1px",
    },
    badge: {
      display: "inline-block",
      fontSize: "9px",
      letterSpacing: "2px",
      background: "#E9C46A",
      color: "#0D1B2A",
      padding: "2px 6px",
      borderRadius: "2px",
      marginLeft: "8px",
      verticalAlign: "middle",
    },
    histoSection: {
      width: "100%",
      maxWidth: "700px",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      marginBottom: "12px",
    },
    histoScroll: {
      overflowY: "auto",
      flex: 1,
      minHeight: 0,
    },
    playerCard: {
      marginBottom: "6px",
      border: "1px solid rgba(168,218,220,0.15)",
      borderRadius: "4px",
      overflow: "hidden",
    },
    playerCardHeader: {
      padding: "10px 16px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      background: "rgba(255,255,255,0.03)",
      userSelect: "none",
    },
    playerCardHeaderName: {
      fontSize: "13px",
      letterSpacing: "2px",
      textTransform: "uppercase",
    },
    playerCardBody: {
      padding: "12px 16px",
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      background: "rgba(0,0,0,0.2)",
    },
    tourBadge: {
      padding: "4px 10px",
      background: "rgba(168,218,220,0.1)",
      border: "1px solid rgba(168,218,220,0.2)",
      borderRadius: "3px",
      fontSize: "13px",
      color: "#A8DADC",
    },
    tourBadgeBest: {
      background: "rgba(233,196,106,0.15)",
      border: "1px solid rgba(233,196,106,0.4)",
      color: "#E9C46A",
    },
    buttons: {
      display: "flex",
      gap: "16px",
      flexShrink: 0,
    },
    btnPrimary: {
      padding: "10px 28px",
      background: "transparent",
      border: "1px solid #E9C46A",
      color: "#E9C46A",
      fontSize: "11px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      cursor: "pointer",
      fontFamily: "'Courier New', monospace",
      transition: "all 0.2s",
    },
    btnSecondary: {
      padding: "10px 28px",
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.2)",
      color: "rgba(255,255,255,0.5)",
      fontSize: "11px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      cursor: "pointer",
      fontFamily: "'Courier New', monospace",
      transition: "all 0.2s",
    },
  };

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .btn-primary:hover { background: rgba(233,196,106,0.1) !important; }
        .btn-secondary:hover { background: rgba(255,255,255,0.05) !important; color: rgba(255,255,255,0.8) !important; }
      `}</style>

      {/* GAGNANT */}
      <div style={styles.winnerSection}>
        <span style={styles.crownIcon}>🎯</span>
        <div style={styles.winnerLabel}>Vainqueur</div>
        <h1 style={styles.winnerName}>{resultat.Gagnant}</h1>
        <div style={styles.divider} />
      </div>

      {/* TABLEAU DES STATS */}
      <div style={styles.tableContainer}>
        <div style={styles.tableTitle}>Classement & Statistiques</div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Joueur</th>
              <th style={styles.th}>Tours</th>
              <th style={styles.th}>Total</th>
              <th style={styles.th}>Moy / tour</th>
              <th style={styles.th}>Meilleur tour</th>
            </tr>
          </thead>
          <tbody>
            {joueursTriés.map((j, i) => {
              const stats = calcStats(j.histo);
              const isWinner = j.nom === resultat.Gagnant;
              return (
                <tr key={i} style={isWinner ? styles.trWinner : styles.trNormal}>
                  <td style={{ ...styles.td, ...styles.tdName }}>
                    {j.nom}
                    {isWinner && <span style={styles.badge}>GAGNANT</span>}
                  </td>
                  <td style={styles.td}>{stats.tours}</td>
                  <td style={styles.td}>{stats.total} pts</td>
                  <td style={styles.td}>{stats.moyenne} pts</td>
                  <td style={styles.td}>{stats.meilleurTour} pts</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* HISTORIQUE DÉTAILLÉ */}
      <div style={styles.histoSection}>
        <div style={styles.tableTitle}>Historique des tours</div>
        <div style={styles.histoScroll}>
          {joueursTriés.map((j, i) => {
            const stats = calcStats(j.histo);
            const isOpen = expandedPlayer === i;
            return (
              <div key={i} style={styles.playerCard}>
                <div
                  style={styles.playerCardHeader}
                  onClick={() => setExpandedPlayer(isOpen ? null : i)}
                >
                  <span style={styles.playerCardHeaderName}>{j.nom}</span>
                  <span style={{ color: "#457B9D", fontSize: "12px" }}>
                    {isOpen ? "▲ Masquer" : "▼ Voir les tours"}
                  </span>
                </div>
                {isOpen && (
                  <div style={styles.playerCardBody}>
                    {j.histo.map((score, idx) => (
                      <div
                        key={idx}
                        style={{
                          ...styles.tourBadge,
                          ...(score === stats.meilleurTour ? styles.tourBadgeBest : {}),
                        }}
                      >
                        T{idx + 1} : {score}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* BOUTONS */}
      <div style={styles.buttons}>
        <button
          className="btn-primary"
          style={styles.btnPrimary}
          onClick={onReplay}
        >
          Rejouer
        </button>
        <button
          className="btn-secondary"
          style={styles.btnSecondary}
          onClick={onNewGame}
        >
          Nouvelle partie
        </button>
      </div>
    </div>
  );
};

export default EndGame;

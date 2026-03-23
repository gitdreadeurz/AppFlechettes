import { useState } from "react";

const GamePageia = () => {
    const [cible, setCible] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50]);
    const [point, setPoint] = useState(null);
    const [currentTurn, setCurrentTurn] = useState([]);
    const [turnsHistory, setTurnsHistory] = useState([]);
    const [players, setPlayers] = useState([
        { name: "Player 1", score: 0, id: 0 },
        { name: "Player 2", score: 0, id: 1 },
        { name: "Player 3", score: 0, id: 2 },
        { name: "Player 4", score: 0, id: 3 },
    ]);
    const [currentPlayer, setCurrentPlayer] = useState(0);

    const handleThrow = () => {
        const index = Math.floor(Math.random() * cible.length);
        const newPoint = cible[index];
        setPoint(newPoint);
        const newTurn = [...currentTurn, newPoint];
        setCurrentTurn(newTurn);

        if (newTurn.length === 3) {
            const turnTotal = newTurn.reduce((a, b) => a + b, 0);
            const newPlayers = [...players];
            newPlayers[currentPlayer].score += turnTotal;
            setPlayers(newPlayers);
            setTurnsHistory([...turnsHistory, { player: currentPlayer, points: newTurn, total: turnTotal }]);
            setCurrentTurn([]);
            setCurrentPlayer((currentPlayer + 1) % players.length);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Jeu de Fléchettes</h1>
            <div style={styles.throwButtons}>
                <button style={styles.button} onClick={handleThrow}>Lancer flèche</button>
                <p style={styles.point}>Dernier lancer : {point}</p>
                <p style={styles.turn}>Tour en cours : {currentTurn.join(' + ')} = {currentTurn.reduce((a, b) => a + b, 0)}</p>
            </div>
            <div style={styles.gameBoard}>
                <div style={styles.header}>Fléchettes - Mode Standard</div>
                <div style={styles.playersRow}>
                    {players.map((player) => (
                        <div
                            key={player.id}
                            style={{
                                ...styles.player,
                                backgroundColor: player.id === currentPlayer ? '#4CAF50' : '#f0f0f0',
                                color: player.id === currentPlayer ? 'white' : 'black'
                            }}
                        >
                            {player.name} : {player.score}
                        </div>
                    ))}
                </div>
                <div style={styles.section}>Suggestions</div>
                <div style={styles.section}>Tour en cours : {currentTurn.join(' + ')}</div>
                <div style={styles.section}>
    Cibles possibles :
    {cible.map((num) => (
        <span
            key={num}
            style={{
                fontWeight: num === point ? 'bold' : 'normal',
                color: num === point ? 'red' : 'inherit',
                textDecoration: num === point ? 'underline' : 'none',
                margin: '0 2px'
            }}
        >
            {num}
        </span>
    ))}
</div>
                <div style={styles.section}>Coefficient</div>
                <div style={styles.section}>Tour suivant : Player {currentPlayer + 1}</div>
                <div style={styles.history}>
                    <h3>Historique des tours :</h3>
                    {turnsHistory.slice().reverse().map((turn, i) => (
                        <div key={i} style={styles.historyItem}>
                            {players[turn.player].name} : {turn.points.join(' + ')} = {turn.total}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        color: '#333',
        marginBottom: '20px',
    },
    throwButtons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '10px',
    },
    point: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '5px 0',
    },
    turn: {
        fontSize: '16px',
        margin: '5px 0',
    },
    gameBoard: {
        display: 'grid',
        width: '80vw',
        maxWidth: '600px',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr',
        gap: '5px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
        borderBottom: '1px solid #ddd',
        padding: '10px',
        fontWeight: 'bold',
    },
    playersRow: {
        display: 'flex',
        borderBottom: '1px solid #ddd',
    },
    player: {
        flex: 1,
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        borderRight: '1px solid #ddd',
    },
    section: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        borderBottom: '1px solid #ddd',
        backgroundColor: '#f9f9f9',
    },
    history: {
        padding: '10px',
        overflowY: 'auto',
        maxHeight: '200px',
    },
    historyItem: {
        padding: '5px',
        borderBottom: '1px solid #eee',
        fontSize: '14px',
    },
};

export default GamePageia;

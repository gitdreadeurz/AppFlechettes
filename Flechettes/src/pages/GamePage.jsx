import { useState } from "react";

const GamePage = ({config}) => {
    const [cible, setCible] = useState([0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50])
    const [point, setPoint] = useState()
    const [tour, setTour] = useState([])
    const [historiquePlayer1, setHistoriquePlayer1] = useState([])
    const [historiquePlayer2, setHistoriquePlayer2] = useState([])
    const [historiquePlayer3, setHistoriquePlayer3] = useState([])
    const [historiquePlayer4, setHistoriquePlayer4] = useState([])
    const [pointsPlayer1, setPointsPlayer1] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const totPlayer1 = historiquePlayer1.reduce((acc, valeur) => acc + valeur, 0);
    const totPlayer2 = historiquePlayer2.reduce((acc, valeur) => acc + valeur, 0);
    const totPlayer3 = historiquePlayer3.reduce((acc, valeur) => acc + valeur, 0);
    const totPlayer4 = historiquePlayer4.reduce((acc, valeur) => acc + valeur, 0);
    const totTour = tour.reduce((acc, val) => acc + val, 0);
    const tableauHistorique1 = pointsPlayer1.length>0?pointsPlayer1[pointsPlayer1.length - 1]:[]; 
    const tableauHistorique2 = pointsPlayer1[pointsPlayer1.length - 2];
    const tableauHistorique3 = pointsPlayer1[pointsPlayer1.length - 3];
    
    console.log(tableauHistorique1);
    
    return <>
        <button
            disabled={tour.length >= 3}
            onClick={() => {
                const index = Math.floor(Math.random() * cible.length)
                setPoint(cible[index])
                setTour([...tour, cible[index]])
            }}>Lancer la flèche</button>
        <p>{point}</p>

        <button
            onClick={() => {
                if (currentPlayer === 1) {
                    setHistoriquePlayer1([...historiquePlayer1, totTour])
                    setPointsPlayer1([...pointsPlayer1, [tour]])
                    setTour([])
                    setPoint("")
                    setCurrentPlayer(currentPlayer + 1)
                } else if (currentPlayer === 2) {
                    setHistoriquePlayer2([...historiquePlayer2, totTour])
                    setTour([])
                    setPoint("")
                    setCurrentPlayer(currentPlayer + 1)
                } else if (currentPlayer === 3) {
                    setHistoriquePlayer3([...historiquePlayer3, totTour])
                    setTour([])
                    setPoint("")
                    setCurrentPlayer(currentPlayer + 1)
                } else if (currentPlayer === 4) {
                    setHistoriquePlayer4([...historiquePlayer4, totTour])
                    setTour([])
                    setPoint("")
                    setCurrentPlayer(currentPlayer + 1)
                    setCurrentPlayer(1)
                }
            }
            }>Valider le tour</button >

        <div name="tableau"
            style={{
                display: "grid",
                width: "30vw",
                height: "90vh",
                gridTemplateRows: "1fr 2fr 2fr 2fr 5fr 1fr 1fr 2fr",
                justifyContent: "center",
                border: "solid black 1px"
            }}>
            <div name="ligne1"
                style={{
                    display: "flex",
                    border: "solid red 1px",
                    width: "30vw",
                    alignItems: "center",
                    justifyContent: "center"
                }}>{config.typeOfPart}</div>
            <div name="ligne2"
                style={{ display: "flex" }}>
                <div name="player1"
                    style={{
                        border: "solid green 1px",
                        width: "25%",
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>{config.firstPlayer}
                    <p>{totPlayer1}</p>
                </div>

                <div name="player2"
                    style={{
                        border: "solid green 1px",
                        width: "25%",
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>{config.secondPlayer}
                    <p>{totPlayer2}</p>
                </div>
                {config.playerQuantity >= 3 && (
                <div name="player3"
                    style={{
                        border: "solid green 1px",
                        width: "25%",
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>{config.thirdPlayer}
                    <p>{totPlayer3}</p></div>)}
                {config.playerQuantity >= 4 && (
                <div name="player4"
                    style={{
                        border: "solid green 1px",
                        width: "25%",
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>{config.fourthPlayer}
                    <p>{totPlayer4}</p></div>)}
            </div>
            <div name="ligne3"
                style={{
                    display: "flex",
                    border: "solid red 1px",
                    width: "30vw",
                    alignItems: "center",
                    justifyContent: "center"
                }}>Suggestions</div>
            <div name="ligne4"
                style={{
                    display: "grid",
                    gridTemplateColumns: 'repeat(4,1fr)',
                    gridTemplateRows: '1fr',
                    gap: '5px',
                    width: '100%',
                    justifyContent: 'center',
                    justifyItems: "center",
                    alignItems: "center",
                }}>
                {tour.map((num, index) => (
                    <div key={index}>{num}</div>))}
                <div>Score tour {totTour}</div>
            </div>
            <div name="ligne5"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6,1fr)',
                    gridTemplateRows: 'repeat(4,1fr)',
                    gap: '5px',
                    width: '100%',
                    justifyContent: 'center',
                    justifyItems: "center",
                    alignItems: "center",
                }}>
                {cible.map((num) => (
                    <span
                        key={num}
                        style={{
                            fontWeight: num === point ? 'bold' : 'normal',
                            color: num === point ? 'red' : 'inherit',
                            backgroundColor: num === point ? 'yellow' : 'inherit',
                        }}
                    >
                        {num}
                    </span>))}
            </div>
            <div name="ligne6"
                style={{
                    display: "flex",
                    border: "solid red 1px",
                    width: "30vw",
                    alignItems: "center",
                    justifyContent: "center"
                }}>coéficient</div>
            <div name="ligne7"
                style={{
                    display: "flex",
                    border: "solid red 1px",
                    width: "30vw",
                    alignItems: "center",
                    justifyContent: "center"
                }}>tour suivant</div>
            <div name="ligne8"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "solid red 1px",
                    width: "30vw",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <div>Historique Joueur : {currentPlayer}</div>
                <div>  {tableauHistorique1.join(" ")}</div>
                <div>  {tableauHistorique2}</div>
                <div>  {tableauHistorique3}</div>
            </div>
        </div>
    </>;
}

export default GamePage;
import { useState } from "react";

import ButtonCible from "./bouton";

const GamePage = () => {
    // const [cible, setCible] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50])
    const [cible, setCible] = useState(0)
    const [coef, setCoef] = useState(1)
    const points = coef * cible
    const [tour, setTour] = useState([])
    const [historiquePlayer1, setHistoriquePlayer1] = useState([])
    const [historiquePlayer2, setHistoriquePlayer2] = useState([])
    const [historiquePlayer3, setHistoriquePlayer3] = useState([])
    const [historiquePlayer4, setHistoriquePlayer4] = useState([])
    const [pointsPlayer1, setPointsPlayer1] = useState([])
    const [pointsPlayer2, setPointsPlayer2] = useState([])
    const [pointsPlayer3, setPointsPlayer3] = useState([])
    const [pointsPlayer4, setPointsPlayer4] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const totPlayer1 = historiquePlayer1.reduce((acc, valeur) => acc + valeur, 0);
    const totPlayer2 = historiquePlayer2.reduce((acc, valeur) => acc + valeur, 0);
    const totPlayer3 = historiquePlayer3.reduce((acc, valeur) => acc + valeur, 0);
    const totPlayer4 = historiquePlayer4.reduce((acc, valeur) => acc + valeur, 0);
    const totTour = tour.reduce((acc, val) => acc + val, 0);
    const tableauHistorique1P1 = pointsPlayer1.length > 0 ? pointsPlayer1[pointsPlayer1.length - 1] : [];
    const tableauHistorique2P1 = pointsPlayer1.length > 1 ? pointsPlayer1[pointsPlayer1.length - 2] : [];
    const tableauHistorique3P1 = pointsPlayer1.length > 2 ? pointsPlayer1[pointsPlayer1.length - 3] : [];
    const tableauHistorique1P2 = pointsPlayer2.length > 0 ? pointsPlayer2[pointsPlayer2.length - 1] : [];
    const tableauHistorique2P2 = pointsPlayer2.length > 1 ? pointsPlayer2[pointsPlayer2.length - 2] : [];
    const tableauHistorique3P2 = pointsPlayer2.length > 2 ? pointsPlayer2[pointsPlayer2.length - 3] : [];
    const tableauHistorique1P3 = pointsPlayer3.length > 0 ? pointsPlayer3[pointsPlayer3.length - 1] : [];
    const tableauHistorique2P3 = pointsPlayer3.length > 1 ? pointsPlayer3[pointsPlayer3.length - 2] : [];
    const tableauHistorique3P3 = pointsPlayer3.length > 2 ? pointsPlayer3[pointsPlayer3.length - 3] : [];
    const tableauHistorique1P4 = pointsPlayer4.length > 0 ? pointsPlayer4[pointsPlayer4.length - 1] : [];
    const tableauHistorique2P4 = pointsPlayer4.length > 1 ? pointsPlayer4[pointsPlayer4.length - 2] : [];
    const tableauHistorique3P4 = pointsPlayer4.length > 2 ? pointsPlayer4[pointsPlayer4.length - 3] : [];
    const gameMode = 301
    const nbplayer = 4

    function suggestion() {
        if ((gameMode - totPlayer1) < 170) {
            totPlayer1
        }
    }

    return <>
        <button
            disabled={tour.length >= 3}
            onClick={() => {

                // const index = Math.floor(Math.random() * cible.length)
                // setPoint(cible[index])
                setTour([...tour, points])
            }}>Valider la flèche</button>
        <p>{points}</p>

        <button
            onClick={() => {
                if (currentPlayer === 1) {
                    setHistoriquePlayer1([...historiquePlayer1, totTour])
                    setPointsPlayer1([...pointsPlayer1, [tour]])
                    setTour([])
                    setCible(0)
                    setCurrentPlayer(currentPlayer + 1)
                } else if (currentPlayer === 2) {
                    setHistoriquePlayer2([...historiquePlayer2, totTour])
                    setPointsPlayer2([...pointsPlayer2, [tour]])
                    setTour([])
                    setCible(0)
                    setCurrentPlayer(currentPlayer + 1)
                } else if (currentPlayer === 3 && !nbplayer <3) {
                    setHistoriquePlayer3([...historiquePlayer3, totTour])
                    setPointsPlayer3([...pointsPlayer3, [tour]])
                    setTour([])
                    setCible(0)
                    setCurrentPlayer(currentPlayer + 1)
                } else if (currentPlayer === 4) {
                    setHistoriquePlayer4([...historiquePlayer4, totTour])
                    setPointsPlayer4([...pointsPlayer4, [tour]])
                    setTour([])
                    setCible(0)
                    setCurrentPlayer(currentPlayer + 1)
                    setCurrentPlayer(1)
                } else {
                    setTour([])
                    setCible(0)
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
                }}>TITRE</div>

            <div name="ligne2"
                style={{ display: "flex" }}>

                <div name="player1"
                    style={{
                        border: "solid green 1px",
                        width: `${100 / nbplayer}%`,
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>Player 1
                    <p>{totPlayer1}</p>
                </div>

                <div name="player2"
                    style={{
                        border: "solid green 1px",
                        width: `${100 / nbplayer}%`,
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>Player 2
                    <p>{totPlayer2}</p>
                </div>








                {nbplayer >= 3 && (
                    <div name="player3"
                        style={{
                            border: "solid green 1px",
                            width: `${100 / nbplayer}%`,
                            height: "100%",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",

                            flexDirection: "column"
                        }}>player3
                        <p>{totPlayer3}</p>
                    </div>)}
                {nbplayer >= 4 && (
                    <div name="player4"
                        style={{
                            border: "solid green 1px",
                            width: `${100 / nbplayer}%`,
                            height: "100%",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",

                            flexDirection: "column"
                        }}>player4
                        <p>{totPlayer3}</p>
                    </div>)}












                {/* <div name="player3"
                    style={{
                        border: "solid green 1px",
                        width: "25%",
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>Player 3
                    <p>{totPlayer3}</p></div>
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
                    }}>Player 4<p>{totPlayer4}</p></div> */}
            </div>
            <div name="ligne3"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "solid red 1px",
                    width: "30vw",
                    alignItems: "center",
                    justifyContent: "center"
                }}>Suggestions
                <p> {suggestion()}
                </p>
            </div>

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
                <ButtonCible chiffre={0} setCible={setCible} />
                <ButtonCible chiffre={1} setCible={setCible} />
                <ButtonCible chiffre={2} setCible={setCible} />
                <ButtonCible chiffre={3} setCible={setCible} />
                <ButtonCible chiffre={4} setCible={setCible} />
                <ButtonCible chiffre={5} setCible={setCible} />
                <ButtonCible chiffre={6} setCible={setCible} />
                <ButtonCible chiffre={7} setCible={setCible} />
                <ButtonCible chiffre={8} setCible={setCible} />
                <ButtonCible chiffre={9} setCible={setCible} />
                <ButtonCible chiffre={10} setCible={setCible} />
                <ButtonCible chiffre={11} setCible={setCible} />
                <ButtonCible chiffre={12} setCible={setCible} />
                <ButtonCible chiffre={13} setCible={setCible} />
                <ButtonCible chiffre={14} setCible={setCible} />
                <ButtonCible chiffre={15} setCible={setCible} />
                <ButtonCible chiffre={16} setCible={setCible} />
                <ButtonCible chiffre={17} setCible={setCible} />
                <ButtonCible chiffre={18} setCible={setCible} />
                <ButtonCible chiffre={19} setCible={setCible} />
                <ButtonCible chiffre={20} setCible={setCible} />
                <ButtonCible chiffre={25} setCible={setCible} />
                <ButtonCible chiffre={50} setCible={setCible} />

                {/* {cible.map((num) => (
                    <span
                        key={num}
                        style={{
                            fontWeight: num === point ? 'bold' : 'normal',
                            color: num === point ? 'red' : 'inherit',
                            backgroundColor: num === point ? 'yellow' : 'inherit',
                        }}
                    >
                        {num}
                    </span>))} */}
            </div>
            <div name="ligne6"
                style={{
                    display: "flex",
                    border: "solid red 1px",
                    width: "30vw",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px"
                }}>
                coéficient
                <button onClick={() => { setCoef(1) }}>Simple</button>
                <button onClick={() => { setCoef(2) }}>Double</button>
                <button onClick={() => { setCoef(3) }}>Triple</button>
            </div>
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
                {currentPlayer === 1 && (<>
                    <div>  {tableauHistorique1P1.join(" ")}</div>
                    <div>  {tableauHistorique2P1.join(" ")}</div>
                    <div>  {tableauHistorique3P1.join(" ")}</div>
                </>
                )}
                {currentPlayer === 2 && (<>
                    <div>  {tableauHistorique1P2.join(" ")}</div>
                    <div>  {tableauHistorique2P2.join(" ")}</div>
                    <div>  {tableauHistorique3P2.join(" ")}</div>
                </>
                )}
                {currentPlayer === 3 && (<>
                    <div>  {tableauHistorique1P3.join(" ")}</div>
                    <div>  {tableauHistorique2P3.join(" ")}</div>
                    <div>  {tableauHistorique3P3.join(" ")}</div>
                </>
                )}
                {currentPlayer === 4 && (<>
                    <div>  {tableauHistorique1P4.join(" ")}</div>
                    <div>  {tableauHistorique2P4.join(" ")}</div>
                    <div>  {tableauHistorique3P4.join(" ")}</div>
                </>
                )}
            </div>
        </div >
    </>;
}

export default GamePage;
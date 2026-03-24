import { useState } from "react";

import ButtonCible from "./bouton";

const GamePage = ({ config }) => {
    const [cible, setCible] = useState(null)
    const [coef, setCoef] = useState(null)
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
    const typeDePartie = config.typeOfPart
    const totalPlayer1 = typeDePartie - totPlayer1 ;
    const totalPlayer2 = typeDePartie - totPlayer2 ;
    const totalPlayer3 = typeDePartie - totPlayer3 ;
    const totalPlayer4 = typeDePartie - totPlayer4 ;
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

    

    // function suggestion() {
    //     if ((gameMode - totPlayer1) < 170) {
    //         totPlayer1
    //     }
    // }

    return <>
    
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
                        width: `${100 / config.playerQuantity}%`,
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>{config.firstPlayer}
                    <p>{totalPlayer1}</p>
                </div>
                <div name="player2"
                    style={{
                        border: "solid green 1px",
                        width: `${100 / config.playerQuantity}%`,
                        height: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column"
                    }}>{config.secondPlayer}
                    <p>{totalPlayer2}</p>
                </div>
                {config.playerQuantity >= 3 && (
                    <div name="player3"
                        style={{
                            border: "solid green 1px",
                            width: `${100 / config.playerQuantity}%`,
                            height: "100%",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",

                            flexDirection: "column"
                        }}>{config.thirdPlayer}
                        <p>{totalPlayer3}</p>
                    </div>)}
                {config.playerQuantity >= 4 && (
                    <div name="player4"
                        style={{
                            border: "solid green 1px",
                            width: `${100 / config.playerQuantity}%`,
                            height: "100%",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",

                            flexDirection: "column"
                        }}>{config.fourthPlayer}
                        <p>{totalPlayer4}</p>
                    </div>)}
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
                <ButtonCible chiffre={0} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={1} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={2} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={3} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={4} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={5} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={6} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={7} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={8} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={9} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={10} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={11} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={12} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={13} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={14} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={15} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={16} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={17} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={18} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={19} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={20} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={25} cible={cible} setCible={setCible} />
                <ButtonCible chiffre={50} cible={cible} setCible={setCible} />
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
                <button style={{ backgroundColor: coef === 1 ? "green" : "red" }} onClick={() => { setCoef(1) }} disabled={cible === null}>Simple</button>
                <button style={{ backgroundColor: coef === 2 ? "green" : "red" }} onClick={() => { setCoef(2) }} disabled={cible === null || cible === 25 || cible === 50}>Double</button>
                <button style={{ backgroundColor: coef === 3 ? "green" : "red" }} onClick={() => { setCoef(3) }} disabled={cible === null || cible === 25 || cible === 50}>Triple</button>
            </div>
            <div name="ligne7"
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    border: "solid red 1px",
                    width: "30vw",



                }}>
                <button
                    disabled={tour.length >= 3}
                    onClick={() => {
                        setTour([...tour, points])
                    }}>Valider la flèche</button>
                <button
                    onClick={() => {
                        if (currentPlayer === 1) {
                            setHistoriquePlayer1([...historiquePlayer1, totTour])
                            setPointsPlayer1([...pointsPlayer1, [tour]])
                            setTour([])
                            setCible(0)
                            setCurrentPlayer(currentPlayer + 1)
                        }
                        if (currentPlayer === 2) {
                            setHistoriquePlayer2([...historiquePlayer2, totTour])
                            setPointsPlayer2([...pointsPlayer2, [tour]])
                            setTour([])
                            setCible(0)
                            if (config.playerQuantity === "2") {
                                setCurrentPlayer(1)
                            } else {
                                setCurrentPlayer(currentPlayer + 1)
                            }
                        }
                        if (currentPlayer === 3) {
                            setHistoriquePlayer3([...historiquePlayer3, totTour])
                            setPointsPlayer3([...pointsPlayer3, [tour]])
                            setTour([])
                            setCible(0)
                            if (config.playerQuantity === "3") {
                                setCurrentPlayer(1)
                            } else {
                                setCurrentPlayer(currentPlayer + 1)
                            }
                        }
                        if (currentPlayer === 4) {
                            setHistoriquePlayer4([...historiquePlayer4, totTour])
                            setPointsPlayer4([...pointsPlayer4, [tour]])
                            setTour([])
                            setCible(0)
                            if (config.playerQuantity === "4") {
                                setCurrentPlayer(1)
                            } else {
                                setCurrentPlayer(currentPlayer + 1)
                            }
                        }
                    }
                    }>Valider le tour</button >
                <p>{points}</p>
            </div>
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
import { useState, useEffect } from "react";
import CheckoutDouble from "./CheckoutDouble.json";
import CheckoutSimple from "./CheckoutSimple.json";
import ButtonCible from "./bouton";
import './GamePage.css';


const GamePage = ({ config, handleEndGame }) => {
    const [cible, setCible] = useState(null)
    const [coef, setCoef] = useState(1)
    const [histoCoef, setHistoCoef] = useState([])
    const points = coef * cible
    const [tour, setTour] = useState([])
    const [historiquePlayer1, setHistoriquePlayer1] = useState([])
    const [historiquePlayer2, setHistoriquePlayer2] = useState([])
    const [historiquePlayer3, setHistoriquePlayer3] = useState([])
    const [historiquePlayer4, setHistoriquePlayer4] = useState([])
    const [histoTourP1, setHistoTourP1] = useState([])
    const [histoTourP2, setHistoTourP2] = useState([])
    const [histoTourP3, setHistoTourP3] = useState([])
    const [histoTourP4, setHistoTourP4] = useState([])
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
    const typeSortie = config.typeOfSort
    const totalPlayer1 = typeDePartie - totPlayer1;
    useEffect(() => {
        if (totalPlayer1 === 0) {
            setHistoTourP1([...histoTourP1,tour])
            handleEndGame({
                HistoJoueur1: [...histoTourP1,totTour],
                HistoJoueur2: historiquePlayer2,
                HistoJoueur3: historiquePlayer3,
                HistoJoueur4: historiquePlayer4,
                Joueur1: config.firstPlayer,
                Joueur2: config.secondPlayer,
                Joueur3: config.thirdPlayer,
                Joueur4: config.fourthPlayer,
                Gagnant: config.firstPlayer
            });
        }
        if (totalPlayer1 < 0) {
            alert(config.firstPlayer + " a un score trop élevé")
            setHistoriquePlayer1(historiquePlayer1.slice(0, -1))
            setTour([])
            setCible(0)
        }
    }, [totalPlayer1, coef])
    const totalPlayer2 = typeDePartie - totPlayer2;
    useEffect(() => {
        if (totalPlayer2 === 0) {
            handleEndGame({
                HistoJoueur1: historiquePlayer1,
                HistoJoueur2: historiquePlayer2,
                HistoJoueur3: historiquePlayer3,
                HistoJoueur4: historiquePlayer4,
                Joueur1: config.firstPlayer,
                Joueur2: config.secondPlayer,
                Joueur3: config.thirdPlayer,
                Joueur4: config.fourthPlayer,
                Gagnant: config.secondPlayer
            });
        }
        if (totalPlayer2 < 0) {
            alert(config.secondPlayer + " a un score trop élevé")
            setHistoriquePlayer2(historiquePlayer2.slice(0, -1))
            setTour([])
            setCible(0)
        }
    }, [totalPlayer2])
    const totalPlayer3 = typeDePartie - totPlayer3;
    useEffect(() => {
        if (totalPlayer3 === 0) {
            handleEndGame({
                HistoJoueur1: historiquePlayer1,
                HistoJoueur2: historiquePlayer2,
                HistoJoueur3: historiquePlayer3,
                HistoJoueur4: historiquePlayer4,
                Joueur1: config.firstPlayer,
                Joueur2: config.secondPlayer,
                Joueur3: config.thirdPlayer,
                Joueur4: config.fourthPlayer,
                Gagnant: config.thirdPlayer
            });
        }
        if (totalPlayer3 < 0) {
            alert(config.thirdPlayer + " a un score trop élevé")
            setHistoriquePlayer3(historiquePlayer3.slice(0, -1))
            setTour([])
            setCible(0)
        }
    }, [totalPlayer3])
    const totalPlayer4 = typeDePartie - totPlayer4;
    useEffect(() => {
        if (totalPlayer4 === 0) {
            handleEndGame({
                HistoJoueur1: historiquePlayer1,
                HistoJoueur2: historiquePlayer2,
                HistoJoueur3: historiquePlayer3,
                HistoJoueur4: historiquePlayer4,
                Joueur1: config.firstPlayer,
                Joueur2: config.secondPlayer,
                Joueur3: config.thirdPlayer,
                Joueur4: config.fourthPlayer,
                Gagnant: config.fourthPlayer
            });
        }
        if (totalPlayer4 < 0) {
            alert(config.fourthPlayer + " a un score trop élevé")
            setHistoriquePlayer4(historiquePlayer4.slice(0, -1))
            setTour([])
            setCible(0)
        }
    }, [totalPlayer4])
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
    const getCheckoutDouble = (score) => {
        return CheckoutDouble[score] || null;
    };
    const getCheckoutSimple = (score) => {
        return CheckoutSimple[score] || null;
    };
    const totalCurrentPlayer = currentPlayer === 1 ? totalPlayer1 :
        currentPlayer === 2 ? totalPlayer2 :
            currentPlayer === 3 ? totalPlayer3 :
                totalPlayer4;


    return <>

        <div name="tableau">
            <div name="ligne1"
            >{config.typeOfPart} Sortie {config.typeOfSort}</div>
            <div name="ligne2"
            >
                <div name="player1" data-current={currentPlayer === 1 ? "true" : "false"}
                >{config.firstPlayer}
                    <p>{totalPlayer1}</p>
                </div>
                <div name="player2" data-current={currentPlayer === 2 ? "true" : "false"}
                >{config.secondPlayer}
                    <p>{totalPlayer2}</p>
                </div>
                {config.playerQuantity >= 3 && (
                    <div name="player3" data-current={currentPlayer === 3 ? "true" : "false"}
                    >{config.thirdPlayer}
                        <p>{totalPlayer3}</p>
                    </div>)}
                {config.playerQuantity >= 4 && (
                    <div name="player4" data-current={currentPlayer === 4 ? "true" : "false"}
                    >{config.fourthPlayer}
                        <p>{totalPlayer4}</p>
                    </div>)}
            </div>
            <div name="ligne3">Suggestions {(currentPlayer === 1 && typeSortie === "Double") ?
                getCheckoutDouble(totalPlayer1) :
                (currentPlayer === 2 && typeSortie === "Double") ?
                    getCheckoutDouble(totalPlayer2) :
                    (currentPlayer === 3 && typeSortie === "Double") ?
                        getCheckoutDouble(totalPlayer3) :
                        (currentPlayer === 4 && typeSortie === "Double") ?
                            getCheckoutDouble(totalPlayer4) :
                            (currentPlayer === 1 && typeSortie === "simple") ?
                                getCheckoutSimple(totalPlayer1) :
                                (currentPlayer === 2 && typeSortie === "simple") ?
                                    getCheckoutSimple(totalPlayer2) :
                                    (currentPlayer === 3 && typeSortie === "simple") ?
                                        getCheckoutSimple(totalPlayer3) :
                                        (currentPlayer === 4 && typeSortie === "simple") ?
                                            getCheckoutSimple(totalPlayer4) : "fini"}
            </div>
            <div name="ligne4"
            >
                {tour.map((num, index) => (
                    <div key={index}>{num}</div>))}
                <div>Score tour {totTour}</div>
            </div>
            <div name="ligne5"
            >
                <ButtonCible chiffre={0} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={1} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={2} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={3} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={4} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={5} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={6} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={7} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={8} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={9} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={10} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={11} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={12} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={13} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={14} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={15} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={16} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={17} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={18} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={19} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={20} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={25} cible={cible} setCible={setCible} setCoef={setCoef} />
                <ButtonCible chiffre={50} cible={cible} setCible={setCible} setCoef={setCoef} />
            </div>
            <div name="ligne6"
            >
                <button style={{ backgroundColor: coef === 1 ? "green" : "red" }} onClick={() => { setCoef(1) }} disabled={cible === null}>Simple</button>
                <button style={{ backgroundColor: coef === 2 ? "green" : "red" }} onClick={() => { setCoef(2) }} disabled={cible === null || cible === 25 || cible === 50}>Double</button>
                <button style={{ backgroundColor: coef === 3 ? "green" : "red" }} onClick={() => { setCoef(3) }} disabled={cible === null || cible === 25 || cible === 50}>Triple</button>
            </div>
            <div name="ligne7"
            >
                <button
                    disabled={tour.length >= 3 || cible === null}
                    onClick={() => {
                        setTour([...tour, points])
                        setCible(null)
                        if ((totalCurrentPlayer - points === 0 && config.typeOfSort === "Double" && coef != 2)) {
                            alert("Vous devez terminer avec un double!")
                            setTour([])
                            setCible(0)
                            if (config.playerQuantity == currentPlayer) {
                                setCurrentPlayer(1)
                            } else {
                                setCurrentPlayer(currentPlayer + 1)
                            }
                            return
                        }
                        if (currentPlayer === 1) {
                            setHistoriquePlayer1([...historiquePlayer1, points])
                        }
                        if (currentPlayer === 2) {
                            setHistoriquePlayer2([...historiquePlayer2, points])
                        }
                        if (currentPlayer === 3) {
                            setHistoriquePlayer3([...historiquePlayer3, points])
                        }
                        if (currentPlayer === 4) {
                            setHistoriquePlayer4([...historiquePlayer4, points])
                        }
                        console.log(histoCoef); 
                    }}>Valider la flèche</button>
                <button
                    disabled={tour.length < 3}
                    onClick={() => {
                        // if ((totalCurrentPlayer - totTour === 0 && config.typeOfSort === "Double" && histoCoef.slice(-1)[0] != 2)) {
                        //     alert("Vous devez terminer avec un double!")
                        //     setTour([])
                        //     setCible(0)
                        //     if (config.playerQuantity == currentPlayer) {
                        //         setCurrentPlayer(1)
                        //     } else {
                        //         setCurrentPlayer(currentPlayer + 1)
                        //     }
                        //     return
                        // }
                        if (currentPlayer === 1) {
                            setHistoTourP1([...histoTourP1, totTour])
                            setPointsPlayer1([...pointsPlayer1, [tour]])
                            setTour([])
                            setHistoCoef([])
                            setCible(0)
                            setCurrentPlayer(currentPlayer + 1)
                        }
                        if (currentPlayer === 2) {
                            setHistoTourP2([...histoTourP2, totTour])
                            setPointsPlayer2([...pointsPlayer2, [tour]])
                            setTour([])
                            setHistoCoef([])
                            setCible(0)
                            if (config.playerQuantity === "2") {
                                setCurrentPlayer(1)
                            } else {
                                setCurrentPlayer(currentPlayer + 1)
                            }
                        }
                        if (currentPlayer === 3) {
                            setHistoTourP3([...histoTourP3, totTour])
                            setPointsPlayer3([...pointsPlayer3, [tour]])
                            setTour([])
                            setHistoCoef([])
                            setCible(0)
                            if (config.playerQuantity === "3") {
                                setCurrentPlayer(1)
                            } else {
                                setCurrentPlayer(currentPlayer + 1)
                            }
                        }
                        if (currentPlayer === 4) {
                            setHistoTourP4([...histoTourP4, totTour])
                            setPointsPlayer4([...pointsPlayer4, [tour]])
                            setTour([])
                            setHistoCoef([])
                            setCible(0)
                            if (config.playerQuantity === "4") {
                                setCurrentPlayer(1)
                            } else {
                                setCurrentPlayer(currentPlayer + 1)
                            }
                        }
                    }
                    }>Valider le tour</button >
                <button
                    onClick={() => { tour.pop(); let newArray = [...tour]; setTour(newArray) }}>Annuler precedente flêche</button>


            </div>
            <div name="points" >{points}</div>
            <div name="ligne8"
            >
                <div>Historique {currentPlayer === 1 ? config.firstPlayer : currentPlayer === 2 ? config.secondPlayer : currentPlayer === 3 ? config.thirdPlayer : currentPlayer === 4 ? config.fourthPlayer : ""}</div>
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
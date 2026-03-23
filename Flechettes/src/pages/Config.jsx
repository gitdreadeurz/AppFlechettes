import { useEffect, useState } from "react";
import configWallpaper from "../assets/configWall.jpg";

const Config = () => {
    const [firstPlayer, setFirstPlayer] = useState("Joueur 1");
    const [secondPlayer, setSecondPlayer] = useState("Joueur 2");
    const [thirdPlayer, setThirdPlayer] = useState("Joueur 3");
    const [fourthPlayer, setFourthPlayer] = useState("Joueur 4");
    const [playerCount, setPlayerCount] = useState(2);
    const [typeOfSort, setTypeOfSort] = useState("");
    const [gameConfig, setGameConfig] = useState([]);

    
    

    const PlayersNameTrue = () => {
        if (playerCount >= 1 && firstPlayer.trim() === "") return false;
        if (playerCount >= 2 && secondPlayer.trim() === "") return false;
        if (playerCount >= 3 && thirdPlayer.trim() === "") return false;
        if (playerCount >= 4 && fourthPlayer.trim() === "") return false;
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();    
        const form = event.target;
        const formData = new FormData(form);
        const formDataObj = Object.fromEntries(formData.entries());


        setGameConfig(formDataObj)  
    }
    
    console.log(gameConfig);
    
    
    return (
        <>
            <div
                className="config-container"
            >
                <form onSubmit={handleSubmit}
                    className="config-form"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        padding: "30px",
                        borderRadius: "12px",
                        width: "100%",
                        maxWidth: "450px",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Configuration de la partie</h2>
                    <label htmlFor="playerQuantity" >
                        Nombre de joueurs
                        <select
                            name="playerQuantity"
                            value={playerCount}
                            onChange={(e) => setPlayerCount(parseInt(e.target.value))}
                            style={{ padding: "8px", borderRadius: "4px" }}
                        >
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </label>

                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "15px 0" }}>
                        <input
                            name="firstPlayer"
                            type="text"
                            value={firstPlayer}
                            onChange={(e) => setFirstPlayer(e.target.value)}
                            placeholder="Nom du Joueur 1"
                            style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                        />
                        <input
                            name="secondPlayer"
                            type="text"
                            value={secondPlayer}
                            onChange={(e) => setSecondPlayer(e.target.value)}
                            placeholder="Nom du Joueur 2"
                            style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                        />
                        {playerCount >= 3 && (
                            <input
                                name="thirdPlayer"
                                type="text"
                                value={thirdPlayer}
                                onChange={(e) => setThirdPlayer(e.target.value)}
                                placeholder="Nom du Joueur 3"
                                style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                            />
                        )}
                        {playerCount >= 4 && (
                            <input
                                name="fourthPlayer"
                                type="text"
                                value={fourthPlayer}
                                onChange={(e) => setFourthPlayer(e.target.value)}
                                placeholder="Nom du Joueur 4"
                                style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                            />
                        )}
                    </div>

                    <label htmlFor="" style={{ marginBottom: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        Type de partie
                        <select 
                                name="typeOfPart"
                                style={{ padding: "8px", borderRadius: "4px" }}>
                            <option value={301}>301</option>
                            <option selected value={501}>501</option>
                            <option value={701}>701</option>
                        </select>
                    </label>

                    <label htmlFor="" style={{ marginBottom: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        Type de sortie
                        <select name="typeOfSort" style={{ padding: "8px", borderRadius: "4px" }} value={typeOfSort} 
                        onChange={(e) => setTypeOfSort(e.target.value)}>
                            <option value={"simple"}>Simple</option>
                            <option selected value={"double"}>Double</option>
                        </select>
                    </label>

                    {PlayersNameTrue() && (
                        <input
                            type="submit"
                            value="Lancez la partie !"
                            style={{
                                marginTop: "20px",
                                padding: "12px",
                                backgroundColor: "#409eff",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                fontSize: "1rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                width: "100%",
                            }}
                        />
                    )}
                </form>
            </div>
        </>
    );
};

export default Config;

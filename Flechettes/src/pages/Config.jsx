import { useState } from "react";


/**
 * Composant de configuration de la partie.
 * Permet de choisir le nombre de joueurs, leurs noms,
 * le type de partie (301/501/701) et le type de sortie.
 *
 * @param {Function} setGameConfig - Callback appelé avec les données du formulaire
 *                                   pour démarrer la partie dans App.jsx
 */
const Config = ({ setGameConfig }) => {
    // États pour les noms des joueurs (valeurs par défaut pré-remplies)
    const [firstPlayer, setFirstPlayer]   = useState("Joueur 1");
    const [secondPlayer, setSecondPlayer] = useState("Joueur 2");
    const [thirdPlayer, setThirdPlayer]   = useState("Joueur 3");
    const [fourthPlayer, setFourthPlayer] = useState("Joueur 4");

    // Nombre de joueurs sélectionné (2 par défaut)
    const [playerCount, setPlayerCount] = useState(2);

    // Type de sortie sélectionné ("simple" ou "double") — état déclaré mais
    // pourrait être retiré car la valeur est déjà lue via FormData dans handleSubmit
    const [typeOfSort, setTypeOfSort] = useState("");

    /**
     * Vérifie que tous les champs de noms de joueurs actifs sont remplis.
     * Utilisé pour afficher/masquer le bouton de soumission.
     * @returns {boolean} true si tous les noms requis sont non vides
     */
    const PlayersNameTrue = () => {
        if (playerCount >= 1 && firstPlayer.trim() === "") return false;
        if (playerCount >= 2 && secondPlayer.trim() === "") return false;
        if (playerCount >= 3 && thirdPlayer.trim() === "") return false;
        if (playerCount >= 4 && fourthPlayer.trim() === "") return false;
        return true;
    };

    /**
     * Gestionnaire de soumission du formulaire.
     * Récupère toutes les valeurs via FormData et les transmet au composant parent.
     * @param {React.FormEvent} event - L'événement de soumission du formulaire
     */
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page
        const form = event.target;
        const formData = new FormData(form);
        // Convertit les entrées du formulaire en objet clé/valeur simple
        const formDataObj = Object.fromEntries(formData.entries());

        console.log(formDataObj);
        setGameConfig(formDataObj); // Déclenche la navigation vers l'écran de jeu
    };

    

    return (
        <>
            <div className="config-container">
                <form
                    onSubmit={handleSubmit}
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
                    <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
                        Configuration de la partie
                    </h2>

                    {/* Sélecteur du nombre de joueurs (2 à 4) */}
                    <label style={{color : "black"}} htmlFor="playerQuantity">
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

                    {/* Champs de saisie des noms — les joueurs 3 et 4 s'affichent
                        conditionnellement selon le nombre de joueurs choisi */}
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
                        {/* Joueur 3 : visible uniquement si playerCount >= 3 */}
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
                        {/* Joueur 4 : visible uniquement si playerCount >= 4 */}
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

                    {/* Sélecteur du type de partie : score de départ (301, 501, 701) */}
                    <label style={{ color :"black",marginBottom: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        Type de partie
                        <select name="typeOfPart" style={{ padding: "8px", borderRadius: "4px" }}>
                            <option value={301}>301</option>
                            <option defaultValue={501}>501</option>
                            <option value={701}>701</option>
                        </select>
                    </label>

                    {/* Sélecteur du type de sortie : simple ou double */}
                    <label style={{ color :"black",marginBottom: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        Type de sortie
                        <select
                            name="typeOfSort"
                            style={{ padding: "8px", borderRadius: "4px" }}
                            value={typeOfSort}
                            onChange={(e) => setTypeOfSort(e.target.value)}
                        >
                            <option value={"simple"}>Simple</option>
                            <option defaultValue={"double"}>Double</option>
                        </select>
                    </label>

                    {/* Bouton de soumission : affiché uniquement si tous les noms sont remplis */}
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
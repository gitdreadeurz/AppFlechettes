const ButtonCible = ({ chiffre, setCible, cible }) => {

    return (
        <button
            style={{
                backgroundColor: cible === chiffre ? "orange" : "white",
                color: cible === chiffre ? "white" : "black",
                borderRadius: "10px",
                width: "40px",
                height: "40px",
            }}
            onClick={() => setCible(chiffre)}
        >
            {chiffre}
        </button>
    );
};

export default ButtonCible;
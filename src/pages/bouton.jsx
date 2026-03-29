const ButtonCible = ({ chiffre, setCible, cible, setCoef }) => {

    return (
        <button
            style={{
                backgroundColor: cible === chiffre ? "orange" : "white",
                color: cible === chiffre ? "white" : "black",
                borderRadius: "10px",
                width: "40px",
                height: "40px",
            }}
            onClick={() => {setCible(chiffre);setCoef(1)}}
        >
            {chiffre}
        </button>
    );
};

export default ButtonCible;
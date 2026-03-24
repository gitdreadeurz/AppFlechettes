const ButtonCible = ({ chiffre, setCible }) => {
    
    return (
        <button
            style={{
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
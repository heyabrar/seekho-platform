import ErrorSVG from "../Icons/ErrorSVG";

const Error = () => {
    return (
        <div className="loader-error-overlay">
            <ErrorSVG />
            <div className="loading-error-text">
                Looks like something really went wrong!!
            </div>
            <button
                style={{
                    padding: "10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginTop: "30px",
                    fontSize: "18px",
                }}
                onClick={() => window.location.reload()}
            >
                Reload
            </button>
        </div>
    );
};

export default Error;

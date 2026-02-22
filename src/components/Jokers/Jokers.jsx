import { useState } from "react";
import styles from "./Jokers.module.css";

const Jokers = ({ skipQuestion, halfQuestion }) => {
    const [skipUsed, setSkipUsed] = useState(false);
    const [halfUsed, setHalfUsed] = useState(false);

    const handleSkip = () => {
        skipQuestion();
        setSkipUsed(true);
    };

    const handleHalf = () => {
        halfQuestion();
        setHalfUsed(true);
    };

    return (
        <div className={styles.container}>
            <button
                onClick={() => {
                    handleSkip();
                }}
                style={{
                    backgroundColor: skipUsed ? "#222831" : "",
                    borderColor: skipUsed ? "#393E46" : "",
                    color: skipUsed ? "#393E46" : "",
                    cursor: skipUsed ? "default" : "pointer",
                }}
                disabled={skipUsed}
                className={styles.button}
            >
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button
                onClick={() => {
                    handleHalf();
                }}
                style={{
                    backgroundColor: halfUsed ? "#222831" : "",
                    borderColor: halfUsed ? "#393E46" : "",
                    color: halfUsed ? "#393E46" : "",
                    cursor: halfUsed ? "default" : "pointer",
                }}
                disabled={halfUsed}
                className={styles.button}
            >
                <i className="fa-solid fa-circle-half-stroke"></i>
            </button>
        </div>
    );
};

export default Jokers;

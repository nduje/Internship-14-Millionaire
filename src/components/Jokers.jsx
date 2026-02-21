import { useState } from "react";

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
        <div>
            <button
                onClick={() => {
                    handleSkip();
                }}
                style={{
                    backgroundColor: skipUsed ? "gray" : "",
                    cursor: skipUsed ? "default" : "pointer",
                }}
                disabled={skipUsed}
            >
                Skip
            </button>
            <button
                onClick={() => {
                    handleHalf();
                }}
                style={{
                    backgroundColor: halfUsed ? "gray" : "",
                    cursor: halfUsed ? "default" : "pointer",
                }}
                disabled={halfUsed}
            >
                50:50
            </button>
        </div>
    );
};

export default Jokers;

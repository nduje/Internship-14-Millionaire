import { useState } from "react";
import Jokers from "./Jokers";
import Questions from "./Questions";
import Sidebar from "./Sidebar";

const Game = ({ onFinish, resetKey }) => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [isSkipped, setIsSkipped] = useState(false);
    const [isHalfed, setIsHalfed] = useState(false);

    return (
        <>
            <h1>Game</h1>
            <Jokers
                skipQuestion={() => setIsSkipped(true)}
                halfQuestion={() => setIsHalfed(true)}
            />
            <Questions
                incrementLevel={() => setCurrentLevel((prev) => prev + 1)}
                isSkipped={isSkipped}
                isHalfed={isHalfed}
                resetKey={resetKey}
            />
            <Sidebar currentLevel={currentLevel} />
            <div onClick={onFinish}>Finish Game</div>
        </>
    );
};

export default Game;

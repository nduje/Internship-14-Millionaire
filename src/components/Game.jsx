import { useState } from "react";
import Jokers from "./Jokers";
import Questions from "./Questions";
import Sidebar from "./Sidebar";

const Game = ({ onFinish }) => {
    const [currentLevel, setCurrentLevel] = useState(1);

    return (
        <>
            <h1>Game</h1>
            <Jokers />
            <Questions
                incrementLevel={() => setCurrentLevel((prev) => prev + 1)}
            />
            <Sidebar currentLevel={currentLevel} />
            <div onClick={onFinish}>Finish Game</div>
        </>
    );
};

export default Game;

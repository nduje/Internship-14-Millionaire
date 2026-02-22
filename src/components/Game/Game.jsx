import { useState } from "react";
import Jokers from "../Jokers/Jokers";
import Questions from "../Questions/Questions";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Game.module.css";

const Game = ({ onFinish, resetKey }) => {
    const [currentLevel, setCurrentLevel] = useState(1);
    const [isSkipped, setIsSkipped] = useState(false);
    const [isHalfed, setIsHalfed] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.jokers}>
                <Jokers
                    skipQuestion={() => setIsSkipped(true)}
                    halfQuestion={() => setIsHalfed(true)}
                />
            </div>
            <div className={styles.sidebar}>
                <Sidebar currentLevel={currentLevel} />
            </div>
            <div className={styles.questions}>
                <Questions
                    setCurrentLevel={setCurrentLevel}
                    isSkipped={isSkipped}
                    isHalfed={isHalfed}
                    resetKey={resetKey}
                />
            </div>
        </div>
    );
};

export default Game;

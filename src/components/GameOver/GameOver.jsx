import { useState, useEffect, use } from "react";
import styles from "./GameOver.module.css";

const GameOver = ({ onStart, onRestart, score, winner }) => {
    const [showWinnerScreen, setShowWinnerScreen] = useState(false);
    const [showFinalScreen, setShowFinalScreen] = useState(true);

    useEffect(() => {
        if (winner) {
            setShowWinnerScreen(true);
            setShowFinalScreen(false);

            const timer = setTimeout(() => {
                setShowWinnerScreen(false);
                setShowFinalScreen(true);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [winner]);

    if (showWinnerScreen) {
        return (
            <section className={styles.winner_container}>
                <h1 className={styles.winner_title}>
                    Winner, Winner, Chicken Dinner!
                </h1>
                <h2 className={styles.winner_prize}>Grand Prize: {score}</h2>
            </section>
        );
    }

    if (showFinalScreen) {
        return (
            <section className={styles.container}>
                <h1 className={styles.title}>Game Over</h1>
                <h2 className={styles.prize}>
                    Your Prize:{" "}
                    <strong className={styles.score}>{score}</strong>
                </h2>

                <div className={styles.button_container}>
                    <button onClick={onRestart} className={styles.button}>
                        Play Again
                    </button>
                    <button onClick={onStart} className={styles.button}>
                        Main Menu
                    </button>
                </div>
            </section>
        );
    }

    return null;
};

export default GameOver;

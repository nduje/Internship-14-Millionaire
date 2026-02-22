import { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";

function App() {
    const [gameState, setGameState] = useState("MainMenu");
    const [score, setScore] = useState(0);
    const [resetKey, setResetKey] = useState(0);
    const [winner, setWinner] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            {gameState === "MainMenu" && (
                <MainMenu onStart={() => setGameState("Game")} />
            )}
            {gameState === "Game" && (
                <Game
                    onFinish={(finalScore, winner) => {
                        setScore(finalScore);
                        setWinner(winner);
                        setGameState("GameOver");
                    }}
                    resetKey={resetKey}
                />
            )}
            {gameState === "GameOver" && (
                <GameOver
                    onStart={() => {
                        setGameState("MainMenu");
                        setResetKey(0);
                    }}
                    onRestart={() => {
                        setGameState("Game");
                        setResetKey(0);
                    }}
                    score={score}
                    winner={winner}
                />
            )}
        </div>
    );
}

export default App;

import { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu/MainMenu";
import Game from "./components/Game/Game";
import Scoreboard from "./components/Scoreboard";

function App() {
    const [gameState, setGameState] = useState("MainMenu");
    const [score, setScore] = useState(0);
    const [resetKey, setResetKey] = useState(0);

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
                    onFinish={(finalScore) => {
                        setScore(finalScore);
                        setGameState("Scoreboard");
                    }}
                    resetKey={resetKey}
                />
            )}
            {gameState === "Scoreboard" && (
                <Scoreboard
                    onStart={() => setGameState("MainMenu")}
                    onRestart={() => {
                        setGameState("Game");
                        setResetKey(0);
                    }}
                    score={score}
                />
            )}
        </div>
    );
}

export default App;

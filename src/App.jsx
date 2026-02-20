import { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";

function App() {
    const [gameState, setGameState] = useState("MainMenu");
    const [score, setScore] = useState(0);

    return (
        <>
            {gameState === "MainMenu" && (
                <MainMenu onStart={() => setGameState("Game")} />
            )}
            {gameState === "Game" && (
                <Game
                    onFinish={(finalScore) => {
                        setScore(finalScore);
                        setGameState("Scoreboard");
                    }}
                />
            )}
            {gameState === "Scoreboard" && (
                <Scoreboard
                    onStart={() => setGameState("MainMenu")}
                    onRestart={() => setGameState("Game")}
                    score={score}
                />
            )}
        </>
    );
}

export default App;

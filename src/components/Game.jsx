import Jokers from "./Jokers";
import Questions from "./Questions";

const Game = ({ onFinish }) => {
    return (
        <>
            <h1>Game</h1>
            <Jokers />
            <Questions />
            <div onClick={onFinish}>Finish Game</div>
        </>
    );
};

export default Game;

const Scoreboard = ({ onStart, onRestart }) => {
    return (
        <>
            <h1>Scoreboard</h1>
            <div onClick={onRestart}>Play Again</div>
            <div onClick={onStart}>Go Back</div>
        </>
    );
};

export default Scoreboard;

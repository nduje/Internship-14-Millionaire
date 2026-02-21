import { useEffect, useState } from "react";
import questions from "../constants/questions.js";
import levels from "../constants/levels.js";
import letters from "../constants/letters.js";
import shuffle from "../helpers/shuffle.js";

const Questions = ({ incrementLevel, isSkipped, isHalfed, resetKey }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState("0€");
    const [finished, setFinished] = useState(false);
    const [filteredQuestions, setFilteredQuestions] = useState(() =>
        shuffle([...questions]).slice(0, 10),
    );
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [hiddenAnswers, setHiddenAnswers] = useState([]);

    const currentQuestion = filteredQuestions[currentIndex];

    useEffect(() => {
        setFilteredQuestions(() => shuffle([...questions]).slice(0, 10));
        setCurrentIndex(0);
        setScore("0€");
        setFinished(false);
    }, [resetKey]);

    useEffect(() => {
        setShuffledAnswers(
            [...currentQuestion.answers].sort(() => 0.5 - Math.random()),
        );
    }, [currentQuestion]);

    const handleNextQuestion = () => {
        setCurrentIndex((prev) => prev + 1);
        incrementLevel();
        setHiddenAnswers([]);
    };

    const handleAnswerClick = (answer) => {
        if (!answer.correct) {
            setScore("0€");
            setCurrentIndex(0);
            setFinished(true);
            return;
        }

        setScore(levels[currentIndex].prize);

        if (currentIndex + 1 >= levels.length) {
            setFinished(true);
            return;
        }

        handleNextQuestion();
    };

    useEffect(() => {
        if (isSkipped) {
            handleNextQuestion();
        }
    }, [isSkipped]);

    useEffect(() => {
        if (isHalfed) {
            const wrongAnswers = shuffledAnswers
                .map((a, i) => ({ ...a, index: i }))
                .filter((a) => !a.correct);

            const hiddenAnswers = shuffle(wrongAnswers)
                .slice(0, 2)
                .map((a) => a.index);

            setHiddenAnswers(hiddenAnswers);
        } else {
            setHiddenAnswers([]);
        }
    }, [isHalfed]);

    return (
        <>
            <h2>
                Question {currentIndex + 1} / {filteredQuestions.length}
            </h2>

            <h2>Current Prize: {score}</h2>

            <h3>{currentQuestion.question}</h3>

            <div>
                {shuffledAnswers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(answer)}
                        style={{
                            visibility: hiddenAnswers.includes(index)
                                ? "hidden"
                                : "visible",
                        }}
                    >
                        {letters[index]}: {answer.text}
                    </button>
                ))}
            </div>

            {finished && <h1>Game Over</h1>}
        </>
    );
};

export default Questions;

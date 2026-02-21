import { useState } from "react";
import questions from "../constants/questions.js";
import levels from "../constants/levels.js";
import letters from "../constants/letters.js";
import shuffle from "../helpers/shuffle.js";

const Questions = ({ incrementLevel }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState("0€");
    const [finished, setFinished] = useState(false);
    const [filteredQuestions] = useState(() =>
        shuffle([...questions]).slice(0, 10),
    );

    const currentQuestion = filteredQuestions[currentIndex];

    currentQuestion.answers = [...currentQuestion.answers].sort(
        () => 0.5 - Math.random(),
    );

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

        setCurrentIndex((prev) => prev + 1);
        incrementLevel();
    };

    return (
        <>
            <h2>
                Question {currentIndex + 1} / {filteredQuestions.length}
            </h2>

            <h2>Current Prize: {score}</h2>

            <h3>{currentQuestion.question}</h3>

            <div>
                {currentQuestion.answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(answer)}
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

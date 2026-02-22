import { useEffect, useState } from "react";
import questions from "../../constants/questions.js";
import levels from "../../constants/levels.js";
import letters from "../../constants/letters.js";
import shuffle from "../../helpers/shuffle.js";
import styles from "./Questions.module.css";

const Questions = ({ setCurrentLevel, isSkipped, isHalfed, resetKey }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState("0€");
    const [finished, setFinished] = useState(false);
    const [filteredQuestions, setFilteredQuestions] = useState(() =>
        shuffle([...questions]).slice(0, 10),
    );
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [hiddenAnswers, setHiddenAnswers] = useState([]);
    const [selectedAnswerId, setSelectedAnswerId] = useState(null);
    const [showCorrect, setShowCorrect] = useState(false);

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
        setCurrentLevel((prev) => prev + 1);
        setHiddenAnswers([]);
    };

    const handleAnswerClick = (answer) => {
        setSelectedAnswerId(answer.id);

        if (!answer.correct) {
            setShowCorrect(true);

            setTimeout(() => {
                setScore("0€");
                setCurrentIndex(0);
                setCurrentLevel(1);
                setFinished(true);
                setSelectedAnswerId(null);
                setShowCorrect(false);
            }, 1000);

            return;
        }

        setTimeout(() => {
            setScore(levels[currentIndex].prize);

            if (currentIndex + 1 >= levels.length) {
                setFinished(true);
                return;
            }

            setSelectedAnswerId(null);
            handleNextQuestion();
        }, 1000);
    };

    useEffect(() => {
        if (isSkipped) {
            setScore(levels[currentIndex].prize);
            handleNextQuestion();
        }
    }, [isSkipped]);

    useEffect(() => {
        if (isHalfed) {
            const wrongAnswers = shuffledAnswers
                .map((a) => ({ ...a }))
                .filter((a) => !a.correct);

            const hiddenAnswers = shuffle(wrongAnswers)
                .slice(0, 2)
                .map((a) => a.id);

            setHiddenAnswers(hiddenAnswers);
        } else {
            setHiddenAnswers([]);
        }
    }, [isHalfed]);

    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <h2>
                    Question: {currentIndex + 1} / {filteredQuestions.length}
                </h2>

                <h2>Current Prize: {score}</h2>
            </div>

            <div className={styles.box}>
                <h3 className={styles.question}>{currentQuestion.question}</h3>

                <div className={styles.answer_container}>
                    {shuffledAnswers.map((answer, index) => (
                        <button
                            key={answer.id}
                            onClick={() => handleAnswerClick(answer)}
                            style={{
                                visibility: hiddenAnswers.includes(answer.id)
                                    ? "hidden"
                                    : "visible",
                                backgroundColor:
                                    selectedAnswerId === answer.id
                                        ? answer.correct
                                            ? "green"
                                            : "red"
                                        : showCorrect && answer.correct
                                          ? "green"
                                          : "",
                            }}
                            className={styles.button}
                        >
                            {letters[index]}: {answer.text}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Questions;

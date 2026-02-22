import levels from "../../constants/levels";
import styles from "./Sidebar.module.css";

const Sidebar = ({ currentLevel }) => {
    return (
        <section className={styles.container}>
            {[...levels].reverse().map((level) => (
                <div
                    key={level.level}
                    style={{
                        color:
                            currentLevel === level.level
                                ? "#00adb5"
                                : level.level === 5
                                  ? "silver"
                                  : level.level === 10
                                    ? "gold"
                                    : "#eeeeee",
                        fontWeight:
                            currentLevel == level.level ? "bold" : "normal",
                        border:
                            currentLevel === 5 && level.level === 5
                                ? "4px double #00adb5"
                                : currentLevel === 10 && level.level === 10
                                  ? "4px double #00adb5"
                                  : level.level === 5
                                    ? "4px double silver"
                                    : level.level === 10
                                      ? "4px double gold"
                                      : "",
                    }}
                    className={styles.level}
                >
                    {level.prize}
                </div>
            ))}
        </section>
    );
};

export default Sidebar;

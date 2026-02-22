import styles from "./MainMenu.module.css";

const MainMenu = ({ onStart }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Who Wants to Be a Half Millionaire?
            </h1>
            <button onClick={onStart} className={styles.button}>
                Play Game
            </button>
        </div>
    );
};

export default MainMenu;

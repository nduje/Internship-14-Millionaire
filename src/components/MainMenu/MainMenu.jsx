import styles from "./MainMenu.module.css";

const MainMenu = ({ onStart }) => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>
                Who Wants to Be a Half Millionaire?
            </h1>
            <button onClick={onStart} className={styles.button}>
                Play Game
            </button>
        </section>
    );
};

export default MainMenu;

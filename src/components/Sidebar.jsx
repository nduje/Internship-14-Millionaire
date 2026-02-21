import levels from "../constants/levels";

const Sidebar = ({ currentLevel }) => {
    return (
        <>
            <div>
                {[...levels].reverse().map((level) => (
                    <div
                        key={level.level}
                        style={{
                            color:
                                currentLevel == level.level ? "gold" : "black",
                            fontWeight:
                                currentLevel == level.level ? "bold" : "normal",
                        }}
                    >
                        {level.prize}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Sidebar;

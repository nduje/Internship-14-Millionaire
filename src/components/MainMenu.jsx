const MainMenu = ({ onStart }) => {
  return (
    <div className="main-menu">
      <h1>Who Wants to Be a Half Millionaire?</h1>
      <div onClick={onStart}>Play Game</div>
    </div>
  );
};

export default MainMenu;

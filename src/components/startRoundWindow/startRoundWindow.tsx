const StartRoundWindow = ({startRoundHandler}:any) => {

  return (
    <div className="round">
    Start Round:
    <button onClick={startRoundHandler}>Go</button>
  </div>
  );
}

export default StartRoundWindow;
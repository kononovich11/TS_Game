import Initialization from '../initialization';


const Fight = () => {
  const renderUnits = Initialization();
  const half = renderUnits.length / 2;
  const command1 = renderUnits.slice(0, half);
  const command2 = renderUnits.slice(half);

  console.log(renderUnits, command1, command2);
}

export default Fight;
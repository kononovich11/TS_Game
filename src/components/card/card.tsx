import React, {useState} from 'react';
import './card.css';
import { useDispatch, useSelector } from 'react-redux';
import Attack from '../../oop/gameMove/attack/attack';
import Initialization from '../../oop/initialization';


interface CardI {
  data: any;
  index: number,
  // name: string
}


const Card = ({data, index}: CardI) : any=> {
  let className: string = 'card';
  const [currentIndex, setCurrentIndex] = useState(1);

  const dispatch = useDispatch();

  interface RootState {
    opponentCard: any,
    currentCard: any,
    renderUnits: any[],
    teamActive: number,
  }

  const renderUnits = useSelector((state: RootState) => state.renderUnits);
  const opponentCard = useSelector((state: RootState) => state.opponentCard);
  const currentCard = useSelector((state: RootState) => state.currentCard);
  const teamActive = useSelector((state: RootState) => state.teamActive);

  let {name, type, health, damage, initiative, heal} = data;


  if(teamActive === 1 && index < 6) {
    className += ' disabled';
    // console.log(console.log(data))
  }

  const currentUnitHandler = (current: any) => {
    console.log(current.target.value);
    const currentIndex = +current.target.value;
    dispatch({type: 'CURRENT_CARD', currentIndex});
    //setCurrentIndex(current.target.value);
  }

  const clickCardHandler = (card: any) => {
    //const opponentCard = [...card.target.children];
    console.log('CURRENT', currentCard);
    console.log('OPPONENT', index);
    dispatch({type: 'CHOOSED_CARD', index}); //need create action dispatch({type: 'CHOOSED_CARD', opponentCard});
    console.log(opponentCard);
    const attackAction = new Attack(currentCard, index, renderUnits);
    attackAction.attack();
  }


  return (
    <div className = "container">
    <div className={className} onClick={(e) => clickCardHandler(e)}>
      <h3>{name}</h3>
      <p>{'type - ' + type}</p>
      <p>{'health - ' + health}</p>
      <p>{'initiative - ' + initiative}</p>
      {damage && <p>{'damage - ' + damage}</p>}
      {heal && <p>{'heal - ' + heal}</p>}
    </div>
    <button value = {index} onClick={(e) => currentUnitHandler(e)}>Choose me!</button>
    </div>
  );

}

export default Card;

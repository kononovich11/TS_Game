import React from 'react';
import './card.css';
import { useDispatch, useSelector } from 'react-redux';
import Attack from '../../oop/gameMove/attack/attack';
import RootState from '../../oop/interfeces/IRootState';


interface CardI {
  data: any;
  index: number,
  className: any,
  needRenderCurrentCardWindow: boolean,
  setNeedRenderCurrentCardWindow: any,
  setNeedRenderOpponentCardWindow: any,
  needRenderOpponentCardWindow: any,
  setEndMove: any,
  moreClass: string,
}


const Card = (
  {
    data,
    index,
    className,
    needRenderCurrentCardWindow,
    setNeedRenderCurrentCardWindow,
    setNeedRenderOpponentCardWindow,
    needRenderOpponentCardWindow,
    setEndMove,
    moreClass
  }: CardI) : any=> {

  const dispatch = useDispatch();
  const currentCard = useSelector((state: RootState) => state.currentCard);
  const renderUnits = useSelector((state: RootState) => state.renderUnits);
  const defend = useSelector((state: RootState) => state.defend);
  const game = useSelector((state: RootState) => state.game);
  let {name, type, health, damage, initiative, heal} = data;


  const currentUnitHandler = (current: any) => {
    const dataCurentCard = renderUnits.find((item: any) => item.id === +current.target.value);
    dispatch({type: 'CURRENT_CARD', dataCurentCard});
    setNeedRenderCurrentCardWindow(false);
    setNeedRenderOpponentCardWindow(true);

  }

  const opponentUnitHandler = (opponent: any) => {
    const dataOpponentCard = renderUnits.find((item:any) => item.id === +opponent.target.value);
    const attackAction = new Attack(currentCard, dataOpponentCard, renderUnits, defend, game.activeTeam);
    attackAction.startAttack();
    game.round += 1;
    game.activeTeam = game.activeTeam === 1? 2 : 1;
    game.dataCurrentTeam = game.activeTeam === 1? game.firstTeam :game.secondTeam;
    setNeedRenderOpponentCardWindow(false);
    setEndMove(true);
  }

  return (
    <div className = {moreClass? moreClass : className}>
    <div>
      <h3>{name}</h3>
      <p>{'type - ' + type}</p>
      <p>{'health - ' + health}</p>
      <p>{'initiative - ' + initiative}</p>
      {damage && <p>{'damage - ' + damage}</p>}
      {heal && <p>{'heal - ' + heal}</p>}
    </div>
    {className === 'active' && needRenderCurrentCardWindow && <button value = {index} onClick={(e) => currentUnitHandler(e)}>Choose me!</button>}
    {className === 'card' && needRenderOpponentCardWindow && <button value = {index} onClick={(e) => opponentUnitHandler(e)}>Attack me!</button>}
    </div>
  );

}

export default Card;
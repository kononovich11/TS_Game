import React from 'react';
import Defend from '../../oop/gameMove/defend/defend';
import RootState from '../../oop/interfeces/IRootState';
import { useSelector, useDispatch } from 'react-redux';

const WindowChoosingAction = ({setNeedRenderCurrentCardWindow, setNeedRenderChoosingAction, setEndMove} : any) => {
  const dispatch = useDispatch();
  const game = useSelector((state: RootState) => state.game);

  const demageHandler = () => {
    setNeedRenderCurrentCardWindow(true);
    setNeedRenderChoosingAction(false);
  }

  const healHandler= () => {
    const {dataCurrentTeam, round} = game;
    const defend = new Defend(dataCurrentTeam, round, true);
    dispatch({type: 'CHOOSE_DEFEND', defend});
    game.activeTeam =  game.activeTeam === 1? 2 : 1;
    game.dataCurrentTeam = game.activeTeam === 1? game.firstTeam :game.secondTeam;
    setEndMove(true);
  }

  return (
    <div className="window">
      <h2> What is the action will you do? </h2>
      <button onClick={demageHandler}>Demage</button>
      <button onClick={healHandler}>Heal</button>
    </div>
  );
}

export default WindowChoosingAction;
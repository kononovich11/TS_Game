import React, {useEffect, useState} from 'react';
import './field.css';
import Card from '../card/card';

import {useSelector, useDispatch} from 'react-redux';
import {Game} from '../../oop/game/game';

import StartRoundWindow from '../startRoundWindow/startRoundWindow';
import WindowChoosingAction from '../windowChoosingAction/windowChoosingAction';
import CurrentCardWindow from '../currentCardWindow/currentCardWindow';
import OpponentCardWindow from '../opponentCardWindow/opponentCardWindow';



const Field =  () => {
  interface RootState {
    opponentCard: any[],
    renderUnits: any[],
    activeTeam: any,
    game: any,
  }

  const [needRenderStartRound, setNeedRenderStartRound] = useState(false);
  const [needRenderChoosingAction, setNeedRenderChoosingAction] = useState(false);
  const [needRenderCurrentCardWindow, setNeedRenderCurrentCardWindow] = useState(false);
  const [needRenderOpponentCardWindow, setNeedRenderOpponentCardWindow] = useState(false);

  const [endMove, setEndMove] = useState(false);
  const [dataCurrentTeam, setDataCurrentTeam] = useState(null);

  const [checkFirst, setCheckFirst] = useState(false);
  const [checkSecond, setCheckSecond] = useState(false);


  const game = useSelector((state: RootState) => state.game);
  const renderUnits = useSelector((state: RootState) => state.renderUnits);

  const dispatch = useDispatch();
  let className: string = 'card';


  useEffect(() => {
    const gameDispatch = new Game();
    const renderUnits = gameDispatch.startGame();

    dispatch({type: 'GAME_START', gameDispatch});
    dispatch({type: 'LOADED_UNITS', renderUnits});

    setNeedRenderStartRound(true);
  }, []);


  useEffect(() => {
    setNeedRenderStartRound(true);

    let isActiveTeam: any  = game?.activeTeam === 1? game?.firstTeam : game?.secondTeam;
    setDataCurrentTeam(isActiveTeam);

    function gameOver(team: any) {
      const teamDead =  team?.filter((item: any) => item.health <= 0);
      return teamDead?.length === team?.length? true : false;
    }

    setCheckFirst(gameOver(game?.firstTeam));
    setCheckSecond(gameOver(game?.secondTeam));

  }, [game?.activeTeam]);


  const startRoundHandler = () => {
    setNeedRenderStartRound(false);
    setNeedRenderChoosingAction(true);
  }


  return (
    <div className="field">
      {
        renderUnits?.map((item: any, index: number): any => {
          let moreClass = '';

          if(item.health <= 20) {
            moreClass = 'danger';
          }

          if(item.health <= 0) {
            moreClass = 'dead';
          }

          const isActive = game.dataCurrentTeam?.includes(item);
          isActive? className = 'active' : className = 'card';
          return <Card
          data = {item}
          index={index}
          className={className}
          needRenderCurrentCardWindow={needRenderCurrentCardWindow}
          setNeedRenderCurrentCardWindow={setNeedRenderCurrentCardWindow}
          setNeedRenderOpponentCardWindow={setNeedRenderOpponentCardWindow}
          needRenderOpponentCardWindow={needRenderOpponentCardWindow}
          setEndMove = {setEndMove}
          moreClass={moreClass}
          />
        })
      }

      {needRenderStartRound && <StartRoundWindow startRoundHandler={startRoundHandler}/> }
      {needRenderChoosingAction &&
      <WindowChoosingAction
        setNeedRenderCurrentCardWindow={setNeedRenderCurrentCardWindow}
        setNeedRenderChoosingAction={setNeedRenderChoosingAction}
        game={game}
        setEndMove={setEndMove}/>}
      {needRenderCurrentCardWindow && <CurrentCardWindow /> }
      {needRenderOpponentCardWindow && <OpponentCardWindow/> }
      {endMove && <div>End Move</div>}

      <div className="info">
        <p>ACTIVE: {game?.activeTeam}</p>
        <p>ROUND: {game?.round}</p>
      </div>

      {(checkFirst || checkSecond) && <div>GAME OVER, win: {checkFirst? 2 : 1}</div>}

    </div>
  )
}

export default Field;
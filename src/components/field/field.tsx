import React, {useEffect} from 'react';
import './field.css';
import Card from '../card/card';
import Window from '../window/window'
import Initialization from '../../oop/initialization';
import {useSelector, useDispatch} from 'react-redux';


interface Card {
  data: object;
}

const Field =  () => {

  interface RootState {
    opponentCard: any[],
    renderUnits: any[],
    commandActive: number,
  }

  const opponentCard = useSelector((state: RootState) => state.opponentCard);
  const renderUnits = useSelector((state: RootState) => state.renderUnits);
  const commandActive = useSelector((state: RootState) => state.commandActive);

  const dispatch = useDispatch();

  useEffect(() => {
    const renderUnits =  Initialization();
    dispatch({type: 'LOADED_UNITS', renderUnits});
    // console.log(renderUnits);
  }, []);

  useEffect(() => {
    // console.log(opponentCard);
  }, [opponentCard]);

  return (
    <div className="field">
      {
        renderUnits?.map((item: object, index: number): any => {
          return <Card data = {item} index={index}/>
        })
      }
      {/* <Window/> */}

      {/* <div className="windowCurrent">
        Choose current:
      </div>

      <div className="windowTarget">
        Choose target:
      </div> */}

    </div>
  )
}

export default Field;
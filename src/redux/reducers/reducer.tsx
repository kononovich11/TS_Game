
// const initialState = {
//   currentCard: null,
//   opponentCard: null,
// }


// interface IAppState {
//   opponentCard: any[];
// }

const initialState: any = {
  renderUnits: null,
  currentCard: null,
  opponentCard: null,
  activeTeam: 1,
  gameDispatch: null,
};



export const reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'GAME_START':
      return {
        ...state,
        game: action.gameDispatch
    };
    case 'CURRENT_CARD':
      return {
        ...state,
        currentCard: action.dataCurentCard
    };
    case 'LOADED_UNITS':
      return {
        ...state,
        renderUnits: action.renderUnits
    };

    case 'CHOOSE_DEFEND':
      return {
        ...state,
        defend: action.defend
    };

    default : return state;
  }
}


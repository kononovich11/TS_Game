
const initialState: any = {
  renderUnits: null,
  currentCard: null,
  opponentCard: null,
  teamActive: 1,
};


export const reducer = (state = initialState, action: any) => {
  // console.log(state);
  switch(action.type) {
    case 'CURRENT_CARD':
      console.log(action);
      return {
        ...state,
        currentCard: action.currentIndex
    };
    case 'CHOOSED_CARD':
      console.log(action);
      return {
        ...state,
        opponentCard: action.index
    };
    case 'LOADED_UNITS':
      return {
        ...state,
        renderUnits: action.renderUnits
    };
    default : return state;
  }
}
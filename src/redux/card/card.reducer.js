import CardActionTypes from './card.types';

const INITIAL_STATE = {
  isClicked: false
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionTypes.TOGGLE_CARD_CLICKED:
      return {
        ...state,
        isClicked: !state.isClicked
      };
    default:
      return state;
  }
};

export default cardReducer;

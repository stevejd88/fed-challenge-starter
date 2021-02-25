import { createSelector } from 'reselect';

const selectCard = (state) => state.card;

export const selectCardItem = createSelector(
  [selectCard],
  (card) => card.isClicked
);

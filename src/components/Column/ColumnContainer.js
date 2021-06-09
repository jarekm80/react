import {connect} from 'react-redux';
import Column from './Column';
import {createActionAddCard, getCardsForColumn} from '../../redux/cardsRedux';
/*
export const getCardsForColumn = ({cards}, ColumnId) => {
  console.log(cards);
  return cards.filter(card => card.columnId == ColumnId);
  
};
*/
const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),

});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
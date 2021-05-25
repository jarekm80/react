import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn} from '../../redux/cardsRedux';
/*
export const getCardsForColumn = ({cards}, ColumnId) => {
  console.log(cards);
  return cards.filter(card => card.columnId == ColumnId);
  
};
*/
const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});
export default connect(mapStateToProps)(Column);
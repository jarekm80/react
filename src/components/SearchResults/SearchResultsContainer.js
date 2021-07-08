/*Teraz możemy wrócić już do SearchResultsContainer. Zaimportuj przygotowany przed chwilą selektor i z pomocą funkcji connect oraz mapStateToProps wykorzystaj go,
aby dodać do naszego komponentu nowy parametr o nazwie cards. Pamiętaj, przy tym, aby selektor otrzymał odpowiednie argumenty! getCardsForSeatchResults
potrzebuje ich bowiem aż dwóch! Pierwszym powinien być cały stan, a drugim fraza, wedle której karty powinny być wyszukiwane. Przypominamy,
że fraza po której należy wyszukiwać jest schowana w adresie strony. Jak dojść do parametru z adresu strony? Jako ściągę wykorzystaj ListContainer.*/

/*
import { connect } from 'react-redux';
import {getCardsForSearchResults} from '../../redux/cardsRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state,props) => ({
//  cards: getCardsForSearchResults(state,),
console.log(props.match.params.id)
});

*/

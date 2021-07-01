import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    const {cards} = this.props;
    return (
      <section className={styles.Component}>
        <h3 className={styles.title}><Icon name="search" />Search Results</h3>         
        <div className={styles.columns}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }  
}


export default SearchResults;

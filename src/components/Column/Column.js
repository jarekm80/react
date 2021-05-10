import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.any,
  }

  static defaultProps = {
    description: ReactHtmlParser(settings.defaultListDescription),
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.Component}>
        <h3 className={styles.title}><Icon name={icon} /> {title}</h3>
        
        <div className={styles.columns}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        */}
      </section>
    );
  }  
}


export default Column;

import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  }

  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <input type="text" value={title} readOnly></input>
      </section>
    );
  }  
}

export default Card;

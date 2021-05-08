import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
  <section className={styles.component}>
    {/*<h3 className={styles.title}>{props.title}</h3>*/}
    <input type="text" value={props.title} readOnly></input>
  </section>
);
Card.propTypes = {
  title: PropTypes.string,
};

export default Card;

import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column'
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    imgSrc: PropTypes.string,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.Component}>
        <Hero
          titleText={this.props.title}
          imgSrc={this.props.imgSrc}
        />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='aaaaa' />
          <Column title='bbbbb' />
          <Column title='ccccc' />
        </div>
      </section>
    )
  }  
}


export default List;

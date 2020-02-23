import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/data/data.actions';

import './item.styles.scss';

class Item extends React.Component {
  render() {
    return (
      <div className='item-container'>
        <div className='item'>
          <img src={this.props.data.data[0].image} alt='Shark Ninja' />
          <h1>{this.props.data.data[0].title}</h1>
          <span>{this.props.data.data[0].subtitle}</span>
        </div>
        <hr />
        <div className='tags'>
          {this.props.data.data[0].tags.map(tag => (
            <p>{tag}</p>
          ))}
        </div>
        <hr />

        <div className='menu'>
          <button className='overview'>
            <i class='fas fa-home fa-2x'></i> OVERVIEW
          </button>
          <button className='sales'>
            <i class='far fa-chart-bar fa-2x'></i> SALES
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { fetchData })(Item);

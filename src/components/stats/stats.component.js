import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/data/data.actions';

import './stats.styles.scss';

class Stats extends React.Component {
  render() {
    return (
      <div className='stats-container'>
        <header className='column-header'>
          <h3>
            Week Ending<i class='fas fa-sort-down'></i>
          </h3>
          <h3>
            Retail Sales<i class='fas fa-sort-down'></i>
          </h3>
          <h3>
            Wholesale Sales<i class='fas fa-sort-down'></i>
          </h3>
          <h3>
            Units Sold<i class='fas fa-sort-down'></i>
          </h3>
          <h3>
            Retailer Margin<i class='fas fa-sort-down'></i>
          </h3>
        </header>
        <div className='stats'>
          <div className='column'>
            {this.props.data.data[0].sales.map(w => (
              <p>{w.weekEnding}</p>
            ))}
          </div>
          <div className='column'>
            {this.props.data.data[0].sales.map(w => (
              <p>{String(w.retailSales).padStart(7, '$')}</p>
            ))}
          </div>
          <div className='column'>
            {this.props.data.data[0].sales.map(w => (
              <p>{String(w.wholesaleSales).padStart(7, '$')}</p>
            ))}
          </div>
          <div className='column'>
            {this.props.data.data[0].sales.map(w => (
              <p>{w.unitsSold}</p>
            ))}
          </div>
          <div className='column'>
            {this.props.data.data[0].sales.map(w => (
              <p>{String(w.retailerMargin).padStart(7, '$')}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { fetchData })(Stats);

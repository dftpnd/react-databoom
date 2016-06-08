import React from 'react';
import numeral from 'numeral'
import store from '../services/store.service';

import ru from 'numeral/languages/ru';
numeral.language('ru', ru);
numeral.language('ru');

class CarRow extends React.Component {


  render() {
    return (<div></div>);
  }
}

CarRow.defaultProps = {};

export default CarRow;

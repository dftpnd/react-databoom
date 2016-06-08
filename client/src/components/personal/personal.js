import { browserHistory } from 'react-router';
import React from 'react';


class Personal extends React.Component {

  constructor(props) {
    super(props);
    this.tabMyBidsClick = this.tabMyBidsClick.bind(this);
    this.tabMyCarsClick = this.tabMyCarsClick.bind(this);
  }

  tabMyBidsClick()
  {
    browserHistory.push('/personal-bids');
  }

  tabMyCarsClick(){
    browserHistory.push('/personal-bought');
  }

  

  render() {
    return (
      
        <div className="sub-nav">
          <ul>
            <li><a href="javascript:void(0)" onclick={this.tabMyCarsClick}>Мои ставки</a></li>
            <li className="active"><a href="javascript:void(0)" onclick={this.tabMyCarsClick}>История покупок</a></li>
          </ul>
        </div>
      
    );
  }
}

Personal.defaultProps = {};

export default Personal;


import { browserHistory } from 'react-router';
import React from 'react';
import PersonalBids from './personal-bids'
import PersonalBought from './personal-bought'

var viewMap = {
  'my-bids': <PersonalBids/>,
  'my-cars': <PersonalBought/>
};

class Personal extends React.Component {

  constructor(props) {
    super(props);
    this.tabMyBidsClick = this.tabMyBidsClick.bind(this);
    this.tabMyCarsClick = this.tabMyCarsClick.bind(this);
    this.updateStepState = this.updateStepState.bind(this);
    this.state = {
      view: viewMap['my-bids']
    };

    this.tab = '';
  }

  componentWillMount() {
    this.tab = this.props.params.stepName || 'my-bids';
    this.updateStepState(this.tab);
  }

  updateStepState(step)
  {
    this.setState({view: viewMap[step]});
    browserHistory.push('/personal/' + step);
  }

  tabMyBidsClick()
  {
    this.tab = 'my-bids';
    this.updateStepState('my-bids');
  }

  tabMyCarsClick(){
    this.tab = 'my-cars';
    this.updateStepState('my-cars');
  }

  render() {

    var tab1class = this.tab == 'my-bids' ? 'active' : '';
    var tab2class = this.tab == 'my-cars' ? 'active' : '';

    return (
        <div>
          <div className="sub-nav">
            <ul>
              <li className={tab1class}><a href="javascript:void(0)" onClick={this.tabMyBidsClick}>Мои ставки</a></li>
              <li className={tab2class}><a href="javascript:void(0)" onClick={this.tabMyCarsClick}>История покупок</a></li>
            </ul>
          </div>
          <div className="limiter wrapper">
            {this.state.view}
          </div>
        </div>
    );
  }
}

Personal.defaultProps = {};

export default Personal;


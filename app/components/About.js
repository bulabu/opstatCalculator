import React from 'react';
import {Link} from 'react-router';
import AboutStore from '../stores/AboutStore';
import AboutActions from '../actions/AboutActions';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = AboutStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    AboutStore.listen(this.onChange);
  }
  componentWillUnmount() {
    AboutStore.unlisten(this.onChange);
  }
  onChange(state) {
    this.setState(state);
  }
  render() {
    return (
      <div className='alert alert-info'>
      {this.state.portfolioAbout.Portfolio.Income}
      <input type="text" value={this.state.portfolioAbout.Portfolio.Income} onChange={AboutActions.updatePortfolioAboutIncome} />
      </div>
    );
  }
}

export default About;

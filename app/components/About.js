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
      <div className="row setup-content" id="step-1">
      <div className="col-xs-6 col-md-offset-3">
        <div className="col-md-12">
          <h3> <div className="text-heavy">About you - Debug Age {this.state.Age}</div></h3>
          <div className="form-group">
            <label className="control-label">
              <div className="text-light">Current age</div>
            </label>
            <input maxLength="100" type="text" required="required" className="form-control" placeholder="Your current age" value={this.state.Age} onChange={AboutActions.updatePortfolioAboutAge}/>
          </div>
          <div className="form-group">
            <label className="control-label">
              <div className="text-light">Retirement age</div>
            </label>
            <input maxLength="100" type="text" required="required" className="form-control" placeholder="Planned retirement age" value={this.state.RetirementAge} onChange={AboutActions.updatePortfolioAboutRetirementAge}/>
          </div>
          <div className="form-group">
            <label className="control-label">
              <div className="text-light">State</div>
            </label>
            <select required="required" className="form-control" placeholder="Where do you work" value={this.state.State} onChange={AboutActions.updatePortfolioAboutState}>
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
              <option>CO</option>
              <option>CT</option>
              <option>DE</option>
              <option>FL</option>
              <option>GA</option>
              <option>IA</option>
              <option>ID</option>
              <option>IL</option>
              <option>IN</option>
              <option>KS</option>
              <option>LA</option>
              <option>MA</option>
              <option>MD</option>
              <option>ME</option>
              <option>MI</option>
              <option>MN</option>
              <option>MO</option>
              <option>MS</option>
              <option>MT</option>
              <option>ND</option>
              <option>NE</option>
              <option>NH</option>
              <option>NM</option>
              <option>NC</option>
              <option>NJ</option>
              <option>NV</option>
              <option>NY</option>
              <option>OH</option>
              <option>OK</option>
              <option>OR</option>
              <option>PA</option>
              <option>RI</option>
              <option>SC</option>
              <option>SD</option>
              <option>TN</option>
              <option>TX</option>
              <option>UT</option>
              <option>VA</option>
              <option>VT</option>
              <option>WA</option>
              <option>WI</option>
              <option>WV</option>
              <option>WY</option>
            </select>
          </div>
          <div className="form-group">
            <label className="control-label">
              <div className="text-light">Marital status</div>
            </label>
            <select required="required" className="form-control" placeholder="Current marital status" value={this.state.MaritalStatus} onChange={AboutActions.updatePortfolioAboutMaritalStatus}>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced or Widowed</option>
            </select>
          </div>
          <button className="btn btn-primary nextBtn btn-sm pull-right" type="button">Next</button>
        </div>
      </div>
    </div>
    );
  }
}

export default About;

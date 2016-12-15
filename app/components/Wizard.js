import React from 'react';
import About from './About';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const aboutIcon = <FontIcon className="material-icons">account_box</FontIcon>;
const investmentsIcon = <FontIcon className="material-icons">trending_up</FontIcon>;
const loansIcon = <FontIcon className="material-icons">people</FontIcon>;
const moneyIcon = <FontIcon className="material-icons">attach_money</FontIcon>;

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.select = (index) => this.setState({selectedIndex: index});
  }


  render() {
    return (
      <div>
      <MuiThemeProvider>
      <div id="wizard" class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar" role="navigation">
        <div className="stepwizard col-md-offset-3">
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="About you"
                icon={aboutIcon}
                onClick={() => this.select(0)}
              />
              <BottomNavigationItem
                label="Your Money"
                icon={moneyIcon}
                onClick={() => this.select(1)}
              />
              <BottomNavigationItem
                label="Your Investments"
                icon={investmentsIcon}
                onClick={() => this.select(2)}
              />
              <BottomNavigationItem
                label="Your Loans"
                icon={loansIcon}
                onClick={() => this.select(3)}
              />
            </BottomNavigation>
          </Paper>
        </div>

        <form role="form" action="" method="post">
          { this.state.selectedIndex==0 ? <About /> : null }
        </form>
    </div>
    </MuiThemeProvider>
    </div>
    );
  }
}

export default Wizard;

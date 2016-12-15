import React from 'react';
import About from './About';
import Wizard from './Wizard';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Wizard />
      </div>
    );
  }
}

export default App;

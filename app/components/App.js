import React from 'react';
import About from './About';
class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <About />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Article from './Article/Article.js';


class App extends Component {
  render() {
    return (
      <div>
        {/* <a id="togglePage">Switch Page</a> */}
        <Article />
      </div>
    );
  }
}

export default App;

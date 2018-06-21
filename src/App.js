import React, { Component } from 'react';
import Article from './Article/Article.js';
import Tile from './Tile/Tile.js';
import './css/app.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pageSwitched: false
    };
    this.switchPage = this.switchPage.bind(this);
  }
  switchPage() {
    this.setState({
      pageSwitched: !this.state.pageSwitched
    });
  }
  render() {
    return (
      <div className="outer-wrapper">
        <button onClick={this.switchPage} id="togglePage">Switch Page</button>
        {this.state.pageSwitched ? <Tile /> : <Article/>}
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImg: "photo01.jpg"
        }
    }
    render() {
        return (
            <div className="col-12 col-md-11">
                <img src={require(`./images/${this.state.selectedImg}`)} alt="Nature" className="preview-img" />
            </div>
        );
    }
}



export default Preview;
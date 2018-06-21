
import React, { Component, Fragment } from 'react';
import defaultImg from './images/photo01.jpg';
import './Preview.css';

class Preview extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedImg: defaultImg,
            imageTitle: "Relaxing Streams",
            imageCaption: "Streams to soothe",
            imageAltAttribute: "Flowing Stream"
        };
        this.switchInformation = this.switchInformation.bind(this);
    }
    switchInformation(title, caption, e) {
        document.getElementById("main_img").classList.add("fade-in");
        setTimeout(function() {
            document.getElementById("main_img").classList.remove("fade-in");
        }, 600);
        // Switch out image preview information
        this.setState({
            selectedImg: e.target.src,
            imageTitle: title,
            imageCaption: caption,
            imageAltAttribute: e.target.alt
        })
    }
    render() {
        return (
            <Fragment>
            <div className="col-12 col-md-11">
                <img id="main_img" src={this.state.selectedImg} alt={this.state.imageAltAttribute} className="preview-img" />
            </div>
            <div className="col-12 col-md-11 thumbnail-container">
                <div className="thumbnail-title-container">
                    <h1 className="thumbnail-title">{this.state.imageTitle}</h1>
                    <h2 className="thumbnail-caption">{this.state.imageCaption}</h2>
                </div>
                <div className="thumbnail-img-container">
                    <div className="col-auto">
                        <img onClick={this.switchInformation.bind(this, 'Relaxing Streams', "Streams to soothe")} src={require(`./images/photo01.jpg`)} alt="Flowing stream" className="thumbnail-img"/>
                    </div>
                    <div className="col-auto">
                        <img onClick={this.switchInformation.bind(this, 'Lakes and Cities', "Breathe it in")} src={require(`./images/photo02.jpg`)} alt="Lake next to a city" className="thumbnail-img"/>
                    </div>
                    <div className="col-auto">
                        <img onClick={this.switchInformation.bind(this, 'Snowy Fields', "Get your snow on")} src={require(`./images/photo03.jpg`)} alt="Jogger running in the snow" className="thumbnail-img"/>
                    </div>
                    <div className="col-auto">
                        <img onClick={this.switchInformation.bind(this, 'Old Bridges', "Much architecture")} src={require(`./images/photo04.jpg`)} alt="View of a bridge and river" className="thumbnail-img"/>
                    </div>
                    <div className="col-auto">
                        <img onClick={this.switchInformation.bind(this, 'River in Desert', "Rivers are great")} src={require(`./images/photo05.jpg`)} alt="Sattelite aerial view of a river" className="thumbnail-img"/>
                    </div>
                    <div className="col-auto">
                        <img onClick={this.switchInformation.bind(this, 'Hills and Creeks', "One with nature")} src={require(`./images/photo06.jpg`)} alt="View of hillside and creek" className="thumbnail-img"/>
                    </div>
                </div>
            </div>
            </Fragment>
        );
    }
}



export default Preview;
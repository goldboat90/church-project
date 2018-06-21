import React, { Component, Fragment } from 'react';
import './Tile.css';
import video from './videoplayback.mp4';
import poster from './pres-monson.jpg';

class Tile extends Component {
    videoClick() {
        document.getElementById("main_video").play();
        document.getElementById("video_hook").classList.remove("col-md-4");
        document.getElementById("video_hook").classList.add("col-12");
        document.getElementById("video_content").classList.remove("col-md-8");
        document.getElementById("video_content").classList.add("col-12");
        document.getElementById("video_content").classList.add("desktop-padding");
    }
    render() {
        return (
            <Fragment>
                <div className="tile-container">
                    <div className="container">
                        <div className="row main-wrapper">
                            <div id="video_hook" className="col-md-4 video-wrapper">
                                <div className="responsive-video-container">
                                    <video id="main_video" onClick={this.videoClick} poster={poster} controls src={video} type="mp4/video" className="responsive-video"></video>
                                </div>
                            </div>
                            <div id="video_content" className="col-md-8 inner-content-container">
                                <h4 className="news-release">news release</h4>
                                <h1 className="video-title-tile">University of Utah Names Historic Building After President Monson</h1>
                                <p className="video-text-snippet">A historic mansion in downtown Salt Lake City has been renamed the Thomas S. Monson Center after the current president of The Church of Jesus Christ of Latter-day Saints.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}



export default Tile;
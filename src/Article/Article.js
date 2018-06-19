import React, { Component } from 'react';
import './Article.css';
import Preview from './Preview/Preview.js';

class Article extends Component {
    render() {
        return (
            <section className="article-container">
                <div className="container">
                    <div className="section-title-container">
                        <h4 className="section-subheader">Subtitle</h4>
                        <h1 className="section-title">Title of the Section</h1>
                    </div>
                    <div className="row">
                        <Preview />
                    </div>
                </div>
            </section>
        );
    }
}



export default Article;
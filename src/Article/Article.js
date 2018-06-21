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
                    <div className="row content-container">
                        <p className="col-12 col-md-9 content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices velit lacus, rutrum faucibus massa sagittis quis. Nullam facilisis, dolor sit amet viverra ultrices, magna tortor hendrerit dolor, a iaculis tortor lorem id quam. Maecenas at dui massa. Mauris nec hendrerit turpis, ut pretium dui. Vivamus at varius dolor, vitae viverra enim. Nulla eget ipsum tempor, viverra urna eu, tempor nibh. Sed dapibus dolor neque, vitae pellentesque et.</p>
                        <div className="col-12 text-media-container">
                            <div className="col-12 col-md text-wrapper">
                                <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices velit lacus, rutrum faucibus massa sagittis quis. Nullam facilisis, dolor sit amet viverra ultrices, magna tortor hendrerit dolor, a iaculis tortor lorem id quam. Maecenas at dui massa. Mauris nec hendrerit turpis, ut pretium dui. Vivamus at varius dolor, vitae viverra enim. Nulla eget ipsum tempor, viverra urna eu, tempor nibh. Sed dapibus dolor neque, vitae pellentesque et.</p>
                                <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices velit lacus, rutrum faucibus massa sagittis quis. Nullam facilisis, dolor sit amet viverra ultrices, magna tortor hendrerit dolor, a iaculis tortor lorem id quam. Maecenas at dui massa. Mauris nec hendrerit turpis, ut pretium dui. vitae viverra enim. Nulla eget ipsum tempor, viverra urna eu, tempor nibh. Sed dapibus dolor neque, vitae pellentesque et.</p>
                            </div>
                            <div className="col-12 col-md-auto media-container">
                                <div className="responsive-video-container">
                                    <iframe className="responsive-video" title="Precious Gifts From God" src="https://www.youtube.com/embed/fXtEJZZZNI0" allowFullScreen></iframe>
                                </div>
                                <div className="video-title-container">
                                    <h1 className="video-title">Gifts From God</h1>
                                    <h2 className="video-caption">Understand your gifts</h2>
                                </div>
                            </div>
                        </div>
                        <p className="col-12 col-md-9 content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices velit lacus, rutrum faucibus massa sagittis quis. Nullam facilisis, dolor sit amet viverra ultrices, magna tortor hendrerit dolor, a iaculis tortor lorem id quam. Maecenas at dui massa. Mauris nec hendrerit turpis, ut pretium dui. Vivamus at varius dolor, vitae viverra enim. Nulla eget ipsum tempor, viverra urna eu, tempor nibh. Sed dapibus dolor neque, vitae pellentesque et.</p>
                        <h2 className="col-12 col-md-9 sub-heading">Sub-heading</h2>
                        <p className="col-12 col-md-9 content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices velit lacus, rutrum faucibus massa sagittis quis. Nullam facilisis, dolor sit amet viverra ultrices, magna tortor hendrerit dolor, a iaculis tortor lorem id quam. Maecenas at dui massa. Mauris nec hendrerit turpis, ut pretium dui. Vivamus at varius dolor, vitae viverra enim. Nulla eget ipsum tempor, viverra urna eu, tempor nibh. Sed dapibus dolor neque, vitae pellentesque et.</p>
                        <p className="col-12 col-md-9 content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices velit lacus, rutrum faucibus massa sagittis quis. Nullam facilisis, dolor sit amet viverra ultrices, magna tortor hendrerit dolor, a iaculis tortor lorem id quam. Maecenas at dui massa. Mauris nec hendrerit turpis, ut pretium dui. Vivamus at varius dolor, vitae viverra enim. Nulla eget ipsum tempor, viverra urna eu, tempor nibh. Sed dapibus dolor neque, vitae pellentesque et.</p>
                        <p className="col-12 col-md-9 content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices velit lacus, rutrum faucibus massa sagittis quis. Nullam facilisis, dolor sit amet viverra ultrices.</p>
                    </div>
                </div>
            </section>
        );
    }
}



export default Article;
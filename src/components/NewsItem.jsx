import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    let { title, description, imageUrl, newsUrl, time, author } = this.props;
    let date = new Date(this.props.time);
    
    return (
      <div className="my-3">
        <div className="card justify-center" >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">Source: <small className="text-muted"> {author}</small> </p>
            <p className="card-text">Published On : <small className="text-muted"> {date.toLocaleDateString()}  </small></p>
            <a href={newsUrl} target = "_lank"className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

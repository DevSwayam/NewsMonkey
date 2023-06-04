import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {
  constructor() {
    super();
    console.log("Checking for constructor working");
    this.state = {
      articles: [],
      loading: false,
      page:1,
      disAbled: false

    };
  }

  async componentDidMount(){
    this.setState({
      loading:true
    })
    console.log("Last");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=87a01ace64b24f2eab6eec8267762d8f&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
    articles: parsedData.articles, 
    totalResults: parsedData.totalResults,
    loading: false})
}

 handlePrevClick = async()=>{
    console.log("Going Next");
    this.setState({
      loading:true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=87a01ace64b24f2eab6eec8267762d8f&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
        page: this.state.page-1,
        articles: parsedData.articles,
        disAbled:false,
        loading: false
    })
}
 handleNextClick = async ()=>{
    console.log("Redirecting to Next Page");
    if((this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        this.setState({
            disAbled:true
        })
    }else{
      this.setState({
        loading:true
      })
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=87a01ace64b24f2eab6eec8267762d8f&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles,
            disAbled : false,
            loading:false
        })
        
    }
    
}

  render() {
    console.log("render");
    return (
      <div className="container my-6 justify-content-center">
        <h1 className="text-center my-3">NewsMonkey - Top Headlines</h1>
        {this.state.loading&& <Spinner/>}
        <div className="row d-flex justify-content-center">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title:""}
                  description={element.description?element.description:"Please Click On Read More to Learn more about News"}
                  imageUrl={element.urlToImage?element.urlToImage:"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className=" my-3 container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-md btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>
        <button disabled={this.state.disAbled}type="button" className="btn btn-md btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    );
  }
}

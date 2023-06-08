import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [disAbled, setDisAbled] = useState(false)
  const [totalResults, setTotalResults] = useState(0)

  useEffect(() => {
    updateNews();
  }, [])
  

const updateNews = async()=> {
  props.setProgress(0);
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
  props.setProgress(30);
  setLoading(true)
  let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles)
    setDisAbled(false)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
}

const fetchMoreData = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
  setPage(page+1)
  setLoading(true)
  let data = await fetch(url);
    let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setDisAbled(false)
        setLoading(false)
}

    return (
      <div className="container my-6 justify-content-center">
        <h1 className="text-center mt-3 pt-5" >NewsMonkey - Top {(props.category)} Headlines</h1>
        {/*this.state.loading&& <Spinner/>*/}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
            <div className="row d-flex justify-content-center">
              {/*!this.state.loading &&*/ articles.map((element,index) => {
                return (
                  <div className="col-md-4 r" key={index}>
                    <NewsItem
                      title={element.title?element.title:""}
                      description={element.description?element.description:"Please Click On Read More to Learn more about News"}
                      imageUrl={element.urlToImage?element.urlToImage:"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"}
                      newsUrl={element.url}
                      time = {element.publishedAt}
                      author = {element.author?element.author:"Unknown"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        
        </InfiniteScroll>
        {/*<div className=" my-3 container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-md btn-dark" onClick={this.handlePrevClick}>&larr; Previous </button>
        <button disabled={this.state.disAbled}type="button" className="btn btn-md btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>*/}
      </div>
    );
  }

News.propTypes ={
  country: 'in',
  pageSize:5,
  category:'general'
}

News.propTypes ={
  country: propTypes.string,
  pageSize:propTypes.number,
  category:propTypes.string
}

export default News

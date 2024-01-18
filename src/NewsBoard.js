import React, { useEffect, useState } from 'react';
import { NewsItem } from './NewsItem';

function NewsBoard( {category}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=a2af58be018743589d0cf82afaf40db1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || [])); // Set articles to an empty array if data.articles is undefined
  }, [category]);

  return (
    <>
      <h1 className="text-center">
        {category}<span className='badge bg-danger ms-2'>News</span>
      </h1>
      {articles ? (
        articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default NewsBoard;

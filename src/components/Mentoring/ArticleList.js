import React from 'react';
import { Link } from 'react-router-dom';
const ArticleList = ({ articles }) => (
  <div className="row app">
    {articles.map((article, key) => (
      <div className="col-md-4 p-3">
        <Link className="card p-1" key={key} to={`/article/${article.name}`}>
          <img
            className="img-fluid card"
            alt="{article.title}"
            src={article.img}
          />
          <section className="card-content p-3">
            <h3>
              {article.title} <span className="cute">✏️</span>
            </h3>
            <p className="date">
              👧<a href={article.authorlink}>{article.author}</a> ⏰{' '}
              {article.date}
            </p>
            <p>📝 {article.content[0].substring(0, 100)}...</p>
          </section>
        </Link>
      </div>
    ))
  }
  </div>
);

export default ArticleList;
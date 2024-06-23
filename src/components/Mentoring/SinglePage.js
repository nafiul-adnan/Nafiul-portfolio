import React from 'react';
import { Helmet } from 'react-helmet';
import ArticleContent from './ArticleContent';
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find((article) => article.name === name);
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{article.title}</title>
        <meta content={article.desc} name="description" />
        <meta content={article.title} property="og:title" />
        <meta content={article.desc} property="og:description" />
        <meta content={article.img} property="og:image" />
        <meta content={article.title} name="facebook:title" />
        <meta content="website" property="og:type" />
        <meta content={article.title} property="og:site_name" />
        <link rel="apple-touch-icon" href={article.img} />

      </Helmet>
      <div className="p-1">
        <div className="card p-1">
          <img
            className="img-fluid card"
            alt="{article.title}"
            src={article.img}
          />
          <main className="card-content p-3 p-md-5">
            <h1>
              <a href="/"> {article.title}</a> <span className="cute">✏️</span>
            </h1>
            <h3>{article.desc}</h3>
            <p className="date">
              👧<a href={article.authorlink}>{article.author}</a> ⏰{' '}
              {article.date}
            </p>
            <p className="dotted" />
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
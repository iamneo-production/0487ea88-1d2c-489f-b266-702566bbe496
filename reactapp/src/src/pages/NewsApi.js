import React from 'react';
import axios from 'axios';
import './NewsApi.css';
import Dashboard from './Dashboard';

class NewsApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      error: null,
    };
  }

  componentDidMount() {
    // const ApiKey = '1980973dbd834ded9b057c0a5b519c28';
    const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2023-06-22&sortBy=publishedAt&apiKey=1980973dbd834ded9b057c0a5b519c28';
    

    axios.get(apiUrl)
      .then(response => {
        if (response.status === 200 && response.data.status === 'ok') {
          this.setState({ articles: response.data.articles });
        } else {
          throw new Error('Failed to fetch news.');
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { articles, error } = this.state;
  
    return (
      
        <div className='wrapper'>
          <Dashboard/>
        
      <div className="news-container">
        {error && <p>{error}</p>}
        {articles.map(article => (
          <div className="news-card" key={article.title}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
              <img src={article.urlToImage} alt={article.title} className="news-image" />
              <div className="news-content">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </a>
            <hr className="news-divider" />
          </div>
        ))}
      </div>
      </div>
    );
  }
  
  
}

export default NewsApi;
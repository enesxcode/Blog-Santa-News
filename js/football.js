const apiKey = '1ae4d06cacd240f8a7d70bbc5f4df629';

class NewsArticle {
    constructor(article) {
      this.article = article;
      this.createArticleElement();
    }
  
    createArticleElement() {
      if (!this.article.urlToImage || !this.article.description) {
        // Skip articles without an image or description
        return null;
      }
  
      const newsArticle = document.createElement('article');
      newsArticle.classList.add('news-article');
  
      const title = document.createElement('h3');
      title.textContent = this.article.title || 'No Title';
  
      const description = document.createElement('p');
      description.textContent = this.article.description || 'No description available';
  
      const image = document.createElement('img');
      image.src = this.article.urlToImage || 'https://via.placeholder.com/150';
      image.alt = this.article.title || 'No Title';
  
      const link = document.createElement('a');
      link.href = this.article.url;
      link.textContent = 'Read More';
      link.target = '_blank'; 
  
      // Add a specific class to the dynamically created anchor element
      link.classList.add('article-link');
      image.classList.add('article-img');
      title.classList.add('article-title');
      description.classList.add('article-p');
  
      newsArticle.appendChild(title);
      newsArticle.appendChild(description);
      newsArticle.appendChild(image);
      newsArticle.appendChild(link);
  
      return newsArticle;
    }
  }
  
  const fetchNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
      const data = await response.json();
  
      if (data.status === 'ok') {
        const mainContent = document.getElementById('mainContent');
        mainContent.innerHTML = ''; // Clear existing content
  
        data.articles.forEach(article => {
          const newsArticle = new NewsArticle(article);
          const articleElement = newsArticle.createArticleElement();
  
          if (articleElement) {
            mainContent.appendChild(articleElement);
          }
        });
      } else {
        console.error('Error in API response:', data.status);
      }
  
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  
  fetchNews();
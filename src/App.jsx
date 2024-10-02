import { useEffect, useState } from "react";
import News from "./news";

function App() {
  let [article, setArticle] = useState([]);
  let [catogary, setcatogary] = useState("india");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${catogary}&apiKey=43e819822dec45b3a63eb8accde88a76`
    )
      .then((response) => response.json())
      .then((news) => {
        if (news.articles) {
          setArticle(news.articles);
        } else {
          setArticle([]); // If articles are not found, set empty array.
        }
      })
      .catch((err) => {
        console.log(err);
        setArticle([]); // Handle network errors by setting an empty array.
      });
  }, [catogary]);

  return (
    <div className="app">
      <header className="header">
        <h2>Live Tak</h2>

        <input
          type="text"
          onChange={(event) => {
            if (event.target.value !== "") {
              setcatogary(event.target.value);
            } else {
              setcatogary("india");
            }
          }}
          placeholder="search news"
        />
      </header>
      <section className="news-article">
        {article.length > 0 ? (
          article.map((article, index) => {
            return <News key={index} msg={article} />;
          })
        ) : (
          <h2>News not found</h2>
        )}
      </section>
    </div>
  );
}

export default App;

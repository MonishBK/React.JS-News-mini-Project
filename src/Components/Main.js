import { useState, useEffect } from 'react';

const Main = () =>{

    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("microsoft");

    useEffect( async () =>{
        let url = " https://newsapi.org/v2/everything?q=microsoft&apiKey=52ce1a27359a49aea7d0ee955121c64e"

       const newsFetch = await fetch(url);
       const news = await newsFetch.json();
       setArticles(news.articles);
       console.log(news.articles);
      

    },[])

    const searchTopic = async () =>{
        let url = ` https://newsapi.org/v2/everything?q=${search}&apiKey=52ce1a27359a49aea7d0ee955121c64e`

        const newsFetch = await fetch(url);
        const news = await newsFetch.json();
        setArticles(news.articles);
        console.log(news.articles);
    }

    useEffect( async () => {
        let url = ` https://newsapi.org/v2/everything?q=${search}&apiKey=52ce1a27359a49aea7d0ee955121c64e`

       const newsFetch = await fetch(url);
       const news = await newsFetch.json();
       setArticles(news.articles);
       console.log(news.articles);
    }, [search])

 
    return(
        <>
        <div className="search_div container">
        <input type="search" placeholder="Search by topic" onChange={(event) => setSearch( event.target.value)}/>
        <button onClick={searchTopic}>Search</button>
        </div>
           <div className="container">
               <h1 className="heading">Latest Top 20 News</h1>
                <div className="padd">
                    {
                        articles.length == 0 ? <h1> No Data </h1> :
                        articles.map((article, index) =>{
                               return(
                                    <div className="article" key={index}>
                                        <div className="article_img">
                                            <img src={article.urlToImage} alt="article-image" />
                                        </div>
                                        <div className="article_data">
                                            <h1>{article.title}</h1>
                                            <p>{article.author}</p>
                                            <p>{article.description} <a href={article.url} target="_blank" >view more</a></p>
                                            <p className="pub_date">{article.publishedAt}</p>
                                        </div>
                                     </div> 
                               )
                        })
                    }
                </div>
           </div>
        </>
    )
}

export default Main;
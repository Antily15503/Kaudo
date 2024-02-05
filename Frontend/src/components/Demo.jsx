import { useState, useEffect} from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  //logic for url link (hooks)
  const [article, setArticle] = useState({
    url: '',
    summary:'',
  });

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery(); //do we have an error or is fetching
  useEffect(() => { //adds any storage from localStorage to our AllArticles website array
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'))
    if (articlesFromLocalStorage){
      setAllArticles (articlesFromLocalStorage)
    }
  }, []); //uses callback function and dependency array, which executes when the page loads (since array is empty)

  const [allArticles, setAllArticles] = useState([]); //stores any articles that are made into the allArticles array
  
  const handleSubmit = async (e) => { //handles the async event that is clicking the enter button
    e.preventDefault(); //prevents browser from reloading on text-box change
    const { data } = await getSummary({
      articleUrl: article.url
    })
    if(data?.summary){
      const newArticle = { ... article, summary: data.summary}
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles); //setAllArticles to the new array updatedAllArticles
      console.log(newArticle); //prints status of article for debugging.
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles)) //stores all articles into local storage as JSON strings
    }
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      {/*Search section*/}
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center"
        onSubmit={handleSubmit}>
          <img 
            src = {linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL here!"
            value={article.url}
            onChange={(e) => setArticle({ ... article, url: e.target.value})} //checks that the url is a valid url 
            required
            className="url_input peer"
          />
          <button type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
            ↣ 
          </button>
        </form>
      {/*Browse URL History - Which URLs have been seen */}
      <div className="flex flex-col gap-1 max-h-60 overflow-y-auto" //overflow = we can scroll down
      > 
        {allArticles.map((item, index) => (
          <div
            key={`link-${index}`}
            onClick={() => setArticle(item)}
            className="link_card">
              <div className="copy_btn">
                <img
                src={copy}
                alt="copy_icon"
                className="w-[40%] h0[40%] object-contain"/>
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
          </div>
        ))}
      </div>
    </div>

      {/*Displaying results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? ( //if it is currently fetching
          <img src={loader} alt="loader" className="w-20 h-20 object-contain"/>
        ) : error ? ( //if an error has occured
          <p className="font-inter font-bold text-black text-center">
            That wasn't supposed to happen! Whoops...
            <br/>
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : ( //we found an article!!
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p>{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>

    </section>
  )
}

export default Demo
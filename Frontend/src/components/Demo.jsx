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

  
  
  const handleSubmit = async (e) => { //handles the async event that is clicking the enter button
    e.preventDefault(); //prevents browser from reloading on text-box change
    const { data } = await getSummary({
      articleUrl: article.url
    })
    if(data?.summary){
      const newArticle = { ... article, summary: data.summary}
      setArticle(newArticle);

      console.log(newArticle); //prints status of article for debugging.
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
      </div>
      {/*Displaying results */}

    </section>
  )
}

export default Demo
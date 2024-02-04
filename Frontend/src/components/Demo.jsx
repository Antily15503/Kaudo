import { useState, useEffect} from 'react';
import { copy, linkIcon, loader, tick } from '../assets';

const Demo = () => {
  //logic for url link
  const [article, setArticle] = useState({
    url: '',
    summary:'',
  });
  
  const handleSubmit = async (e) => { //handles the async event that is clicking the enter button
    alert('Submitted!'); 
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
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-5">
        <img src= {logo} alt="kaudo_logo"
        className= "w-36 object-contain"/>  

        <button type="button" onClick={() => window.open('https://github.com/Antily15503/Kaudo')}
        className="black_btn">
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Introducing Summarizer
      </h1>
      <h1 className="desc">
      Learn what you need to know immediately and eliminate any clutter through Summarizer by Kaudo, an open-source article summarizer that turns lengthy articles into clear and easy-to-digest summaries.
      </h1>
      <h4 className="orange_gradient font-semibold">
        Powered by OpenAI GPT-4
      </h4>
    </header>
  )
}

export default Hero
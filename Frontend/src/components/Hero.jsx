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
    </header>
  )
}

export default Hero
import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='w-full h-full sm:h-screen bg-gradient-to-b from-black via-black to-cyan-700'>
      <div className= "flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className = "flex flex-col justify-center h-full sm:pr-20 ">
          <h2 className = "pt-12 mt-10 text-5xl font-bold text-white sm:text-7xl sm:pt-0 sm:mt-0">
            I'm Godwin Cris O. Urbano
          </h2>
          <p className = 'max-w-2xl py-2 text-gray-500'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500} className = "flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer text-size-20 group w-fit bg-gradient-to-r from from-cyan-500 to-gray-500">
              Portfolio 
              <span className = "duration-300 group-hover:rotate-90">
                <RiArrowRightSLine size={30} className= "ml-1 "/>
              </span>
            </Link>
          </div>
        </div>
        <div >
          <img src={HeroImage} alt="Display Profile"  className = "mx-auto mt-5 mb-5 sm:max-w-xl rounded-2xl"/>
        </div>
      </div>
    </div>
  )
}

export default Home
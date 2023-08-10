import React from 'react'
import taters from "../assets/portfolio/taters.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
import inferno from "../assets/portfolio/inferno.jpg";
import pixel8 from "../assets/portfolio/pixel8.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";










const Portfolio = () => {

    // create an onClick function for demo and code button

    const portfolios = [
        {
            id:1,
            src:taters,
            url:"https://www.ilovetaters.com"
            // create links for works
        },
        {
            id:2,
            src: pixel8,
            url: "https://drive.google.com/file/d/1X7pBHFsfKJAAIWglOkCyZMDVEgplj7j_/view?usp=sharing"
        },
        {
            id:3,
            src: inferno,
            url: "https://infernoph.wixsite.com/benilde"
        }

        // {
        //     id:4,
        //     src: reactSmooth
        // },
        // {
        //     id:5,
        //     src: installNode
        // },
        // {
        //     id:6,
        //     src: reactWeather
        // }

        
    ]

    const newTab=url=>{
        window.open(url)
    }






  return (
    <div name="portfolio" className="w-full text-white bg-gradient-to-b from-cyan-900 to-gray-600 md:h-screen ">
        <div className ="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
            <div className="pb-8 ">
                <p className ="inline text-4xl font-bold border-b-4 border-gray-500">
                    Portfolio
                </p>
                <p className = "py-6">
                Check out some of the projects I've worked on.
                </p>
            </div>



            <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
            {portfolios.map(({id,src,url})=> (
                  <div key={id} className = "rounded-lg shadow-md shadow-gray-600">
                  <img src={src} alt="" 
                  className="duration-200 rounded-md hover:scale-105"/>
                  <div className="flex items-center justify-center">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      onClick={()=> newTab(url)}
                      >
                        Demo</button>
                      {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button> */}
                  </div>
              </div>
                
                ))}
              
            </div>
        </div>




    </div>
  )
}

export default Portfolio
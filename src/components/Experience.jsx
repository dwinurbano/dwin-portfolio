import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";


const Experience = () => {

    const techs =[
        {
            id:1,
            src:html,
            title:"HTML",
            style: "shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style: "shadow-blue-500"
        },
        {
            id:3,
            src:javascript,
            title:"JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id:4,
            src:reactImage,
            title:"React",
            style: "shadow-blue-600"
        },
        {
            id:5,
            src:tailwind,
            title:"Tailwind",
            style: "shadow-sky-400"
        },
        {
            id:6,
            src:nextjs,
            title:"Next JS",
            style: "shadow-white"
        },
        {
            id:7,
            src:graphql,
            title:"GraphQL",
            style: "shadow-pink-400"
        },
        {
            id:8,
            src:github,
            title:"Github",
            style: "shadow-gray-400"
        }
    ]




  return (
    <div name="experience" className="w-full h-screen bg-gradient-to-b from-gray-600 via-gray to-gray-800">
        <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-white">
            <div>
                <p className ="inline p-2 text-4xl font-bold border-b-4 border-gray-500 ">Experience</p>
                <p className ="py-6">These are the technologies I've Worked on</p>
            </div>

            <div className ="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">

                {techs.map(({id,src,title,style}) => (
                        <div key={id} className={`py-2 duration-500 rounded-lg shadow-md hover:scale-105 ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className ="pt-4">{title}</p>
                </div>



                ))}

                
            </div>


        </div>
    </div>
  )
}

export default Experience
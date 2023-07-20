import React from 'react'

const About = () => {
  return (
    <div name="about" className = "w-full h-screen text-white bg-gradient-to-b from-cyan-700 to-cyan-900" >
        <div className = "flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
            <div className="pb-8">
                <p className ="inline text-4xl font-bold border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className ="text-xl mt-15">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <br/>

            <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eaque in vel quibusdam ratione eum accusantium incidunt temporibus consequatur sapiente, quod aliquam fugiat beatae asperiores sunt reiciendis officiis et labore?
            
            </p>
        </div>
    </div>
  )
}

export default About
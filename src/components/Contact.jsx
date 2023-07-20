import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className = "w-full h-screen p-4 text-white bg-gradient-to-b from-gray-800 via-black to-black">
        <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
            <div className="pb-8">
                <p className = "inline text-4xl font-bold border-b-4 border-gray-500">Contact</p>
                <p className ="py-6">Submit the form below to get in touch with me</p>
            </div>

            <div className="flex items-center justify-center ">
                <form action="https://getform.io/f/c51c3d4b-9d1a-4c1e-83cf-563f168d33c8"
                method="POST"
                className="flex flex-col w-full h-full md:w-1/2">

                    <input type="text" name="name" placeholder="Enter your name"
                    className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none" />
                    <input type="text" name="email" placeholder="Enter your email"
                    className="p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none" />
                    <textarea name="message" rows="10" placeholder="Write your message here."
                    className="p-2 bg-transparent border-2 rounded-md focus:outline-none"></textarea>

                    <button className="flex px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 first-letter:items-center hover:scale-105">Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
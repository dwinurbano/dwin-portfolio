import React from 'react'

const About = () => {
  return (
    <div name="about" className = "w-full h-full text-white sm:h-screen bg-gradient-to-b from-cyan-700 to-cyan-900" >
        <div className = "flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
            <div className="pb-8">
                <p className ="inline text-4xl font-bold border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className ="text-xl mt-15">
            A 22-year-old graduate student at the Polytechnic University of the Philippines studying BS Computer Engineering. He resides in Brgy. Apolonio Samson Quezon City. Interned at Taters Enterprises Inc and Pixel8 Web Solutions while interested in computer-related disciplines, notably programming. He is also interested in art and has worked on several projects such as Madagascar, Jollibee commercials, Prime video series, DragRace Philippines, and so on. In his spare time, he participates in dancing competitions and is a member of the FAO Dance Crew, where he serves as president.
            </p>

            <br/>

            <p className="text-xl">
            He also has some societal affiliations, specifically with the Youth for Christ group, where he serves as the Cluster Youth Head of Metro-Manila West B4 from 2019 until the present. During Junior High, he was selected as SSG President and was eligible to participate in the HB Centrex Leader Scholarship and SYDP Scholarship offered by the local city in 2019.Despite this, he was able to flourish intellectually from elementary school, graduating as a 5th Honor student in Grade 5, graduating with Honors in Junior and Senior High School, and being a member of the Dean's List and President List throughout several semesters of college.
            
            </p>
        </div>
    </div>
  )
}

export default About
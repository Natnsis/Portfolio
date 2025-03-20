import {Circle} from 'lucide-react'

const About = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-center items-center">
            <p className="text-center bg-gray-300 px-2 rounded-lg w-fit">About Me</p>
        </div>
        <div className="flex gap-x-40 px-20 mt-10">
             <div>
                 <img src="home.jpg" alt="anotherImage"  className="w-7xl" />
             </div>

             <div>
                <h1 className='font-bold text-3xl mb-10'>Curious About Me? Here you have it:</h1>
                <div className='space-y-5 text-gray-500'>
                      <p className="w-[100%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis temporibus vero quos optio natus laudantium iure. Laudantium necessitatibus blanditiis quisquam aperiam accusamus culpa ratione quis, vitae aliquam, distinctio possimus. Ex!</p>
                      <p className="w-[100%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias iusto exercitationem dignissimos, accusantium expedita enim ducimus, fuga at id cum dolores quod ratione voluptatem! Atque praesentium commodi deserunt neque cupiditate!</p>
                      <p className="w-[100%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos amet incidunt esse! Veniam repellat in commodi omnis minus ut nam architecto voluptate natus consectetur nemo culpa, debitis modi enim corporis.</p>
                      <p>Finally some quick bits about me.</p>
                      <div>
                        <div className='flex gap-x-4'>
                          <Circle width={8} fill='black'/>
                          <p>Degree in Computer Science</p>
                        </div>
                        <div className='flex gap-x-4'>
                          <Circle width={8} fill='black'/>
                          <p>FullStack Web Developer</p>
                        </div>
                        <div className='flex gap-x-4'>
                          <Circle width={8} fill='black'/>
                          <p>Mobile App Developer</p>
                        </div>

                      </div>
                    <p>One last thing, I'm available for freelance work,so feel free to reach out and say hello! I promise I don&apos;t bite ;&#41;</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default About
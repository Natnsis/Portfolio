import {MapPin, Circle, Github, Twitter, Linkedin} from 'lucide-react'

const Hero = () => {
  return (
    <div className="pt-20 flex w-full px-20">
        <div className="flex flex-col w-[50%]">
            <div>
                <h1 className="text-7xl font-bold">Hi, I&apos;m Natnael</h1>
            </div>
            <div className="pt-5">
                <p className="w-[100%] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officia veniam sunt explicabo vero quis similique voluptatem corrupti nemo pariatur ratione eveniet doloribus provident, id facilis, suscipit officiis deleniti tempore.</p>
            </div>
            <div className='mt-5'>
                <div className='flex gap-2'> 
                    <MapPin width={20} color='black'/>
                    <p>Adiss Ababa, Ethiopia.</p>
                </div>
                <div className='flex gap-2'> 
                    <Circle width={10} color='green' fill='green'/>
                    <p>Available to assist and work on Projects</p>
                </div>
            </div>
            <div className='mt-10 flex space-x-4'>
                <Github width={20} color='black'/>
                <Twitter width={20} color='black'/>
                <Linkedin width={20} color='black'/>

            </div>
        </div>
        <div>
            <img className='w-[70%] ml-20 shadow-2xl ' src="home.jpg" alt="myImage"/>
        </div>
    </div>
  )
}

export default Hero
import {Mail, Phone, Github, Linkedin, Twitter, Copy} from 'lucide-react'

const Footer = () => {
  return (
    <div className="bg-white px-5 pt-10 space-y-5 pb-15">
      <div className="flex justify-center">
        <p className="text-center bg-gray-300 px-2 rounded-lg w-fit">Get In Touch</p>
      </div>
      <div>
        <p className="text-center text-gray-500 ">Write next? Feel free to reach out to me if you&apos;re looking for <br/> a developer, have a query, or simply want to connect.</p>
      </div>

      <div className='mt-15 flex  flex-col items-center justify-center'>
        <div className='flex text-4xl font-bold items-center space-x-2'>
          <Mail size={24}/>
          <p>nsisay49@gmail.com</p>
          <Copy size={24}/>
        </div>
        <div className='flex text-4xl font-bold items-center space-x-2'>
          <Phone size={24}/>
          <p>+251903259444</p>
          <Copy size={24}/>
        </div>
      </div>

      <div>
        <p className='text-center text-gray-500'>you may also find me on those platforms!</p>
      </div>
      <div className='flex justify-center gap-5 '>
        <Github width={20} color='black'/>
        <Twitter width={20} color='black'/>
        <Linkedin width={20} color='black'/>

      </div>
    </div>
  )
}

export default Footer
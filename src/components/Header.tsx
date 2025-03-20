import {Sun, Moon} from "lucide-react"

const Header = () => {
  return (
    <header className="flex pt-5 px-20 justify-between">
            <div className="text-4xl font-bold">
                &lt;NS /&gt;
            </div>
            <div className="flex space-x-5">
                <div>About</div>
                <div>Work</div>
                <div>Testimonials</div>
                <div>Contact</div>
            </div>
            
            <div className="flex space-x-4">
                <div><Sun width={20} color="black"/></div>
                <div className="bg-black text-white text-center h-8 rounded-lg px-3 py-1">Download CV</div>
            </div>
    </header>

  )
}

export default Header
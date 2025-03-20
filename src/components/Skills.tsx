import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faJs, faNodeJs, faPhp} from "@fortawesome/free-brands-svg-icons"
import { faMobileAlt} from "@fortawesome/free-solid-svg-icons"
import {DiMongodb, DiMysql} from "react-icons/di"
import {SiTailwindcss, SiTypescript, SiNextdotjs, SiExpo, SiExpress, SiLaravel} from "react-icons/si"
const Skills = () => {
  return (
    <div className="bg-white px-20 pt-10 space-y-5 pb-15">
      <div className="flex justify-center">
        <p className="text-center bg-gray-300 px-2 rounded-lg w-fit">Skills</p>
      </div>
      <div>
        <p className="text-center text-gray-500 ">The skills, tools and technologies i am really good at:</p>
      </div>

      {/* skills set */}
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faJs} color="black" className="text-9xl"></FontAwesomeIcon>
          <p className="font-bold text-center">Javascript</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faNodeJs} color="black" className="text-9xl"></FontAwesomeIcon>
          <p className="font-bold text-center">Nodejs</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faReact} color="black" className="text-9xl"></FontAwesomeIcon>
          <p className="font-bold text-center">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faMobileAlt} color="black" className="text-9xl"></FontAwesomeIcon>
          <p className="font-bold text-center">ReactNative</p>
        </div>
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faPhp} color="black" className="text-9xl"></FontAwesomeIcon>
          <p className="font-bold text-center">Php</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss color="black" className="text-9xl"/>
          <p className="font-bold text-center">TailwindCss</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript color="black" className="text-9xl"/>
          <p className="font-bold text-center">TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiExpress color="black" className="text-9xl"/>
          <p className="font-bold text-center">Express</p>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs color="black" className="text-9xl"/>
          <p className="font-bold text-center">NextJs</p>
        </div>
        <div className="flex flex-col items-center">
          <SiLaravel color="black" className="text-9xl"/>
          <p className="font-bold text-center">Laravel</p>
        </div>
        <div className="flex flex-col items-center">
          <SiExpo color="black" className="text-9xl"/>
          <p className="font-bold text-center">Expo</p>
        </div>
        <div className="flex flex-col items-center">
          <DiMongodb color="black" className="text-9xl"/>
          <p className="font-bold text-center">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <DiMysql color="black" className="text-9xl"/>
          <p className="font-bold text-center">MySQL</p>
        </div>
      </div>
      
    </div>
  )
}

export default Skills
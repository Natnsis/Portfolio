import { LucideIcon } from "lucide-react"
import {ExternalLink} from "lucide-react"


type Props = {
    ImageUrl:string,
    title:string,
    description:string,
    TechStack1?:string,
    TechStack2?:string,
    TechStack3?:string,
    TechStack4?:string,
    TechStack5?:string,
    TechStack6?:string,
    TechStack7?:string,
}

const Projects = ({ImageUrl, title, description, TechStack1,TechStack2, TechStack3, TechStack4, TechStack5, TechStack6, TechStack7 }:Props) => {
  return (
    <div className="shadow-lg px-10 py-5 rounded-lg flex justify-between space-x-15 pb-10">
        <div className="">
            <img src={ImageUrl} alt=""  className="rounded-lg w-3xl" />
        </div>

        <div className="flex flex-col gap-y-3 justify-center pt-10">
            <div>
                <h1 className="text-lg font-bold">{title}</h1>
            </div>
            <div className="w-[100%]">
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 w-[40%]">
                {TechStack1? <p className="text-center bg-gray-200 px-2 rounded-lg w-fit">{TechStack1}</p>: ""}
                {TechStack2? <p className="text-center bg-gray-200 px-2 rounded-lg w-fit">{TechStack2}</p>: ""}
                {TechStack3? <p className="text-center bg-gray-200 px-2 rounded-lg w-fit">{TechStack3}</p>: ""}
                {TechStack4? <p className="text-center bg-gray-200 px-2 rounded-lg w-fit">{TechStack4}</p>: ""}
                {TechStack5? <p className="text-center bg-gray-200 px-2 rounded-lg w-fit">{TechStack5}</p>: ""}
                {TechStack6? <p className="text-center bg-gray-200 px-2 rounded-lg w-fit">{TechStack6}</p>: ""}
                {TechStack7? <p className="text-center bg-gray-200 px-2 rounded-lg w-fit">{TechStack7}</p>: ""}

            </div>
            <div className="">
                <ExternalLink size={24} color="black"/>
            </div>
        </div>

    </div>
  )
}

export default Projects
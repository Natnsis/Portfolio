import Projects from "./Projects"


const Work = () => {
  return (
    <div className="bg-white px-5 pt-10 space-y-5 pb-15">
        <div className="flex justify-center">
          <p className="text-center bg-gray-300 px-2 rounded-lg w-fit">Work</p>
        </div>
        <div>
          <p className="text-center text-gray-500 ">Some of the note worthy projects i have built:</p>
        </div>
        <div className="space-y-10">
            <Projects title="Ecommerce" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, at. Eius voluptatum ad suscipit ducimus accusantium doloribus vero aspernatur quibusdam facilis sint pariatur, nihil culpa laboriosam perspiciatis. Iste, nihil eum." ImageUrl="home.jpg" TechStack1="React" TechStack2="TaiwindCss" TechStack3="Nodejs" TechStack4="Express" TechStack5="MySQL" />
            <Projects title="Ecommerce" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, at. Eius voluptatum ad suscipit ducimus accusantium doloribus vero aspernatur quibusdam facilis sint pariatur, nihil culpa laboriosam perspiciatis. Iste, nihil eum." ImageUrl="home.jpg" TechStack1="React" TechStack2="TaiwindCss" TechStack3="Nodejs" TechStack4="Express" TechStack5="MySQL" />
            <Projects title="Ecommerce" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, at. Eius voluptatum ad suscipit ducimus accusantium doloribus vero aspernatur quibusdam facilis sint pariatur, nihil culpa laboriosam perspiciatis. Iste, nihil eum." ImageUrl="home.jpg" TechStack1="React" TechStack2="TaiwindCss" TechStack3="Nodejs" TechStack4="Express" TechStack5="MySQL" />
        </div>


    </div>
  )
}

export default Work
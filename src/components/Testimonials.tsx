import People from "./People"

const Testimonials = () => {
  return (
    <div>
        <div className="flex justify-center items-center">
            <p className="text-center bg-gray-300 px-2 rounded-lg w-fit">Experience</p>
        </div>
        <div>
          <p className="text-center text-gray-500 pt-5">Nice things people have said about me:</p>
        </div>
        <div className="flex justify-between items-center pt-10">
            <People imageUrl="AssoaLogo.jpg" description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis consequatur, nihil non quidem sapiente totam reiciendis sequi eaque optio voluptates ullam, mollitia veritatis iste laborum explicabo inventore. Asperiores, vero.'" position="Founder - xyz.com" name="John Doe"/>

            <People imageUrl="AssoaLogo.jpg" description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis consequatur, nihil non quidem sapiente totam reiciendis sequi eaque optio voluptates ullam, mollitia veritatis iste laborum explicabo inventore. Asperiores, vero.'" position="Founder - xyz.com" name="John Doe"/>
            
            <People imageUrl="AssoaLogo.jpg" description="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis consequatur, nihil non quidem sapiente totam reiciendis sequi eaque optio voluptates ullam, mollitia veritatis iste laborum explicabo inventore. Asperiores, vero.'" position="Founder - xyz.com" name="John Doe"/>
        </div>
    </div>
  )
}

export default Testimonials


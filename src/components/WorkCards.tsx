

type Props = {
  Company:string,
  Job:string,
  listn1:string,
  listn2:string,
  listn3?:string,
  listn4?:string,
  date:string
}

const WorkCards = ({Company, Job, listn1, listn2, listn3, listn4, date}:Props) => {
  return (
    <div className="px-5 py-8 flex justify-between bg-white rounded-lg shadow-lg  h-fit mt-10">
      <div>
        <p className="text-green-500 font-extrabold text-3xl">{Company}</p>
      </div>

      <div>
        <div>
          <h1 className="text-2xl font-bold mb-5 ">{Job}</h1>
          <ul style={{ listStyleType:"disc" }}>
            <li>{listn1}</li>
            <li>{listn2}</li>
            <li>{listn3}</li>
            <li>{listn4}</li>
          </ul>
        </div>
      </div>

      <div>
        <p className="text-gray-400">{date}</p>
      </div>
      
    </div>
  )
}

export default WorkCards
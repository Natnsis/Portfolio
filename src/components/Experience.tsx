import WorkCards from "./WorkCards"


const Experience = () => {
  return (
    <div className="flex flex-col">
        <div className="flex justify-center items-center">
            <p className="text-center bg-gray-300 px-2 rounded-lg w-fit">Experience</p>
        </div>
        <div>
          <p className="text-center text-gray-500 pt-5">Here is a quick summary of my most recent experiences</p>
      </div>
        <div className="px-20 py-5">
            <WorkCards Company="UpWork" Job="Sr.FrontEnd Developer" listn1="hello am natnael"
            listn2="hello am natnael sisay" listn3="yes again am natnael" listn4="now look am natnael sisay"
            date="Nov-2021-Present"/>
            <WorkCards Company="UpWork" Job="Sr.FrontEnd Developer" listn1="hello am natnael"
            listn2="hello am natnael sisay" listn3="yes again am natnael" listn4="now look am natnael sisay"
            date="Nov-2021-Present"/>
            <WorkCards Company="UpWork" Job="Sr.FrontEnd Developer" listn1="hello am natnael"
            listn2="hello am natnael sisay" listn3="yes again am natnael" listn4="now look am natnael sisay"
            date="Nov-2021-Present"/>
        </div>
    </div>
  )
}

export default Experience
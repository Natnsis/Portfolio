type Props = {
  imageUrl:string,
  description:string,
  name:string,
  position:string
}

const People = ({imageUrl, description, name, position}:Props) => {
  return (
    <div className="w-96 pt-10 pb-10 rounded-lg shadow-2xl bg-white px-10 space-y-3">
      <div className="flex justify-center">
        <img src={imageUrl} className="w-20 rounded-full" />
      </div>
      <div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div>
        <h1 className="flex justify-center text-lg font-bold">{name}</h1>
        <p className="text-center text-gray-400">{position}</p>
      </div>
    </div>
  )
}

export default People
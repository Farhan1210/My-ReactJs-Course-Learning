const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center">{props.id + 1}</h2>
        <div>
            <p className="text-xl leading-normal text-white text-shadow-lg mb-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore tempora aliquam illo.</p>
            <div className="flex justify-between">
                <button style={{backgroundColor: props.color}} className="text-white font-medium py-2 px-8 rounded-full">{props.tag}</button>
                <button style={{backgroundColor: props.color}} className="text-white font-medium py-2 px-3 rounded-full"><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent

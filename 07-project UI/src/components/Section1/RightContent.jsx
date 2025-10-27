import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id="right" className="h-full flex rounded-4xl flex-nowrap gap-10 overflow-x-auto p-6 w-2/3">
      {props.users.map((el, i) => {
        return <RightCard key={i} id={i} img={el.img} tag={el.tag} color={el.color} />
      })}
    </div>
  )
}

export default RightContent

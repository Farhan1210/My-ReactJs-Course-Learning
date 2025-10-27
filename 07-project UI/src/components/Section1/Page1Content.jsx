import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
  return (
    <div className="flex items-center justify-between gap-10 h-[90vh] pt-6 pb-16 px-18">
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content

import {useParams} from 'react-router'

const CoursesDetail = () => {

    const param = useParams()
    console.log(param);

  return (
    <div>
      <h1>Courses Details</h1>
    </div>
  )
}

export default CoursesDetail

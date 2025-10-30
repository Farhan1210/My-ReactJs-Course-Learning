import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"

const Navbar2 = () => {

    const [theme] = useContext(ThemeDataContext)

  return (
    <div className="flex items-start gap-10">
      <h4 className="text-xl font-medium">Home</h4>
      <h4 className="text-xl font-medium">About</h4>
      <h4 className="text-xl font-medium">Contact</h4>
      <h4 className="text-xl font-medium">Services</h4>
      <h4 className="text-xl font-medium">{theme}</h4>
    </div>
  )
}

export default Navbar2

import { useContext } from "react"
import Navbar2 from "./Navbar2"
import { ThemeDataContext } from "../context/ThemeContext"


const Navbar = () => {

  const [theme, setTheme] = useContext(ThemeDataContext)

  return (
    <div className={`flex items-center justify-between px-20 py-6 ${theme}`}>
      <h1 className="text-shadow-lg text-3xl font-bold">Logo</h1>
      <Navbar2 />
    </div>
  )
}

export default Navbar

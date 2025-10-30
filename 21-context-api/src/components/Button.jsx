import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"


const Button = () => {

    const [ , setTheme] = useContext(ThemeDataContext)

    const changeThemeBtn = function() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

  return (
    <div>
      <button 
        className={`px-10 py-3 bg-amber-400 text-black mt-4 rounded font-semibold active:scale-95`}
        onClick={changeThemeBtn}
        >Change Theme</button>
    </div>
  )
}

export default Button

import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"

function App() {

  const users = [
    {img: 'https://plus.unsplash.com/premium_photo-1666264200711-9a06dbfb0fea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687', intro: '', tag: 'Satisfied', color: 'royalblue'},
    {img: 'https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070', intro: '', tag: 'Underserved', color: 'lightseagreen'},
    {img: 'https://images.unsplash.com/photo-1613324996029-f6190a17838f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170', intro: '', tag: 'Underbanked', color: 'black'},
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App

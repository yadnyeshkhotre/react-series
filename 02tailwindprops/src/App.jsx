// import { useState } from 'react'
import  './App.css'
import Card from './components/Card'
import gayatriImage from './assets/gayatri.jpeg';




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-3xl bg-yellow-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card  userName="Yadnyesh Khotre" post="Staff Engineer" source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bhXhsDZDp7vRsAh4oAGwPZ_qQ_XjaIlnsQ&usqp=CAU"}/>
      <br></br>
      <Card   userName="Gayatri Patil" source={gayatriImage}/>
    </>
  )
}

export default App

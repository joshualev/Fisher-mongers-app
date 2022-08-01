import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar'

const App = () => {
  const [fishList, setFishList] = useState([])

  const getFish = async() => {
    const url = 'http://localhost:4000/fish'
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    setFishList(data)
  }


  useEffect(() => {
    getFish()
  },[])
  // console.log(fishList)
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route 
          path='/' 
          element={fishList && 
          <Products
            fishList={fishList} 
          />}
        />
      </Routes>
        
    </div>
  )
}

export default App
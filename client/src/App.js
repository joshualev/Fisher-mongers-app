import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar'
import Show from './components/Show/Show'

const App = () => {
  const [fishList, setFishList] = useState([])

  const getFish = async() => {
    const url = 'http://localhost:4000/fish'
    const res = await fetch(url)
    const data = await res.json()
    setFishList(data)
  }


  useEffect(() => {
    getFish()
  },[])
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route 
          path='/' 
          element={fishList && <Products
            fishList={fishList} 
          />}
        />
        <Route 
          path='/:fishID' 
          element={fishList && <Show
            fishList={fishList}
          />}
        />
      </Routes>
        
    </div>
  )
}

export default App
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Products from './components/Products/Products'
import Checkout from './components/Checkout/Checkout'
import Navbar from './components/Navbar/Navbar'
import Show from './components/Show/Show'
import Create from './components/Create/Create'
import Footer from './components/Footer/Footer'
import SignIn from './components/User/SignIn'
import SignUp from './components/User/SignUp'
import Edit from './components/Edit/Edit'

const App = () => {
  const [fishList, setFishList] = useState(null)

  const getFish = async () => {
    const url = 'http://localhost:4000/fish'
    const res = await fetch(url)
    const data = await res.json()
    setFishList(data)
  }

  const navigate = useNavigate()


  useEffect(() => {
    getFish()
  }, [])



  return (
    <div>
      <Navbar />

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
        <Route
          path="/new"
          element={<Create handleNewFish={handleNewFish} />}
        />
        <Route
          path='/checkout'
          element={fishList && <Checkout
            fishList={fishList}
          />}
        />
        <Route
          path='/signin'
          element={<SignIn />}
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route 
          path='/edit/:fishID'
          element={fishList && <Edit fishList={fishList} handleEdit={handleEdit} />}
        />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
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
import SignOut from './components/User/SignOut'
import Cart from './components/Checkout/Cart/Cart'
import ProtectedRoute from './components/Protected/Protected'

const App = () => {
  const [fishList, setFishList] = useState(null)
  const [authorised, setAuthorised] = useState(null)
  const [cart, setCart] = useState([])
  const navigate = useNavigate()

  const getFish = async () => {
    const url = 'http://localhost:4000/fish'
    const res = await fetch(url)
    const data = await res.json()
    setFishList(data)
  }

  useEffect(() => {
    getFish()
  }, [])

  const handleAuth = (authed) => {
    console.log(authed)
    setAuthorised(authed)
    navigate("/")
  }

  const handleLogout = () => {
    setAuthorised(false)
    navigate("/")
  }

  const addToCart = (fishID, quantity) => {
    console.log(fishID, quantity);
    const newItem = { [fishID]: quantity }
    console.log(newItem);
    setCart([
      ...cart,
      newItem
    ]) // <- Why not working?
    console.log(cart);
  }

  const removeFromCart = (item, quantity) => {
    console.log(item, quantity);
  }

  // Activate once login route is working
  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const res = await fetch('/users/isauthorised')
      const data = await res.json()
      console.log(data.msg)
      setAuthorised(data.authorised)
    }
    checkIfLoggedIn()
  }, [])

  const handleNewFish = async (createdFish) => {
    if (createdFish.imageURL === "") {
      createdFish.imageURL = undefined
    }
    // console.log("New fish added:", createdFish)
    const res = await fetch("http://localhost:4000/fish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(createdFish)
    })
    // console.log(res.ok)  
    if (res.ok) {
      const newFish = await res.json()
      // console.log(newFish)
      setFishList([
        ...fishList,
        newFish
      ])
      navigate("/")
    } else {
      console.log("error adding the new fish")
    }
  }

  const handleEdit = async (editedFish) => {
    // console.log("Edited fish: ", editedFish)
    const res = await fetch(`http://localhost:4000/fish/${editedFish._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedFish)
    })
    // console.log(res.ok)
    if (res.ok) {
      const updatedFish = await res.json()
      // console.log(updatedFish)
      const fishIndex = fishList.map((fish => fish._id === updatedFish._id)).indexOf(true)
      console.log(fishIndex)
      setFishList([
        ...fishList.splice(0, fishIndex),
        updatedFish,
        ...fishList.splice(fishIndex+1)
      ])
      navigate(`/${updatedFish._id}`)
    } else {
      console.log("error updating the fish")
    }
  }

  const handleDelete = async (fishIDToDelete) => {
    // console.log("delete fish: ", fishIDToDelete)
    const res = await fetch(`http://localhost:4000/fish/${fishIDToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    setFishList(fishList.filter((fish) => fish._id !== fishIDToDelete))
    navigate("/")
  }

  return (
    <div>
      { fishList &&
        <Navbar fishList={fishList} authorised={authorised}/>
      }

      <Routes>
        <Route
          path='/'
          element={fishList && <Products
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            fishList={fishList} 
          />}
        />
        <Route
          path='/:fishID'
          element={fishList && <Show
            fishList={fishList}
            handleDelete={handleDelete}
            authorised={authorised}
          />}
        />
        <Route
          path="/new"
          element={
            <ProtectedRoute authorised={authorised}>
              <Create handleNewFish={handleNewFish}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/cart'
          element={fishList && <Cart
            fishList={fishList} cart={cart}
          />}
        />
        <Route
          path='/checkout'
          element={fishList && <Checkout
            fishList={fishList}
          />}
        />
        <Route
          path='/edit/:fishID'
          element={
            <ProtectedRoute authorised={authorised}>
              {fishList && <Edit fishList={fishList} handleEdit={handleEdit} />}
            </ProtectedRoute>
          }
        />
        <Route
          path='/signin'
          element={<SignIn handleLogin={handleAuth} />}
        />
        <Route
          path='/signup'
          element={<SignUp handleRegister={handleAuth} />}
        />
        <Route
          path="/signout"
          element={<SignOut handleSignout={handleLogout} />}
        />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
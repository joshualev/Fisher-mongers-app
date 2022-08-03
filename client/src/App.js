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
import Cart from './components/Checkout/Cart/Cart'
import ProtectedRoute from './components/Protected/Protected'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#086972"
    },
    secondary: {
      main: '#0b95a2'
    },
    lighter: {
      main: "#ffffff"
    },
    default: {
      main: "#0b95a2"
    }
  }
});

const App = () => {
  const [fishList, setFishList] = useState(null)
  const [authorised, setAuthorised] = useState(null)
  const [cart, setCart] = useState({
    items: [],
    totalQuantity: 0,
    subTotal: 0
  })
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

  // Adds item to cart with the current counter quantity
  const addToCart = (fish, quantity) => {
    const inCart = (fish) => cart.items.find((item) => item._id === fish._id)
    let items

    if (fish.stock < 1) return

    if (!cart.items.length || !inCart(fish)) {
      items = [...cart.items, { ...fish, cartQuantity: quantity }]
    } else {
      items = cart.items.map((item) => {
        if (fish._id !== item._id) return item
        return { ...item, cartQuantity: item.cartQuantity + quantity }
      })
    }

    const totals = items.reduce((obj, item) => {
      obj.totalQuantity += item.cartQuantity
      obj.subTotal += item.price * item.cartQuantity
      return obj
    }, { totalQuantity: 0, subTotal: 0 })

    setCart({ items, ...totals })
  }

  const removeFromCart = (item) => {
    const newCartItems = cart.items.filter((fish) => fish._id !== item._id)

    const totals = newCartItems.reduce((obj, item) => {
      obj.totalQuantity += item.cartQuantity
      obj.subTotal += item.price * item.cartQuantity
      return obj
    }, { totalQuantity: 0, subTotal: 0 })

    setCart({ items: newCartItems, ...totals })
  }

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
        ...fishList.splice(fishIndex + 1)
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
    <ThemeProvider theme={theme}>
      <div>
        {fishList &&
          <Navbar
            fishList={fishList}
            authorised={authorised}
            handleLogout={handleLogout}
            cart={cart}
          />
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
              cart={cart}
              cartTotal={cart.subTotal}
              removeFromCart={removeFromCart}
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
        </Routes>
        <Footer />

      </div>
    </ThemeProvider>
  )
}

export default App
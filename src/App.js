import React, { useState, useEffect } from 'react'
import Products from './Components/Product/Products'
import Navbar from "./Components/Product/Product/NavBar/Navbar"
import Cart from "./Components/Product/Product/Cart/Cart"
import Bottom from "./Components/Product/Product/Bottom/Bottom"
import { commerce } from "./lib/commerce"
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
    const [products, setProducs] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list()
        setProducs(data)
    }

    const fetchCart = async () => {
        const response = await commerce.cart.retrieve()
        setCart(response)
    }
    const setQuantity = async (id, quantity) => {
        const response = await commerce.cart.update(id, { quantity })
        setCart(response)

    }
    const deleteItem = async (id) => {
        const { cart } = await commerce.cart.remove(id)

        setCart(cart)

    }

    const addToCard = async (id, quantity) => {
        const { cart } = await commerce.cart.add(id, quantity)
        setCart(cart)

    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    return (
        <Router>
            <div>
                <Navbar itemsInCard={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCard={addToCard} />
                        <Bottom />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cartItems={cart} onfetchCart={setQuantity} deleteItem={deleteItem} />
                    </Route>
                    {/* <Route exact path="/"> */}

                    {/* </Route> */}
                </Switch>
            </div>
        </Router >
    )
}

export default App

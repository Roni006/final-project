import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Discovery from './pages/Discovery'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import RootLayOuts from "./pages/RootLayOuts"
import Error from "./pages/Error"
import ProductDetails from "./pages/ProductDetails"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Shop from "./pages/Shop"
import Registration from "./pages/Registration"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayOuts />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />

    </>

  )
}

export default App

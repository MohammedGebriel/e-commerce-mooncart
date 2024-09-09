import {Layout,Home,Shop, ProductDetails, Cart, Favorites} from './'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Services from './pages/services/Services'

export default function App() {
  return (
    <div className="relative ">
      <BrowserRouter >
      <Layout >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/product-details/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  )
}

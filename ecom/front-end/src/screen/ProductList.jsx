import { useEffect, useState } from "react"
import ProductCard from "../components/common/ProductCard"
import axios from "axios"
const ProductList = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try { 
            let res = await axios.get("http://localhost:5000/api/product/all");
            setProducts(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])
 

    return (
       <section className="my-10 px-4 sm:my-16 md:my-20"> 
  <div className="container mx-auto">
    {/* Heading: Responsive font sizes */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-semibold text-center">
      Product List
    </h2>
    <p className="mt-2 text-center text-gray-700 font-medium text-sm sm:text-base max-w-md mx-auto">
      Order it for you or for your beloved ones
    </p>

    <div className="mt-8 sm:mt-12">
      {/* Grid: 
          - 1 column on extra small (optional, but 2 is usually fine for simple cards)
          - 2 columns on small mobile
          - 3 columns on tablets
          - 4 columns on desktop 
      */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-6 md:gap-8">
        {products.slice(0, 8).map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  </div>
</section>
    )
}

export default ProductList
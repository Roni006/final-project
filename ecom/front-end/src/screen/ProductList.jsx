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
        <section className="my-10 ">
            <div className="container">
                <h2 className="text-3xl text-black font-medium text-center">Product List</h2>
                <p className="mt-1 text-center text-black font-medium text-base">Order it for you or for Your beloved ones</p>

                <div className="mt-5">
                    <div className="w-full grid grid-cols-2 items-center justify-center sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        {products.slice(0,8).map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductList
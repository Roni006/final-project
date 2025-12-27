import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ProductCard from "../components/common/ProductCard.jsx";
import { Link } from "react-router";
import Container from "../components/common/Container";

const PRODUCTS_PER_PAGE = 16;

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [price, setPrice] = useState(10000);
    const [page, setPage] = useState(1);

    // fetch products
    const fetchProducts = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/product/all"
            );
            setProducts(res.data.data || []);
        } catch (err) {
            console.log(err);
        }
    };

    // fetch categories
    const fetchCategories = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/category/all"
            );
            setCategories(res.data.data || []);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    // price + category filter
    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const priceMatch = (p?.discountPrice ?? 0) <= price;
            const categoryMatch = selectedCategory
                ? p?.category?._id === selectedCategory
                : true;
            return priceMatch && categoryMatch;
        });
    }, [products, price, selectedCategory]);

    // pagination
    const totalPages = Math.ceil(
        filteredProducts.length / PRODUCTS_PER_PAGE
    );

    const paginatedProducts = filteredProducts.slice(
        (page - 1) * PRODUCTS_PER_PAGE,
        page * PRODUCTS_PER_PAGE
    );

    return (
        <main className="py-6 md:py-10 px-6 sm:px-8 lg:px-0"> {/* Added padding here for left side gap */}
            <Container>
                {/* BREADCRUMB */}
                <div className="mb-6 text-sm text-slate-500 pl-1">
                    <Link to="/" className="hover:underline">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-slate-900 font-medium">Shop</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* FILTER SIDEBAR */}
                    <div className="w-full lg:max-w-[280px] lg:border-r border-gray-100 lg:pr-6">
                        <div className="bg-gray-50 px-6 py-6 rounded-md">
                            <div className="flex items-center border-b border-gray-300 pb-3 mb-6">
                                <h3 className="text-slate-900 text-lg font-semibold">Filter</h3>
                                <button
                                    onClick={() => { setPrice(10000); setSelectedCategory(""); }}
                                    className="text-sm text-red-500 font-semibold ml-auto"
                                >
                                    Clear
                                </button>
                            </div>

                            {/* Price Range */}
                            <div className="mb-8">
                                <h4 className="font-semibold mb-2">Price: ${price}</h4>
                                <input
                                    type="range" min="0" max="10000" value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="w-full accent-slate-900"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <h4 className="font-semibold mb-3">Category</h4>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full border p-2 rounded bg-white outline-none"
                                >
                                    <option value="">All Categories</option>
                                    {/* Make sure 'categories' array exists */}
                                    {categories?.map((cat) => (
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCT GRID */}
                    <div className="flex-1 lg:pl-6"> {/* Added left padding for desktop view */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {/* Ensure paginatedProducts is defined */}
                            {paginatedProducts?.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default Shop;
import axios from "axios";
import { useEffect, useState } from "react";

const FilterComponent = ({ handleFilter }) => {
    const [category, setCategory] = useState([]);
    const [id, setId] = useState(null);
    const fetchAllCategory = async () => {
        try {
            let res = await
                axios.get(`${import.meta.env.VITE_API}/category/all`);
            setCategory(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = (id) => {
        setId(id);
        handleFilter(id)
    }

    useEffect(() => {
        fetchAllCategory();
    }, [])
    return (
        <aside className='w-full'>
            <ul>
                {
                    category.map((cat, i) => (
                        <li
                            onClick={() => handleClick(cat._id)}
                            key={i}
                            className={`${cat._id == id ? 'bg-[#DB4444]' : 'bg-slate-400'} py-2 px-4 rounded-lg  mb-5 cursor-pointer text-white duration-300 hover:translate-x-2 mt-5`}
                        >
                            {cat.name}
                        </li>
                    ))
                }
            </ul>
        </aside>

    )
}

export default FilterComponent
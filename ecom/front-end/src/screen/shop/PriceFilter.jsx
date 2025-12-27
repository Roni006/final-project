import React from 'react'

const PriceFilter = ({
  price,
  setPrice,
  selectedCategory,
  setSelectedCategory,
  setPage,
  categories,
  discountPrice
}) => {

  return (
    <div className="w-full lg:max-w-[280px] lg:border-r border-gray-100 lg:pr-6">
      <div className="bg-gray-50 px-6 py-6 rounded-md lg:rounded-none">

        {/* Header */}
        <div className="flex items-center border-b border-gray-300 pb-2 mb-6">
          <h3 className="text-slate-900 text-lg font-semibold">Filter</h3>

          <button
            onClick={() => {
              setPrice(10000);
              setSelectedCategory("");
              setPage(1);
            }}
            className="text-sm text-[#DB4444] font-semibold ml-auto !cursor-pointer"
          >
            Clear
          </button>
        </div>

        {/* PRICE */}
        <div>
          <h4 className="text-slate-900 text-base font-semibold">
            Price
          </h4>

          <input
            type="range"
            min="0"
            max="10000"
            value={price}
            onChange={(e) => {
              setPrice(Number(e.target.value));
              setPage(1);
            }}
            className="w-full mt-4 accent-slate-900"
          />

          <div className="flex justify-between text-sm text-slate-600 mt-2">
            <span>$0</span>
            <span>${discountPrice}</span>
          </div>
        </div>

        {/* CATEGORY */}
        <div className="mt-8">
          <h4 className="text-slate-900 text-base font-semibold mb-3">
            Category
          </h4>

          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setPage(1);
            }}
            className="w-full border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-slate-900"
          >
            <option value="">All Categories</option>

            {categories?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}

          </select>
        </div>

      </div>
    </div>
  )
}

export default PriceFilter

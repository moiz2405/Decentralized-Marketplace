// /components/product/FilterBar.js
const FilterBar = () => (
  <div className="flex justify-between items-center mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
    <form className="flex flex-1">
      <input
        type="text"
        placeholder="Search products..."
        aria-label="Search products"
        className="border border-gray-600 p-2 rounded-lg flex-1 mr-2 bg-gray-700 text-white placeholder-gray-400"
      />
      <button 
        type="submit" 
        className="bg-teal-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-teal-600"
        aria-label="Search"
      >
        Search
      </button>
    </form>
    <div className="ml-4">
      <select 
        className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-white"
        aria-label="Sort products"
      >
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  </div>
);

export default FilterBar;

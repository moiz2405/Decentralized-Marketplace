// /components/product/FilterBar.js
const FilterBar = () => (
    <div className="flex justify-between items-center mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Search products..."
        className="border border-gray-600 p-2 rounded-lg flex-1 mr-2 bg-gray-700 text-white placeholder-gray-400"
      />
      <button className="bg-teal-500 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-teal-600">Search</button>
      <div>
        <select className="border border-gray-600 p-2 rounded-lg bg-gray-700 text-white">
          <option value="">Sort by</option>
          <option value="price">Price</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
    </div>
  );
  
  export default FilterBar;
  
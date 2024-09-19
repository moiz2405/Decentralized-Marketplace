// /components/home/TopCategories.js
import { FaPaintBrush, FaMusic, FaGamepad, FaCrown } from 'react-icons/fa'; // React icons for category placeholders

export default function TopCategories() {
  const categories = [
    { name: 'Art', icon: <FaPaintBrush size={30} /> },
    { name: 'Music', icon: <FaMusic size={30} /> },
    { name: 'Collectibles', icon: <FaCrown size={30} /> },
    { name: 'Gaming', icon: <FaGamepad size={30} /> },
  ];

  return (
    <section className="top-categories p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Top Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="category-card p-6 border rounded-lg shadow-lg flex flex-col items-center justify-center hover:bg-blue-100 transition duration-300 transform hover:scale-105">
            <div className="mb-4 text-blue-500">{category.icon}</div>
            <h3 className="text-xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

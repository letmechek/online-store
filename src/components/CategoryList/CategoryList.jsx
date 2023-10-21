import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map((cat) => (
    <li
      key={cat}
      className={`px-2 py-1 mx-2 rounded cursor-pointer ${
        cat === activeCat
          ? 'bg-blue-700 text-white'
          : 'hover:bg-indigo-100 text-blue-700'
      }`}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  ));
  
  return (
    <ul className="mt-2 text-gray-700 text-lg text-center font-semibold -8 px-6 py-5">{cats}</ul>
  );
}

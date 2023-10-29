import './CategoryList.css';

export default function CategoryList({ categories, activeCat, setActiveCat }) {
  const cats = categories.map((cat, index) => (
    <li
      key={cat}
      className={`category-card cursor-pointer ${
        cat === activeCat
          ? 'active'
          : 'inactive'
      }`}
      onClick={() => setActiveCat(cat)}
    >
      {cat}
    </li>
  ));

  return (
    <div className="category-list">
      <ul>
        {cats}
      </ul>
    </div>
  );
}


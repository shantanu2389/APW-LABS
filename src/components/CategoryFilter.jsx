export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="category-filters" role="group" aria-label="Filter by category">
      {categories.map((category) => (
        <button key={category.id} className={`filter-chip ${active === category.id ? 'selected' : ''}`} onClick={() => onChange(category.id)} aria-pressed={active === category.id}>
          {category.label}
        </button>
      ))}
    </div>
  )
}

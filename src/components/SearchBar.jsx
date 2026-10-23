import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange, placeholder = 'Search apps, ports and tools…' }) {
  return (
    <label className="search-bar">
      <Search size={19} aria-hidden="true" />
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} aria-label="Search the app library" />
      {value && <button type="button" className="search-clear" onClick={() => onChange('')} aria-label="Clear search"><X size={16} /></button>}
      <kbd>⌘ K</kbd>
    </label>
  )
}

export default function SearchInput({ value, onChange, onSelect, results, placeholder, renderItem, getKey }) {
  return (
    <div className="relative">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
      <input
        className="w-full pl-10 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary-container outline-none transition-all font-body-md text-on-surface"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
      {results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-[#dcfce7] rounded-lg mt-1 shadow-md max-h-48 overflow-y-auto">
          {results.map(item => (
            <li
              key={getKey(item)}
              onClick={() => onSelect(item)}
              className="px-4 py-3 hover:bg-emerald-50 cursor-pointer text-on-surface font-label-sm"
            >
              {renderItem(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

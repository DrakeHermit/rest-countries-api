import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>('Filter by Region');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    'Africa',
    'America', 
    'Asia',
    'Europe',
    'Oceania'
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <div className="w-1/2 relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full dark:bg-blue-900 text-white py-5  px-6 rounded-md flex items-center justify-between hover:bg-slate-600 transition-colors lg:w-1/2"
      >
        <span className="text-xs">{selectedValue}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 md:w-full dark:bg-blue-900 rounded-md md:mt-2 shadow-lg z-10 overflow-hidden">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full text-left px-4 py-3 text-white text-xs hover:bg-slate-600 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
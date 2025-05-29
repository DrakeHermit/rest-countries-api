import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function RegionFilter() {
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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dark:bg-blue-900 w-full bg-white text-sm dark:text-white text-gray-900 py-4 px-4 rounded-md flex items-center justify-between hover:opacity-90 transition-opacity shadow-sm border-0 focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-500"
      >
        <span>{selectedValue}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 w-full dark:bg-blue-900 bg-white rounded-md shadow-lg z-50 border dark:border-gray-700 border-gray-200">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full text-left px-4 py-3 dark:text-white text-gray-900 text-sm hover:dark:bg-blue-800 hover:bg-gray-100 transition-colors first:rounded-t-md last:rounded-b-md cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
import { useEffect, useState } from "react";
import "./style.scss";

interface FilterProps {
  onFilterTasks: (filter: string) => void;
}

export const Filter = ({ onFilterTasks }: FilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const options = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(event.target.value);
  };

  useEffect(() => {
    onFilterTasks(selectedFilter);
  }, [selectedFilter])

  return (
    <div className="filter-container">
      {options.map((option) => (
        <label className="filter-label" key={option.id}>
          <input
            className="filter-input"
            type="radio"
            name="filter"
            value={option.id}
            checked={selectedFilter === option.id}
            onChange={handleOptionChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

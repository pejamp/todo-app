import { useState } from "react";
import "./style.scss";

export const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const options = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "completed", label: "Completed" },
  ];

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(event.target.value);
  };

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

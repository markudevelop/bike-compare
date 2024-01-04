import { useState } from "react";

const INITIAL_FILTERS = {
  brand: "",
  price: "",
};

type Filters = {
  brand: string;
  price: string;
};

type Props = {
  onFilter: (filters: Filters) => void;
};

const BikeFilters: React.FC<Props> = ({ onFilter }) => {
  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
    onFilter(INITIAL_FILTERS);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-2">Filter Bikes</h2>
      <div className="mb-4">
        <label
          htmlFor="brand"
          className="block text-sm font-medium text-gray-700"
        >
          Brand:
        </label>
        <input
          id="brand"
          aria-label="Brand"
          type="text"
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price (max):
        </label>
        <input
          id="price"
          aria-label="Price"
          type="number"
          name="price"
          value={filters.price}
          onChange={handleFilterChange}
          className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <button
        onClick={applyFilters}
        className="w-full py-2 bg-blue-700 text-sm text-gray-100 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Apply Filters
      </button>
      <button
        onClick={resetFilters}
        className="mt-2 w-full text-sm font-semibold py-2 rounded border border-gray-400"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default BikeFilters;

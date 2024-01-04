import { useState, useMemo } from "react";
import BikeCard from "./BikeCard";
import BikeFilters from "./BikeFilters";

import type { Bike } from "../types/bikes";

type Props = {
  bikes: Bike[];
};

const BikeSelector: React.FC<Props> = ({ bikes }) => {
  const [selectedBikes, setSelectedBikes] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ brand: "", price: "" });

  const handleBikeSelect = (bike: Bike) => {
    if (selectedBikes.includes(bike.id)) {
      setSelectedBikes(selectedBikes.filter((b) => b !== bike.id));
    } else if (selectedBikes.length < 5) {
      // TODO show validation message if user chosen more
      setSelectedBikes([...selectedBikes, bike.id]);
    }
  };

  const handleFilters = (values: any) => {
    setFilters(values);
  };

  const handleCompare = () => {
    const path = `/compare/${selectedBikes.join("/")}`;
    window.location.href = path;
  };

  const filteredBikes = useMemo(
    () =>
      bikes.filter((bike) => {
        return (
          (filters.brand === "" ||
            bike.brand?.toLowerCase() === filters.brand?.toLowerCase()) &&
          (filters.price === "" || bike.price <= parseFloat(filters.price))
        );
      }),
    [filters]
  );
  const isBikeSelected = (bike: Bike) => selectedBikes.includes(bike.id);
  const isCompareDisabled = selectedBikes.length < 2;

  return (
    <div className="pb-16 px-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-blue-500 text-white p-2 rounded-md my-4 w-full"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
          {showFilters && <BikeFilters onFilter={handleFilters} />}
        </div>
        <div className="hidden md:block md:w-1/4 md:mr-4">
          <BikeFilters onFilter={handleFilters} />
        </div>
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredBikes.map((bike) => (
            <BikeCard
              key={bike.id}
              bike={bike}
              selected={isBikeSelected(bike)}
              onToggleSelect={() => handleBikeSelect(bike)}
            />
          ))}
        </div>
        <button
          className={`fixed bottom-0 left-0 w-full p-4 text-white ${
            !isCompareDisabled ? "bg-blue-500" : "bg-gray-500"
          }`}
          disabled={isCompareDisabled}
          onClick={handleCompare}
          style={{ zIndex: 1000 }}
        >
          Compare Bikes
        </button>
      </div>
    </div>
  );
};

export default BikeSelector;
